import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EditProductSreen = props => {
  return (
    <View style={styles.screen}>
      <Text>DetailScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default EditProductSreen;
