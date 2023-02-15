import { Profile, Statistics } from 'components';
import { user, data, friends, transactions } from 'db/index';
import { Wrapper } from './App.styled';

export const App = () => {
  return (
    <Wrapper>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
    </Wrapper>
  );
};
