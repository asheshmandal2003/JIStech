import dotenv from "dotenv";
import User from "../models/auth.js";
import mapboxGeocoding from "@mapbox/mapbox-sdk/services/geocoding.js";

dotenv.config();

const geocodingClient = mapboxGeocoding({
  accessToken: process.env.MAPBOX_TOKEN,
});

export const signup = async (req, res) => {
  const { firstName, lastName, phoneNo, location, password } = req.body;
  const geoData = await geocodingClient
    .forwardGeocode({
      query: location,
      limit: 1,
    })
    .send();
  const newUser = new User({
    firstName,
    lastName,
    phoneNo,
    location,
  });
  newUser.coordinates = geoData.body.features[0].geometry.coordinates;
  try {
    const registeredUser = await User.register(newUser, password);
    req.logIn(registeredUser, async (err) => {
      if (err) return err;
      res.status(201).json(registeredUser);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const signin = (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    res.status(401).json({ message: "Invalid Username and Password!" });
  }
};
