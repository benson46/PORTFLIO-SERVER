import Skill from "./skill.model.js";

export const getting_skills = async() => {
  try {
    const skills = await Skill.find({});

    if (!skills) {
      throw new Error("No skills found");
    }
    return {skills:skills , message:"Skills found" , success:true}
  } catch (error) {
    throw new Error(error.message)
  }
};


export const adding_skills = async(name,category)=>{
    try {
        const new_skill = await new Skill({
            name,
            category
        })

        await new_skill.save()

        return ({
            skill:new_skill,
            success:true,
            message:"Skill added successfully"
        })

    } catch (error) {
        throw new Error(error.message);
    }
}


export const updating_skill = async (id, updateData) => {
    try {
      const skill = await Skill.findByIdAndUpdate(id, updateData, { new: true });
      return { skill, success: true, message: "Skill updated successfully" };
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  export const deleting_skill = async (id) => {
    try {
      await Skill.findByIdAndDelete(id);
      return { success: true, message: "Skill deleted successfully" };
    } catch (error) {
      throw new Error(error.message);
    }
  };