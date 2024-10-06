import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';
import recipeRoutes from './routes/recipeRoutes.js';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
connectDB();
app.use(bodyParser.json());

app.use('/api/recipes', recipeRoutes);

app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
  });
  

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const PORT = process.env.PORT || 2500; // Change from 3000 to 5000
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
