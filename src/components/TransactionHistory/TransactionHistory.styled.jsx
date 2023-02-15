import styled from 'styled-components';

export const Table = styled.table`
  font-size: ${p => p.theme.fontSizes[4]}px;
  border-collapse: collapse;
  text-align: center;
  margin-top: ${p => p.theme.space[6]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  box-shadow: ${p => p.theme.shadows.normal};
`;
export const TH = styled.th`
  background: #afcde7;
  color: ${p => p.theme.colors.white};
  line-height: ${p => p.theme.lineHeights.table};
  border-style: solid;
  border-width: 0 1px 1px 0;
  border-color: ${p => p.theme.colors.border};
  min-width: 200px;
`;
export const TD = styled.td`
  background: #d8e6f3;
  border-style: solid;
  border-width: 0 1px 1px 0;
  border-color: ${p => p.theme.colors.border};
  line-height: ${p => p.theme.lineHeights.table};
  &:first-child {
    text-align: left;
    padding-left: ${p => p.theme.space[4]}px;
  }
`;
export const TR = styled.tr`
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }
`;
