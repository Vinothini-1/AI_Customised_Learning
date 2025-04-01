// routes/profileRoutes.js
import express from 'express'; // ✅ Use `import` instead of `require()`
import Profile from '../models/Profile.js'; // Path to your Profile model
const router = express.Router();

// POST route to save a profile
router.post("/", async (req, res) => {
  try {
    console.log("Received data:", req.body); // Log incoming data

    if (!req.body.name || !req.body.email || !req.body.password) {
      return res.status(400).json({ msg: "All fields are required!" });
    }

    const profile = new Profile(req.body);
    await profile.save();

    res.status(201).json({ msg: "Profile saved successfully!" });
  } catch (error) {
    console.error("Error saving profile:", error.message); // Log detailed error
    res.status(500).json({ msg: error.message }); // Send the exact error message
  }
});



export const profileRoutes = router;
