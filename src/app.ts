
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import bfhlRoutes from './routes/bfhlRoutes';

const app: Application = express();

app.use(bodyParser.json());
app.use(cors());


app.use('/bfhl', bfhlRoutes);


app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ is_success: false, message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});