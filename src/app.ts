import dotenv from 'dotenv'; 
dotenv.config();  
import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import todoRoutes from './routes';


// const app:Application = require("express")
const app: Application = express();
const PORT = process.env.PORT 

app.use(bodyParser.json());

app.use('/api', todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


export default app;