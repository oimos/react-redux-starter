import { connect } from 'react-redux';

// Component
import { Calc } from '../components/Calc';

// Actions
import {
  defaultAction,
  incrementAction,
  decrementAction,
} from '../actions';

const mapStateToProps = state => (
  {
    amount: state.numberItem.amount,
  }
);

const mapDispatchToProps = dispatch => (
  {
    defaultAction: () => {
      dispatch(defaultAction());
    },
    incrementAction: () => {
      dispatch(incrementAction());
    },
    decrementAction: () => {
      dispatch(decrementAction());
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Calc);
