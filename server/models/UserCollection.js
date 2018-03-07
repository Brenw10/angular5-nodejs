import Mongoose from 'Mongoose';

const Schema = new Mongoose.Schema({
    name: String,
    skills: [
        {
            skill: { type: Mongoose.Schema.Types.ObjectId, ref: 'SkillCollection' },
            value: Number
        }
    ]
}, { collection: 'UserCollection' });

Mongoose.connect('mongodb://localhost:27017/test');

module.exports = { Mongoose, Schema, Model: Mongoose.model('UserCollection', Schema) };