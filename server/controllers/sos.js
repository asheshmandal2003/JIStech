import dotenv from "dotenv";
import * as turf from "@turf/turf";
import User from "../models/auth.js";
import twilio from "twilio";

dotenv.config();
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN, {
  lazyLoading: true,
});

const findDistance = (source, destination) => {
  const from = {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: source,
    },
    properties: {
      id: String(new Date().getTime()),
    },
  };
  const to = {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: destination,
    },
    properties: {
      id: String(new Date().getTime()),
    },
  };
  const linestring = {
    type: "Feature",
    geometry: {
      type: "LineString",
      coordinates: [from, to],
    },
  };
  const distance = turf.length(linestring);
  return distance;
};

export const sendSOS = async (req, res) => {
  try {
    const users = await User.find({});
    const { longitude, latitude } = req.body;
    console.log([Number(longitude), Number(latitude)]);
    users.map((user) =>
      console.log(
        findDistance([Number(longitude), Number(latitude)], user.coordinates)
      )
    );
    const presentIn1km = users.filter(
      (user) =>
        findDistance([Number(longitude), Number(latitude)], user.coordinates) <=
        1
    );
    let presentIn10km;
    if (presentIn1km.length <= 11) {
      presentIn10km = users.filter(
        (user) =>
          findDistance(
            [Number(longitude), Number(latitude)],
            user.coordinates
          ) <= 100
      );
    }
    if (presentIn1km.length > 11) {
      presentIn1km.map(async (user) => {
        await client.messages
          .create({
            from: process.env.TWILIO_PHONE_NUMBER,
            to: `+91${user.phoneNo}`,
            body: "Testing...",
          })
          .catch((err) =>
            res.status(500).json({ message: "Internal server error!" })
          );
      });
    } else {
      presentIn10km.map(async (user) => {
        await client.messages
          .create({
            from: process.env.TWILIO_PHONE_NUMBER,
            to: `+91${user.phoneNo}`,
            body: "Testing...",
          })
          .catch((err) =>
            res.status(500).json({ message: "Internal server error!" })
          );
      });
    }
    res
      .status(200)
      .json(
        `Message sent successfully to ${
          presentIn1km.length > 11 ? presentIn1km.length : presentIn10km.length
        } persons!`
      );
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal server error!" });
  }
};
