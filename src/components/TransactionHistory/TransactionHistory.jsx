import './TransactionHistory.module.css';
import PropTypes from 'prop-types'

export const TransactionHistory = ({history}) => {
    return (
<table className="transaction-history">
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            
        {history.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
        </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
  history:PropTypes.array.isRequired,
};