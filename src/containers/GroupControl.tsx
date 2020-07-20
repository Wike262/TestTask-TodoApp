import { connect } from 'react-redux';
import * as consts from '../constants';
import GroupControls from '../components/GroupControls';
import { StoreState } from '../types';

function getGroup(state: StoreState, id: number) {
	return state.groups.find((item) => item.id === id)!;
}

const mapStateToProps = (state: StoreState, ownProp: { groupId: number }) => ({
	group: getGroup(state, ownProp.groupId),
});

const mapDispatchToProps = (dispatch = {}, ownProps: { groupId: number }) => ({
	editGroup: (id: number, text: string) => ({ type: consts.EDIT_GROUP, payload: { id, text } }),
	deleteGroup: (id: number) => ({ type: consts.DELETE_GROUP, payload: { id } }),
});
const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(GroupControls);
