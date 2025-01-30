const express = require('express');
const authRoutes = require('./routes/authRoutes');
const movieRoutes = require('./routes/movieRoutes');
const seriesRoutes = require('./routes/seriesRoutes');
const actorRoutes = require('./routes/actorRoutes');
const { connectToDatabase } = require('./config/db');

const app = express();


app.use(express.json());


app.use('/auth', authRoutes);
app.use('/v1/movies', movieRoutes);
app.use('/v1/series', seriesRoutes);
app.use('/v1/actors', actorRoutes);

const startServer = async () => {

    await connectToDatabase();

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}🚀`);
    });
};

startServer();
