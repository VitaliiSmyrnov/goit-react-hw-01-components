import PropTypes from 'prop-types';
import {Table, TR, TH, TD} from './TransactionHistory.styled';

export function TransactionHistory({ items = [] }) {
  return (
    <Table>
      <thead>
        <tr>
          <TH>Type</TH>
          <TH>Amount</TH>
          <TH>Currency</TH>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TR key={id}>
            <TD>{type}</TD>
            <TD>{amount}</TD>
            <TD>{currency}</TD>
          </TR>
        ))}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};