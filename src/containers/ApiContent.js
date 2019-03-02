import { connect } from 'react-redux';

// Component
import { ApiContent } from '../components/ApiContent';

// Actions
import {
  getApiContent,
} from '../actions';

const mapStateToProps = state => (
  {
    apiContent: state.apiItem.band,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getApiContent: (url) => {
      dispatch(getApiContent(url))
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ApiContent);
