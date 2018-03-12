import Mongoose from 'Mongoose';
import config from 'config';

Mongoose.connect(config.get('database'));

const Schema = new Mongoose.Schema({
    name: String
}, { collection: 'SkillCollection' });

module.exports = { Mongoose, Schema, Model: Mongoose.model('SkillCollection', Schema) };