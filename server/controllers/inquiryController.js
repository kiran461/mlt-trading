const nodemailer = require("nodemailer");

exports.handleInquiry = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Create a transport using Gmail or other service
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER, // your email
        pass: process.env.MAIL_PASS, // your app password
      },
    });

    const mailOptions = {
      from: `"MLT Website Inquiry" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO, // your destination email
      subject: `New Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully.");
    res.status(200).json({ message: "Inquiry submitted and email sent!" });
  } catch (error) {
    console.error("Email sending failed:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
};
