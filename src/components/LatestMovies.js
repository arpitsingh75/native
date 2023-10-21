import React, { useEffect, useState } from 'react';
import { fetchMovies } from './services/api';
import { View, Text, StyleSheet } from 'react-native';
import latestMoviesStyles from './styles/latestMovieStyles';

const LatestMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMoviesData = async () => {
      const data = await fetchMovies();
      setMovies(data);
    };
    fetchMoviesData();
  }, []);

  return (
    <View style={latestMoviesStyles.container}>
    <Text style={latestMoviesStyles.titleText}>Latest Movies</Text>
    <Text style={latestMoviesStyles.movieItem}>{movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
    </Text>
    </View>
  );
};

export default LatestMovies;
