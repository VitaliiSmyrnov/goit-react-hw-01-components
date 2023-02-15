import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  min-width: 250px;
  padding: ${p => p.theme.space[3]}px;

  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.text};
  cursor: pointer;
  box-shadow: ${p => p.theme.shadows.normal};
  &:hover,
  &:focus {
    scale: 1.05;
  }
  transition: scale ${p => p.theme.transitions.normal};
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;
export const Status = styled.span`
  display: block;
  width: ${p => p.theme.fontSizes[2]}px;
  height: ${p => p.theme.fontSizes[2]}px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  margin-right: ${p => p.theme.space[3]}px;
`;
export const UserImg = styled.img`
  display: block;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  margin-right: ${p => p.theme.space[3]}px;
`;
export const UserName = styled.p`
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};
`;
