import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;

  min-width: 250px;
  padding: ${p => p.theme.spacing(4)};

  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.normal};
  cursor: pointer;

  &:hover,
  &:focus {
    scale: 1.05;
  }
  transition: scale ${p => p.theme.transitions.normal};

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.spacing(4)};
  }
`;

export const Status = styled.span`
  display: block;
  width: ${p => p.theme.spacing(4)};
  height: ${p => p.theme.spacing(4)};
  margin-right: ${p => p.theme.spacing(4)};

  border-radius: ${p => p.theme.radii.round};

  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const UserImg = styled.img`
  margin-right: ${p => p.theme.spacing(4)};

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.normal};
`;

export const UserName = styled.p`
  font-size: ${p => p.theme.fontSizes.md};
  font-weight: ${p => p.theme.fontWeights.bold};

  color: ${p => p.theme.colors.text};
`;
