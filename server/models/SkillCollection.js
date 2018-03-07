import Mongoose from 'Mongoose';

const Schema = new Mongoose.Schema({
    name: String
}, { collection: 'SkillCollection' });

Mongoose.connect('mongodb://localhost:27017/test');

module.exports = { Mongoose, Schema, Model: Mongoose.model('SkillCollection', Schema) };