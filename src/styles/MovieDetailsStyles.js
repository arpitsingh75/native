// movieDetailsStyles.js

import { StyleSheet } from 'react-native';

const movieDetailsStyles = StyleSheet.create({
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
  descriptionText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  additionalInfoText: {
    fontSize: 14,
    color: '#777',
    marginBottom: 5,
  },
});

export default movieDetailsStyles;
