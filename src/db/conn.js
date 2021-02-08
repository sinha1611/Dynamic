const mongoose = require("mongoose");

/*mongoose.connect("mongodb://localhost:27017/laladynamic",{
mongoose.connect(mongoose,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify: true,
}).then(()=>{
    console.log("connection seccessful");
}).catch((error) => {
    console.log(error);
})*/

const URI = "mongodb+srv://datauser:datauser@cluster0.bomdw.mongodb.net/check?retryWrites=true&w=majority";

const connectDB = async()=>{
    await mongoose.connect(URI,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:true,
        useUnifiedTopology:true
    });
    console.log('data has been connected..');
}

module.exports = connectDB;