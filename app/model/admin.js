module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    let date = new Date();

   
    const AdminSchema = new Schema({
      username: { type: String  },
      password: { type: String  },
      mobile: { type: Number },
      email: { type: String },
      status: { type:Number,default:1 },
      add_time: { 
                type:Number,
                default:date.getTime()
        },
      is_supper: { type:Number },
      role_id: { type:Schema.Types.objectId },

    });
   
    return conn.model('Admin', AdminSchema,'admin');

  }