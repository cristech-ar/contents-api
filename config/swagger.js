const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Movie and Series API',
      version: '1.0.0',
      description: 'API for managing movies, series, actors, and directors.',
      contact: {
        name: 'Cristian Ríos',
        email: 'contact@crisdev.tech',
      },
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT',
      }
    },
    servers: [
      {
        url: 'https://contents-api.crisdev.tech',
        description: 'Production server',
      },
      {
        url: 'http://localhost:7000',
        description: 'Development server',
      },
    ],
    components: {
      schemas: {
        Actor: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              example: 'Leonardo DiCaprio',
            },
            movies: {
              type: 'array',
              items: {
                type: 'string',
                format: 'ObjectId',
                example: '64f8b8f7e4b0d1a2b3c4d5e6',
              },
            },
            series: {
              type: 'array',
              items: {
                type: 'string',
                format: 'ObjectId',
                example: '64f8b8f7e4b0d1a2b3c4d5e7',
              },
            },
          },
          required: ['name'],
        },
        Director: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              example: 'Christopher Nolan',
            },
            movies: {
              type: 'array',
              items: {
                type: 'string',
                format: 'ObjectId',
                example: '64f8b8f7e4b0d1a2b3c4d5e6',
              },
            },
            series: {
              type: 'array',
              items: {
                type: 'string',
                format: 'ObjectId',
                example: '64f8b8f7e4b0d1a2b3c4d5e7',
              },
            },
          },
          required: ['name'],
        },
        Movie: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
              example: 'Inception',
            },
            director: {
              type: 'string',
              example: 'Christopher Nolan',
            },
            summary: {
              type: 'string',
              example: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
            },
            genre: {
              type: 'string',
              example: 'Sci-Fi',
            },
            ratings: {
              type: 'string',
              example: 'PG-13',
            },
            actors: {
              type: 'array',
              items: {
                type: 'string',
              },
              example: ['Leonardo DiCaprio'],
            },
            releaseYear: {
              type: 'integer',
              example: 2010,
            },
          },
          required: ['title', 'director', 'summary', 'genre', 'ratings', 'actors', 'releaseYear'],
        },
        Episode: {
          type: 'object',
          properties: {
            episodeNumber: {
              type: 'integer',
              example: 1,
            },
            title: {
              type: 'string',
              example: 'Pilot',
            },
            summary: {
              type: 'string',
              example: 'The first episode of the series.',
            },
            director: {
              type: 'string',
              example: 'James Burrows',
            },
            actors: {
              type: 'array',
              items: {
                type: 'string',
              },
              example: ['Jennifer Aniston', 'Courteney Cox'],
            },
          },
          required: ['episodeNumber', 'title', 'summary', 'director', 'actors'],
        },
        Season: {
          type: 'object',
          properties: {
            seasonNumber: {
              type: 'integer',
              example: 1,
            },
            episodes: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/Episode',
              },
            },
          },
          required: ['seasonNumber', 'episodes'],
        },
        Series: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
              example: 'Friends',
            },
            seasons: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/Season',
              },
            },
            description: {
              type: 'string',
              example: 'A comedy series about six friends living in New York City.',
            },
          },
          required: ['title', 'seasons', 'description'],
        },
      },
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./routes/*.js'],
};


const swaggerSpec = swaggerJsDoc(swaggerOptions);


const setupSwagger = (app) => {
  app.use('/explorer', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;