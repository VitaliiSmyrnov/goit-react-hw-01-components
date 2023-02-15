import PropTypes from 'prop-types';
import { Item, Status, UserImg, UserName } from './FriendListItem.styled';

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <Item>
      <Status isOnline={isOnline}></Status>
      <UserImg src={avatar} alt="User avatar" width="48" />
      <UserName>{name}</UserName>
    </Item>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
