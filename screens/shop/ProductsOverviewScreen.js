import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

// that allow us to get products from the redux-store
import { useSelector } from 'react-redux';

const ProductsOverviewScreen = props => {
  // useSelector  takes a function,
  // which automatically receives the state as a input
  // and then returns whatever data you want to get from there
  const products = useSelector(state => state.products.availableProducts);
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData =>
        <Text>
          {itemData.item.title}
        </Text>}
    />
  );
};

// The name "All Products" on top instead of "ProductsOverview"
ProductsOverviewScreen.navigationOptions = {
  headerTitle: 'All Products'
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ProductsOverviewScreen;
