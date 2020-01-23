import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoryAccScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>CategoryAccScreen</Text>
      <Button
        title="Go to Details!"
        onPress={() => {
          props.navigation.navigate({ routeName: 'Detail' });
        }}
      />
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

export default CategoryAccScreen;
