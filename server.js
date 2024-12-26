const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Configure Nodemailer
const transporter = nodemailer.createTransport({
    host: "smtp.example.com", // Replace with your SMTP server
    port: 465,
    secure: true,
    auth: {
        user: "your-email@example.com", // Replace with your email
        pass: "your-email-password", // Replace with your email password
    },
});

// Contact Form Route
app.post("/send-contact", async (req, res) => {
    const { name, email, subject, message } = req.body;

    const mailOptions = {
        from: `"${name}" <your-email@example.com>`, // Replace with your authenticated email
        to: "kelvinekiganga999@gmail.com", // Replace with the recipient email
        subject: `Contact Form: ${subject}`,
        text: `Message from ${name} (${email}):\n\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send("Message sent successfully.");
    } catch (error) {
        console.error("Error sending message:", error);
        res.status(500).send("Failed to send message.");
    }
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
