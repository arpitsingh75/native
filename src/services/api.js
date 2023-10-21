import axios from 'axios';

const API_URL = 'http://www.omdbapi.com/'; // Replace this with your actual API URL

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000, // Adjust the timeout according to your needs
});

export const fetchMovies = async () => {
  try {
    const response = await axiosInstance.get('/movies');
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axiosInstance.get(`/movies/${movieId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

// Add other API calls if needed

export default axiosInstance;
