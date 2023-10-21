
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Assuming you are using React Router

import { fetchMovieDetails } from './services/api'; // Update the path based on your file structure
import { View, Text, StyleSheet } from 'react-native';
import movieDetailsStyles from './styles/MovieDetailsStyles';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    getMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
     <View style={movieDetailsStyles.container}>
     <Text style={movieDetailsStyles.titleText}>{movie.title}</Text>
     <Text style={movieDetailsStyles.descriptionText}>
       {movie.description}
     </Text>
     <Text style={movieDetailsStyles.additionalInfoText}>Release Date: {movie.releaseDate}</Text>
     <Text style={movieDetailsStyles.additionalInfoText}>Genre: {movie.genre}</Text>
   </View>
  );
};

export default MovieDetailsPage;
