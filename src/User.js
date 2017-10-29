import React from 'react';
import {
  View,
  Text
} from 'react-native';

import {
  createFragmentContainer,
  graphql,
} from 'react-relay'

const User = (props) => {
  return (
    <View>
      <Text>Hello, {props.user.name}</Text>
    </View>
  );
}

export default createFragmentContainer(User, graphql`
  fragment User_user on User {
    id,
    name
  }
`);
