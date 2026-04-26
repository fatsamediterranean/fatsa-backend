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
