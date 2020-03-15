import React from 'react';
import { FlatList, Text, StyleSheet, Platform } from 'react-native';
import { useSelector } from 'react-redux';

import { DrawerActions } from 'react-navigation-drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';

const OrdersScreen = props => {
  const orders = useSelector(state => state.orders.orders);

  return (
    <FlatList
      style={styles.screen}
      data={orders}
      keyExtractor={item => item.id}
      renderItem={itemData =>
        <Text>
          {itemData.item.totalAmount}
        </Text>}
    />
  );
};

OrdersScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Orders',
    headerLeft: () =>
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => {
            navData.navigation.dispatch(DrawerActions.toggleDrawer());
          }}
        />
      </HeaderButtons>
  };
};

const styles = StyleSheet.create({
  screen: {}
});

export default OrdersScreen;
