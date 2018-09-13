import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import Button from '../../components/Button/Button';

const COMPLETE_PRACTICE_MUTATION = gql`
  mutation CompletePracticeForSetlist($setlistId: ID!) {
    completePracticeForSetlist(id: $setlistId) {
      id
      practicesCount
    }
  }
`;

const CompletePractice = ({ setlistId, onCompleteSetlist }) => (
  <Mutation
    mutation={COMPLETE_PRACTICE_MUTATION}
    variables={{ setlistId }}
  >
    {(completePracticeForSetlist, { loading, error }) => {
      return (
        <Button
          text="Complete Practice"
          onPress={async () => {
            await completePracticeForSetlist();
            onCompleteSetlist();
          }}
        />
      );
    }}
  </Mutation>
);

export default CompletePractice;
