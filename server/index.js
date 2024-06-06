import  express  from 'express';
import  mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import './controllers/cron-job.js'
import  router from "./routes/auth.js";
const app = express();
import dotenv from 'dotenv';
dotenv.config();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors({
  origin: '*'
}));
app.use('',router);
const CONNECTION_URL = process.env.MONGOURL;
const PORT =process.env.PORT|| 5000;
mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => app.listen(PORT,()=>  console.log(`Server running on port ${PORT}`)
  ))
  .catch((err) => console.error('MongoDB connection error:', err));


