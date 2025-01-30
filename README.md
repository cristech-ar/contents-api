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

The API will be available at [http://localhost:3000](http://localhost:3000).

---

## API Endpoints 💽

### Authentication

#### Generate Token

- **Endpoint:** `GET /auth/generate-token`
- **Description:** Generates a JWT token and a refresh token.

**Example Request:**

```bash
curl -X GET http://localhost:3000/auth/generate-token
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
curl -X POST http://localhost:3000/auth/refresh-token \  
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
curl -X GET http://localhost:3000/v1/movies
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
  - `director` (string)
  - `actors` (array of strings)
  - `releaseYear` (number)

**Example Request:**

```bash
curl -X POST http://localhost:3000/v1/movies \  
     -H "Content-Type: application/json" \  
     -d '{"title": "Inception", "director": "Christopher Nolan", "actors": ["Leonardo DiCaprio"], "releaseYear": 2010}'
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
curl -X GET http://localhost:3000/v1/series
```

**Example Response:**

```json
[
  {
    "_id": "64f8b8f7e4b0d1a2b3c4d5e7",
    "title": "Breaking Bad",
    "seasons": [
      {
        "seasonNumber": 1,
        "episodes": [
          {
            "episodeNumber": 1,
            "title": "Pilot",
            "director": "Vince Gilligan",
            "actors": ["Bryan Cranston", "Aaron Paul"]
          }
        ]
      }
    ]
  }
]
```

---
