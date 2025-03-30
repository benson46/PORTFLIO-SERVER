import * as skill_services from './skill.service.js'

export const get_skills = async(req,res)=>{
    try {
        const skills = await skill_services.getting_skills();
    
        return res.status(200).json({skills:skills.skills , message:skills.message , success:skills.success})
    } catch (error) {
        return res.status(500).json({message:`Skills getting error: ${error.message}`})
    }
}

export const add_skills = async(req,res)=>{
    try {
        const {name,category} = req.body
        const skill = await skill_services.adding_skills(name,category);
        return res.status(201).json(skill)
    } catch (error) {
        return res.status(500).json({message:`Skill adding error : ${error.message}`})
    }
}


// skill.controller.js
export const update_skill = async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body;
      console.log(req.body)
      const skill = await skill_services.updating_skill(id, updateData);
      res.status(200).json(skill);
    } catch (error) {
      res.status(500).json({ message: `Skill update error: ${error.message}` });
    }
  };
  
  export const delete_skill = async (req, res) => {
    try {
      const { id } = req.params;
      await skill_services.deleting_skill(id);
      res.status(200).json({ success: true, message: "Skill deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: `Skill deletion error: ${error.message}` });
    }
  };
  
  // skill.service.js
