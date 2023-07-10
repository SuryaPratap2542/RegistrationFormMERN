const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/SuryaForm", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
// }).then(() => {
//     console.log(`Connection Successful!!`);
// }).catch((e) => {
//     console.log(`No connection`);
// });

// mongoose.connect('mongodb+srv://suryapratap2542:12345@cluster0.0bwe6bi.mongodb.net/?retryWrites=true&w=majority').
//   catch(error => handleError(error));

// // Or:
// try {
//   await mongoose.connect('mongodb://127.0.0.1:27017/test');
// } catch (error) {
//   handleError(error);
// }
async function connectToDatabase() {
    try {
      await mongoose.connect('mongodb+srv://suryapratap2542:12345@cluster0.0bwe6bi.mongodb.net/?retryWrites=true&w=majority firstDatbase');
      console.log('Connection Successful!!');
    } catch (error) {
      console.log('No connection', error);
    }
  }
  
  connectToDatabase();
  
