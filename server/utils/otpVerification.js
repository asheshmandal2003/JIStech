import dotenv from "dotenv";
import twilio from "twilio";

dotenv.config();

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN, {
  lazyLoading: true,
});

export const sendOTP = async (req, res) => {
  await client.verify.v2
    .services(process.env.SERVICE_ID)
    .verifications.create({ to: req.body.phoneNo, channel: "sms" })
    .then((verification) => res.status(200).json({ verification }))
    .catch((err) =>
      res.status(500).json({ message: "Internal server error!" })
    );
};

export const verifyOTP = async (req, res) => {
  await client.verify.v2
    .services(process.env.SERVICE_ID)
    .verificationChecks.create({ to: req.body.phoneNo, code: req.body.otp })
    .then((verification_check) =>
      res.status(200).json(verification_check.status)
    )
    .catch((err) =>
      res.status(500).json({ message: "Internal server error!" })
    );
};
