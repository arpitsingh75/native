// latestMoviesStyles.js

import { StyleSheet } from 'react-native';

const latestMoviesStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f0f0f0',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  movieItem: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
  },
});

export default latestMoviesStyles;
