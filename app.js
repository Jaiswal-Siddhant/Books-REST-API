const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
dotenv.config();

const bookRoutes = require('./routes/bookRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use('/', authRoutes);
app.use('/book/', bookRoutes);

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.URL, { useNewUrlParser: true }, () => {
	console.log(`Connected to DB`);
});

app.listen(PORT, () => console.log('Server Running on port 3000'));
