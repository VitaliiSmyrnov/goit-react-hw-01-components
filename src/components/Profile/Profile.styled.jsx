import styled from 'styled-components';

export const UserCard = styled.div`
  text-align: center;
  background-color: #fff;
  width: 450px;
  margin-top: 30px;
  margin-bottom: 100px;
  border-radius: ${p => p.theme.radii.md};
  box-shadow: ${p => p.theme.shadows.normal};
`;

export const UserHeading = styled.div`
  padding: 50px;
`;

export const UserImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: ${p => p.theme.radii.round};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  width: 200px;
  height: auto;
`;

export const UserName = styled.p`
  font-size: ${p => p.theme.fontSizes[5]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const UserTag = styled.p`
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.body};
  color: ${p => p.theme.colors.lightText};
  margin-top: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const UserLocation = styled.p`
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.body};
  color: ${p => p.theme.colors.lightText};
  margin-top: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: #e3e3e3;
  margin: ${p => p.theme.space[0]};
  padding: ${p => p.theme.space[0]};
  border-top: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  border-bottom-left-radius: ${p => p.theme.radii.md};
  border-bottom-right-radius: ${p => p.theme.radii.md};
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  margin: ${p => p.theme.space[0]};
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[0]}px;
  width: 150px;
  &:not(:last-child) {
    border-right: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  }
`;

export const Label = styled.span`
  color: ${p => p.theme.colors.lightText};
  margin-bottom: ${p => p.theme.space[1]}px;
`;

export const Quantity = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes[4]}px;
`;
