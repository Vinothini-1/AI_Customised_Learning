import mongoose from 'mongoose'; // ✅ Use import instead


const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  location: { type: String },
  skills: [String],
  interestedSkills: [String]
});

const Profile = mongoose.model('Profile', profileSchema);
export default Profile;
