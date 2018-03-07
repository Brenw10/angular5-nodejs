import SkillCollection from '../models/SkillCollection';

function getSkills() {
    return SkillCollection.Model.find().exec();
}

function createSkill(name) {
    const skill = new SkillCollection.Model({ name });
    return skill.save();
}

export default { getSkills, createSkill };