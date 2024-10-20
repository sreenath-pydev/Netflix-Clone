

![Netflix Logo](https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg)


# Netflix Clone
This project is a Netflix clone built using React, designed to replicate the user interface and functionality of the popular streaming service. The application fetches data from The Movie Database (TMDb) API to display trending movies, TV shows, and their trailers.

## Features

- **Responsive Design**: The application is fully responsive, providing a seamless experience on both desktop and mobile devices.
- **Dynamic Content**: Fetches trending movies and TV shows using TMDb API.
- **Video Playback**: Integrates YouTube for playing trailers of selected movies.
- **User-Friendly Navigation**: Easy navigation with a responsive navbar.
- **Footer Information**: Includes links to FAQs, Help Center, and more.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Axios**: Promise-based HTTP client for making API requests.
- **Bootstrap**: CSS framework for responsive design.
- **YouTube API**: For video playback functionality.
- **TMDb API**: For fetching movie and TV show data.
## Setup Instructions

To run this project locally, you will need to obtain an API key from The Movie Database (TMDb). Follow these steps:

 **Obtain TMDb API Key**:
   - Go to [The Movie Database (TMDb)](https://www.themoviedb.org/) and create an account if you don't have one.
   - Navigate to the API section and apply for an API key.


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sreenath-pydev/Netflix-Clone.git
2. Navigate to the project directory:
   ```bash
   cd Netflix-Clone

3. Install the dependencies:
   ```bash
   npm install


4. Start the development server:
   ```bash
   npm start
5. Open Constants.js file and add your TMDB API key:
   ```bash
   export const API_KEY = "ADD your TMDB API key here";
## Usage
Once the application is running, you can browse through different categories of movies and TV shows. Click on any movie poster to watch its trailer.
## Contributing
Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.
## License
This project is for educational purposes only and is not intended for commercial use. All rights to the original Netflix platform are owned by Netflix, Inc.
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
## Acknowledgments
The Movie Database **(TMDb)** for providing the movie data.
**YouTube API** for video playback functionality.
