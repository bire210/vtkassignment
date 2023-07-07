import express from 'express';
import http from 'http';

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
const {connection}=require("./config/dbConnect")
const authRouter=require("./routes/authRoute")
const bookRouter=require("./routes/bookRoute")
const app = express();
app.use(cors({
  credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

app.use("/auth",authRouter)
app.use("/books",bookRouter)

server.listen(8080, async() => {

  try {
    await connection
    console.log('Database is connected')
  } catch (error) {
    console.log('Data base is not connected')
  }
  console.log('Server running on http://localhost:8080/');
});