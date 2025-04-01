import express from "express";
const router = express.Router();

// Assuming the Contact model exists
import Contact from '../models/ContactUs.js'; // ✅ Use `import`


router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ msg: 'Thank You! Your Message has been sent Successfully' });
  } catch (err) {
    console.error('Error saving contact message:', err);
    res.status(500).json({ msg: 'Failed to save contact message' });
  }
});

export const contactRoutes = router;
