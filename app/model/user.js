module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
   
    const UserSchema = new Schema({
      username: { type: String  },
      password: { type: String  },
      status: { type: Number,default: 1 },
    });
   
    return mongoose.model('User', UserSchema,'user');
  }