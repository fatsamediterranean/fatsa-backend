import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// TEST ROUTE
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Backend connected 🚀"
  });
});

// REGISTER (şimdilik basit)
app.post("/api/customers/register", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      error: "Missing fields"
    });
  }

  res.json({
    success: true,
    message: "User registered",
    data: { name, email }
  });
});

// EMAIL SETTINGS TEST
app.get("/api/settings/email", (req, res) => {
  res.json({
    enabled: true,
    provider: "resend"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});




// POST /api/notifications/send-test-email
app.post("/api/notifications/send-test-email", (req, res) => {
  const { to } = req.body || {};

  if (!to) {
    return res.status(400).json({
      success: false,
      message: "Recipient email is required"
    });
  }

  return res.status(200).json({
    success: true,
    message: "Test email endpoint working",
    to
  });
});

// POST /api/notifications/send-test-sms
app.post("/api/notifications/send-test-sms", (req, res) => {
  const { to } = req.body || {};

  if (!to) {
    return res.status(400).json({
      success: false,
      message: "Recipient phone is required"
    });
  }

  return res.status(200).json({
    success: true,
    message: "Test SMS endpoint working",
    to
  });
});
