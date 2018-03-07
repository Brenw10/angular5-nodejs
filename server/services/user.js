import UserCollection from '../models/UserCollection';

function getUsers() {
    return UserCollection.Model.find().populate('skills.skill').exec();
}

function getUserById(id) {
    return UserCollection.Model.findOne({ _id: id }).populate('skills.skill').exec();
}

function createUser(name) {
    const user = new UserCollection.Model({ name });
    return user.save();
}

async function setUserSkill(data) {
    await UserCollection.Model.update({ _id: data.userId }, { $push: { skills: { skill: data.skillId, value: data.value } } });
    return UserCollection.Model.findOne({ _id: data.userId }).populate('skills.skill').exec();
}

export default { getUserById, getUsers, createUser, setUserSkill };