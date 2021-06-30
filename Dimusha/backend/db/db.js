const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://year3Student:year3Student@cluster0.hbwgy.mongodb.net/AF?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
