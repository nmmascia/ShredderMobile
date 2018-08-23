import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const FAVORITED_TOGGLE_MUTATION = gql`
  mutation UpdateFavoritedStatusForSetlist($setlistId: ID!) {
    updateFavoritedStatusForSetlist(id: $setlistId) {
      id
      favorited
    }
  }
`;

const FavoriteToggle = ({ setlistId, favorited }) => (
  <Mutation
    mutation={FAVORITED_TOGGLE_MUTATION}
    variables={{ setlistId }}
  >
    {(updateFavoritedStatusForSetlist) => {
      return (
        <TouchableOpacity
          onPress={updateFavoritedStatusForSetlist}
          activeOpacity={0.7}
          accessibilityComponentType="button"
          accessibilityTraits="button"
        >
          <View>
            {favorited ? (
              <Text>Unfavorite</Text>
            ) : (
              <Text>Favorite</Text>
            )}
          </View>
        </TouchableOpacity>
      );
    }}
  </Mutation>
);

export default FavoriteToggle;
