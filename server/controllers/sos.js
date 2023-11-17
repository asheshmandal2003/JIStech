import * as turf from "@turf/turf";
import User from "../models/auth.js";

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
    const presentIn1km = users.filter(
      (user) => findDistance([88.533329, 23.73391], user.coordinates) <= 1
    );
    let presentIn10km;
    if (presentIn1km.length <= 10) {
      presentIn10km = users.filter(
        (user) => findDistance([88.533329, 23.73391], user.coordinates) <= 10
      );
    }
    res
      .status(200)
      .json(presentIn1km.length ? presentIn1km.length : presentIn10km.length);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal server error!" });
  }
};
