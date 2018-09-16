import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const DELETE_TRACK_MUTATION = gql`
  mutation DeleteTrackMutation($id: ID!) {
    deleteTrack(id: $id)
  }
`;

const DeleteTrackButton = ({ trackId }) => {
  return (
    <Mutation
      mutation={DELETE_TRACK_MUTATION}
      variables={{ id: trackId }}
    >
      {(deleteTrack) => {
        return (
          <TouchableOpacity
            onPress={deleteTrack}
            activeOpacity={0.7}
            accessibilityComponentType="button"
            accessibilityTraits="button"
          >
            <Feather
              color="red"
              name="minus-circle"
              size={28}
            />
          </TouchableOpacity>
        );
      }}
    </Mutation>
  );
};

export default DeleteTrackButton;
