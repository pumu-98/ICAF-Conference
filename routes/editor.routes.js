const express = require('express');
const router = express.Router();
const Editors = require('../models/editor.models');
const multer = require('multer');


const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./frontend/public/uploads/");
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

const upload = multer ({storage: storage});

//REQUEST GET ALL ITEMS
router.get("/",  upload.single("photo"), (req, res) => {
    Editors.find()
    .then((editor) => res.json(editor))
    .catch((err) => res.status(400).json(`Error : ${err}`));
});


//REQUEST ADD NEW ITEMS
router.post("/add", upload.single("photo"), (req,res) => {
    const newEditor = new Editors({
        topic_name: req.body.topic_name,
        speaker_name: req.body.speaker_name,
        venue:req.body.venue,
        time_slot:req.body.time_slot,
        date:req.body.date,
        photo: req.file.originalname,
    });


    newEditor
    .save()
    .then(() => res.json("The new post posted successfully"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});


//REQUEST FIND ARTICLE BY ID
router.get('/:id', (req,res) => {
    Editors.findById(req.params.id)
    .then(editor => res.json(editor))
    .catch(err => res.status(400).json(`Eror: ${err}`))
});

//REQUEST FIND ITEMS BY ID AND UPDATE
router.put("/update/:id", upload.single("photo"), (req,res) => {
    Editors.findById(req.params.id)
    .then(editor => {
        editor.topic_name = req.body.topic_name;
        editor.speaker_name = req.body.speaker_name;
        editor.venue = req.body.venue;
        editor.time_slot = req.body.time_slot;
        editor.date = req.body.date;
        editor.photo = req.file.originalname;

        editor
        .save()
        .then(() => res.json("The post is update successfully"))
        .catch((err) => res.status(400).json(`Error: ${err}`));
        console.log ("Update unsuccessful..Try Again");
    })

    .catch(err => res.status(400).json(`Error: ${err}`));
});
 

//REQUEST FIND ITEMS BY ID AND DELETE
router.delete("/:id", (req,res) => {
    Editors.findByIdAndDelete(req.params.id)
    .then(() =>res.json("The post is deleted"))
    .catch(err => res.status(400).json(`Error: ${err}`));
})



module.exports = router;