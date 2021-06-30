const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://AFTEST:AFTEST@aftest.bmmvf.mongodb.net/AF_project?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
