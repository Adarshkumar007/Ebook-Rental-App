import  express  from 'express';
import  mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import  router from "./routes/auth.js";
const app = express();

app.use(bodyParser.json({limit:"30mb",extented:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extented:true}));
app.use(cors());
app.use('',router);

const CONNECTION_URL = "mongodb+srv://ganesh:bhuchi@miniproject.jnymzdi.mongodb.net/ebook";
const PORT =process.env.PORT|| 5000;
mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => app.listen(PORT,()=>  console.log(`Server running on port ${PORT}`)
  ))
  .catch((err) => console.error('MongoDB connection error:', err));


