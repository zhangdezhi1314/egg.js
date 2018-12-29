module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
  
    var d=new Date();
   
    const AccessSchema = new Schema({
      module_name: { type: String }, //模块名称
      action_name: { type: String  }, //操作名称
      type: { type: Number  },  //节点类型
      url: { type: String  },
      module_id: { 
          type: Schema.Types.Mixed  
        },
      sort: { type:Number },
      add_time: {           
        type:Number,        
        default:100
    
       },
       status:{
           type:Number,
           default:1
       },
       add_time: { 
           type:Number,default:d.getTime()
        }  
  
  
    });
  
   
    return mongoose.model('Access', AccessSchema,'access');
  }