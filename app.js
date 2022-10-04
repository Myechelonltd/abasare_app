import dotEnv from 'dotenv';
import express from 'express';
import { connect } from './dataBase/db.config'
import bodyParser from 'body-parser';
import options from './utils/options.js';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from "swagger-jsdoc";

import usersRoutes from './routes/User'

const app = express();
app.use(cors());
dotEnv.config()

const PORT = process.env.PORT || 5000;
const specs = swaggerJsDoc(options);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Weclome to Abasare.');
});

app.use('/api/v1/doc', swaggerUI.serve, swaggerUI.setup(specs));
app.use('/api/v1/users', usersRoutes);

connect().then(() => {
  console.log('Database connected')
  app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
})