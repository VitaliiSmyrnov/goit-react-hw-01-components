import styled from 'styled-components';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export const Section = styled.div`
  background-color: ${p => p.theme.colors.white};
  text-align: center;
  box-shadow: ${p => p.theme.shadows.normal};
`;

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes[5]}px;
  padding: ${p => p.theme.space[4]}px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  min-width: 70px;
  padding: ${p => p.theme.space[2]}px;
  background-color: ${getRandomHexColor};
  color: ${p => p.theme.colors.white};
`;

export const Label = styled.span`
  font-size: ${p => p.theme.fontSizes[2]}px;
  margin-bottom: ${p => p.theme.space[1]}px;
`;

export const Percentage = styled.span`
  font-size: ${p => p.theme.fontSizes[4]}px;
`;
