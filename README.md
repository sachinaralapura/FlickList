# flickList

## About

`flickList` is a React application built to enhance your movie discovery and watchlist management experience.  It leverages the OMDB API to provide a user-friendly interface for browsing movies, searching for specific titles, and creating your personal movie watchlist.  Beyond simple listing, `flickList` allows you to rate movies and even export your entire watchlist in a convenient JSON format for backup or sharing.

## Features

* **Movie Listing:** Displays a visually appealing list of movies fetched from the OMDB API.
* **Movie Search:**  Easily search for movies by title to quickly find what you're looking for.
* **Movie Details:** View detailed information about each movie (provided by OMDB API - implicitly shown through the listing).
* **Movie Rating:** Rate movies on a scale of 1 to 10 stars to keep track of your preferences.
* **Watchlist Management:**
    * **Add to Watchlist:** Add movies to your personal watchlist to remember movies you want to watch later.
* **Watchlist Export:** Export your entire movie watchlist in JSON format for easy backup, sharing, or import into other applications.
* **Neat User Interface:**  Enjoy a clean and intuitive user interface designed for a pleasant movie browsing experience.

## Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **TypeScript:** A superset of JavaScript that adds static typing.
* **OMDB API (omdbapi.com):**  A RESTful web service to obtain movie information.
* **JSON:**  Used for exporting the watchlist data.
* **VITE** : user for creating react project

## Getting Started

To run `flickList` locally, follow these steps:

### Prerequisites

* **Node.js and npm (or yarn) installed on your machine.** You can download Node.js from [https://nodejs.org/](https://nodejs.org/).  npm usually comes bundled with Node.js.

### Installation

1. **Clone the repository:**
   ```bash
   git clone git@github.com:sachinaralapura/FlickList.git
   ```

2. **Navigate to the project directory:**
    ```bash
    cd flickList
    ```
3. **Install project dependencies:**
    ```bash
    npm install
    ```
4. **Start the development server:**
    ```bash
    npm run dev
    ```

### API Reference

This application utilizes the OMDB API (Open Movie Database API) to fetch movie data.

* **Website: https://www.omdbapi.com/**

* **API Key:**  You have to obtain an API key from the OMDB API website. Create a  **`.env`** file at top directory. add API KEY and API URL in .env
    ```bash
    VITE_API_KEY=<YOUR_KEY>
    VITE_API_URL=http://www.omdbapi.com/
    ```