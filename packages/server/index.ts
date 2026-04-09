import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes';

dotenv.config();

const app = express();

app.use(
   cors({
      origin: [
         'http://localhost:5173',
         'http://localhost:5174',
         process.env.CLIENT_URL || '',
      ].filter(Boolean),
   })
);

app.use(express.json());
app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
});
