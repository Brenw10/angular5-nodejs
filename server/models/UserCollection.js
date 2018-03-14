import Mongoose from 'Mongoose';
import config from 'config';

Mongoose.connect(config.get('database'));

const Schema = new Mongoose.Schema({
    name: String,
    skills: [
        {
            skill: { type: Mongoose.Schema.Types.ObjectId, ref: 'SkillCollection' },
            value: Number
        }
    ]
}, { collection: 'UserCollection' });

export default { Mongoose, Schema, Model: Mongoose.model('UserCollection', Schema) };