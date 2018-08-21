import React from 'react';
import { Text, View } from 'react-native';

const SetlistItem = (props) => (
  <View>
    <Text>Setlist</Text>
    {props.favorited ? (
      <Text>Unfavorite</Text>
    ) : (
      <Text>Favorite</Text>
    )}
  </View>
);

export default SetlistItem;
