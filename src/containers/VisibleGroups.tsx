import { connect } from 'react-redux';
import Groups from '../components/Groups';
import { StoreState } from '../types';

const mapStateToProps = (state: StoreState) => ({ groups: state.groups });

export default connect(mapStateToProps)(Groups);
