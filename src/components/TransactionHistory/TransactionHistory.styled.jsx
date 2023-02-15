import styled from 'styled-components';

export const Table = styled.table`
  margin-top: ${p => p.theme.spacing(15)};
  margin-bottom: ${p => p.theme.spacing(7)};
  text-align: center;

  font-size: ${p => p.theme.fontSizes.md};

  border-collapse: collapse;
  box-shadow: ${p => p.theme.shadows.normal};
`;

export const TH = styled.th`
  min-width: 200px;
  line-height: ${p => p.theme.lineHeights.table};

  color: ${p => p.theme.colors.white};
  background: #afcde7;

  border-style: solid;
  border-width: 0 1px 1px 0;
  border-color: ${p => p.theme.colors.border};
`;

export const TD = styled.td`
  line-height: ${p => p.theme.lineHeights.table};

  background: #d8e6f3;
  border-style: solid;
  border-width: 0 1px 1px 0;
  border-color: ${p => p.theme.colors.border};

  &:first-child {
    text-align: left;
    padding-left: ${p => p.theme.spacing(8)};
  }
`;

export const TR = styled.tr`
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }
`;
