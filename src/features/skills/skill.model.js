import mongoose from "mongoose";

const validCategories = [
  "Language & Frameworks",
  "Database & Cloud",
  "Tools & Platforms",
];


const skill_schema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  category: {type: String,enum: validCategories,required: true,
  },
});

const Skill = mongoose.model("Skill", skill_schema);
export default Skill;
