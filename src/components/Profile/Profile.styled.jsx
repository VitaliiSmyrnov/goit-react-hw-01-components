import styled from 'styled-components';

export const UserCard = styled.div`
  margin-top: ${p => p.theme.spacing(7)};
  margin-bottom: ${p => p.theme.spacing(15)};
  width: 450px;
  text-align: center;

  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.md};
  box-shadow: ${p => p.theme.shadows.normal};
  overflow: hidden;
`;

export const UserHeading = styled.div`
  padding: ${p => p.theme.spacing(12)};
`;

export const UserImg = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  height: auto;

  border-radius: ${p => p.theme.radii.round};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
`;

export const UserName = styled.p`
  margin-top: ${p => p.theme.spacing(8)};
  margin-bottom: ${p => p.theme.spacing(4)};

  font-size: ${p => p.theme.fontSizes.lg};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const UserTag = styled.p`
  margin-bottom: ${p => p.theme.spacing(4)};

  font-size: ${p => p.theme.fontSizes.md};
  font-weight: ${p => p.theme.fontWeights.body};

  color: ${p => p.theme.colors.lightText};
`;

export const UserLocation = styled.p`
  font-size: ${p => p.theme.fontSizes.md};
  font-weight: ${p => p.theme.fontWeights.body};

  color: ${p => p.theme.colors.lightText};
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-between;

  background-color: ${p => p.theme.colors.backgroundLight};
  border-top: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  border-bottom-left-radius: ${p => p.theme.radii.md};
  border-bottom-right-radius: ${p => p.theme.radii.md};
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;

  margin: 0;
  padding: ${p => p.theme.spacing(4)} 0px;
  width: 150px;

  &:not(:last-child) {
    border-right: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  }
`;

export const Label = styled.span`
  margin-bottom: ${p => p.theme.spacing(1)};

  color: ${p => p.theme.colors.lightText};
`;

export const Quantity = styled.span`
  font-size: ${p => p.theme.fontSizes.md};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
