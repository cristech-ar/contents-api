const express = require('express'),
    authRoutes = require('./routes/authRoutes'),
    movieRoutes = require('./routes/movieRoutes'),
    seriesRoutes = require('./routes/seriesRoutes'),
    actorRoutes = require('./routes/actorRoutes'),
    setupSwagger = require('./config/swagger'),
    { connectToDatabase } = require('./config/db'),

    app = express();


app.use(express.json());

setupSwagger(app);

app.use('/auth', authRoutes);
app.use('/v1/movies', movieRoutes);
app.use('/v1/series', seriesRoutes);
app.use('/v1/actors', actorRoutes);

const startServer = async () => {

    await connectToDatabase();

    const PORT = process.env.PORT || 7000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}🚀`);
    });
};

startServer();
