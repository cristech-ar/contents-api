# Movie and Series API 🎮

Welcome to the **Movie and Series API**, a RESTful API built with Node.js, Express, and MongoDB. This API allows you to manage movies, TV series, actors, and directors. It also includes JWT-based authentication for secure access to protected endpoints.

---

## Features 🌟

- **Authentication**: Generate and refresh JWT tokens.
- **Movies**: Retrieve and add movies.
- **Series**: Retrieve series and episode information.
- **Actors**: Retrieve and add actors.
- **Filtering and Sorting**: Filter and sort movies by fields like `title`, `releaseYear`, etc.
- **Docker Support**: Easy setup and deployment using Docker.

---

## Prerequisites 👋

Before running the API, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v20 or higher)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Mongo DB](https://www.mongodb.com/) (if you don´t use docker)

---

## Getting Started 🚀

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/movie-series-api.git
cd movie-series-api
```

### 2. Set Up Environment Variables

Create a `.env` file in the root directory and add the following variables:

```
MONGO_URI=mongodb://mongo:27017/movieDB
JWT_SECRET= (create your own secret)
```

### 3. Run with Docker

Build and start the application using Docker Compose:

```bash
docker-compose up --build
```

The API will be available at [http://localhost:7000](http://localhost:7000).

---

### 4. Run without Docker

Start the MongoDB server:

```bash
mongod
```

Start the Node.js server:

```bash
node server.js
```

## API Endpoints 💽

### Authentication

#### Generate Token

- **Endpoint:** `GET /auth/generate-token`
- **Description:** Generates a JWT token and a refresh token.

**Example Request:**

```bash
curl -X GET http://localhost:7000/auth/generate-token
```

**Example Response:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Refresh Token

- **Endpoint:** `POST /auth/refresh-token`
- **Description:** Refreshes an expired JWT token using a refresh token.

**Example Request:**

```bash
curl -X POST http://localhost:7000/auth/refresh-token \  
     -H "Content-Type: application/json" \  
     -d '{"refreshToken": "<refreshToken>"}'
```

**Example Response:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

### Movies

#### Get Movies

- **Endpoint:** `GET /v1/movies`
- **Description:** Retrieves a list of movies. Supports filtering and sorting.

**Example Request:**

```bash
curl -X GET http://localhost:7000/v1/movies \
     -H "Authorization: Bearer <token>"
```

**Example Response:**

```json
[
  {
    "_id": "64f8b8f7e4b0d1a2b3c4d5e6",
    "title": "Inception",
    "director": "Christopher Nolan",
    "actors": ["Leonardo DiCaprio"],
    "releaseYear": 2010,
    "__v": 0
  }
]
```

#### Add Movie

- **Endpoint:** `POST /v1/movies`
- **Description:** Adds a new movie.
- **Required Fields:**
  - `title` (string)
  - `summary` (string)
  - `ratings` (string)
  - `director` (string)
  - `genre` (string)
  - `actors` (array of strings)
  - `releaseYear` (number)

**Example Request:**

```bash
curl -X POST http://localhost:7000/v1/movies \  
     -H "Content-Type: application/json" \  
     -H "Authorization: Bearer <token>" \ 
     -d '{
    "title": "Inception",
    "director": "Christopher Nolan",
    "actors": [
        "Leonardo DiCaprio"
    ],
    "releaseYear": 2010,
    "ratings": "PG-13",
    "summary": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    "genre":"sci-fi"
'}
```

**Example Response:**

```json
{
  "_id": "64f8b8f7e4b0d1a2b3c4d5e6",
  "title": "Inception",
  "director": "Christopher Nolan",
  "actors": ["Leonardo DiCaprio"],
  "releaseYear": 2010,
  "__v": 0
}
```

---

### Series

#### Get Series

- **Endpoint:** `GET /v1/series`
- **Description:** Retrieves a list of TV series.

**Example Request:**

```bash
curl -X GET http://localhost:7000/v1/series
     -H "Authorization: Bearer <token>" \ 
```

**Example Response:**

```json
[
    {
        "_id": "679bffd04e57f93bc4168975",
        "title": "Friends",
        "seasons": [
            {
                "seasonNumber": 1,
                "episodes": [
                    {
                        "episodeNumber": 1,
                        "title": "The One Where Monica Gets a Roommate",
                        "summary": "Monica gets a new roommate, Rachel, who leaves her fiancé at the altar.",
                        "director": "James Burrows",
                        "actors": [
                            "Jennifer Aniston",
                            "Courteney Cox",
                            "Lisa Kudrow",
                            "Matt LeBlanc",
                            "Matthew Perry",
                            "David Schwimmer"
                        ],
                        "_id": "679bffd04e57f93bc4168977"
                    }
                ],
                "_id": "679bffd04e57f93bc4168979"
            }
        ],
        "description": "A comedy series about six friends living in New York City.",
        "__v": 0
    }
]

```
#### Create Series

- **Description:** Create a new TV serie.

**Example Request:**

```bash
curl -X POST http://localhost:7000/v1/series -H "Content-Type: application/json" 
    -H "Authorization: Bearer <token>" \ 
    -d '{
  "title": "Chicago Fire",
  "description": "A drama series that follows the lives of firefighters and paramedics working at the Chicago Fire Department.",
  "seasons": [
    {
      "seasonNumber": 1,
      "episodes": [
        {
          "episodeNumber": 1,
          "title": "Pilot",
          "summary": "The firefighters and paramedics of Firehouse 51 deal with a massive fire at a pharmaceutical warehouse.",
          "director": "Jeffrey Nachmanoff",
          "actors": ["Jesse Spencer", "Taylor Kinney", "Monica Raymund", "Eamonn Walker"]
        },
        {
          "episodeNumber": 2,
          "title": "Mon Amour",
          "summary": "The team responds to a fire at a nightclub, while tensions rise between Casey and Dawson.",
          "director": "Joe Chappelle",
          "actors": ["Jesse Spencer", "Taylor Kinney", "Monica Raymund", "Eamonn Walker"]
        }
      ]
    },
    {
      "seasonNumber": 2,
      "episodes": [
        {
          "episodeNumber": 1,
          "title": "A Problem House",
          "summary": "The team deals with a dangerous house fire, and Severide faces a personal crisis.",
          "director": "Joe Chappelle",
          "actors": ["Jesse Spencer", "Taylor Kinney", "Monica Raymund", "Eamonn Walker"]
        },
        {
          "episodeNumber": 2,
          "title": "Prove It",
          "summary": "The team investigates a suspicious fire, and Dawson struggles with a personal decision.",
          "director": "Sanford Bookstaver",
          "actors": ["Jesse Spencer", "Taylor Kinney", "Monica Raymund", "Eamonn Walker"]
        }
      ]
    }
  ]
}'
```
**Example Response:**

```json
{
    "title": "Chicago Fire",
    "seasons": [
        {
            "seasonNumber": 1,
            "episodes": [
                {
                    "episodeNumber": 1,
                    "title": "Pilot",
                    "summary": "The firefighters and paramedics of Firehouse 51 deal with a massive fire at a pharmaceutical warehouse.",
                    "director": "Jeffrey Nachmanoff",
                    "actors": [
                        "Jesse Spencer",
                        "Taylor Kinney",
                        "Monica Raymund",
                        "Eamonn Walker"
                    ],
                    "_id": "679c0a2743f2f14b5fdca82b"
                },
                {
                    "episodeNumber": 2,
                    "title": "Mon Amour",
                    "summary": "The team responds to a fire at a nightclub, while tensions rise between Casey and Dawson.",
                    "director": "Joe Chappelle",
                    "actors": [
                        "Jesse Spencer",
                        "Taylor Kinney",
                        "Monica Raymund",
                        "Eamonn Walker"
                    ],
                    "_id": "679c0a2743f2f14b5fdca82c"
                }
            ],
            "_id": "679c0a2743f2f14b5fdca82a"
        },
        {
            "seasonNumber": 2,
            "episodes": [
                {
                    "episodeNumber": 1,
                    "title": "A Problem House",
                    "summary": "The team deals with a dangerous house fire, and Severide faces a personal crisis.",
                    "director": "Joe Chappelle",
                    "actors": [
                        "Jesse Spencer",
                        "Taylor Kinney",
                        "Monica Raymund",
                        "Eamonn Walker"
                    ],
                    "_id": "679c0a2743f2f14b5fdca82e"
                },
                {
                    "episodeNumber": 2,
                    "title": "Prove It",
                    "summary": "The team investigates a suspicious fire, and Dawson struggles with a personal decision.",
                    "director": "Sanford Bookstaver",
                    "actors": [
                        "Jesse Spencer",
                        "Taylor Kinney",
                        "Monica Raymund",
                        "Eamonn Walker"
                    ],
                    "_id": "679c0a2743f2f14b5fdca82f"
                }
            ],
            "_id": "679c0a2743f2f14b5fdca82d"
        }
    ],
    "description": "A drama series that follows the lives of firefighters and paramedics working at the Chicago Fire Department.",
    "_id": "679c0a2743f2f14b5fdca829",
    "__v": 0
}
```
---
#### Get a specific episode 

- **Endpoint:** `GET /v1/series/{serieId}/seasons/{seasonNumber}/episodes/{episodeNumber}`
- **Description:** Retrieves a specific data of an episode.
  
**Example Request:**

```bash
curl -X GET http://localhost:7000/v1/series/679bffd04e57f93bc4168975/seasons/1/episodes/1
     -H "Authorization: Bearer <token>" \ 
```

**Example Response:**
```json
{
    "episodeNumber": 1,
    "title": "The One Where Monica Gets a Roommate",
    "summary": "Monica gets a new roommate, Rachel, who leaves her fiancé at the altar.",
    "director": "James Burrows",
    "actors": [
        "Jennifer Aniston",
        "Courteney Cox",
        "Lisa Kudrow",
        "Matt LeBlanc",
        "Matthew Perry",
        "David Schwimmer"
    ],
    "_id": "679bffd04e57f93bc4168977"
}
```