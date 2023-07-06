const mongoose = require("mongoose");
const connectDatabase = () =>{


mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true,
    }).then((data)=>{
    console.log('Mongodb connected with server:${data.connection.host}');
}).catch((err)=>{
    console.log(err)
})
}
module.exports = connectDatabase;


// const connectDatabase = async () => {
//   try {
//     await mongoose.connect('mongodb://localhost:27017/mydatabase', {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       // Other connection options...
//     });
//     console.log('Connected to the database!');
//   } catch (error) {
//     console.error('Database connection error:', error);
//   }
// };

// module.exports = connectDatabase;

// const mongoose = require('mongoose');

// const connectDatabase = async () => {
//   try {
//     await mongoose.connect('mongodb://localhost:27017/mydatabase', {
//       useNewUrlParser: true,
//       // Other connection options...
//     });
//     console.log('Connected to the database!');
//   } catch (error) {
//     console.error('Database connection error:', error);
//   }
// };

// module.exports = connectDatabase;

