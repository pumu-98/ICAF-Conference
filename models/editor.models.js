const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const editorSchema = new Schema({
    topic_name: { type:String, required:true },
    speaker_name: { type:String, required:true },
    venue: { type:String, required:true },
    time_slot: { type:String, required:true},
    date: { type:String, required:true},
    photo: { type:String, required:true}
   
}) 

const Editors = mongoose.model("Editors", editorSchema);

module.exports = Editors;