import PropTypes from 'prop-types';
import { FriendListItem } from 'components';
import { List } from './FriendList.styled';

export function FriendList({ friends = [] }) {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id.toString()}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
