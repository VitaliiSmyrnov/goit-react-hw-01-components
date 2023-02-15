import styled from 'styled-components';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export const Section = styled.div`
  text-align: center;

  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.normal};
`;

export const Title = styled.h2`
  padding: ${p => p.theme.spacing(6)};
  font-size: ${p => p.theme.fontSizes.lg};
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;

  min-width: 70px;
  padding: ${p => p.theme.spacing(2)};

  color: ${p => p.theme.colors.white};
  background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
  margin-bottom: ${p => p.theme.spacing(1)};
  font-size: ${p => p.theme.fontSizes.sm};
`;

export const Percentage = styled.span`
  font-size: ${p => p.theme.fontSizes.md};
`;
