import { connect } from 'react-redux';
import * as consts from '../constants';
import Links from '../components/Links';
import { StoreState } from '../types';

function getGroup(state: StoreState, id: number) {
	return state.groups.find((item) => item.id === id)!;
}

const mapStateToProps = (state: StoreState, ownProps: { filter: string; children: string; groupId: number }) => {
	console.log(getGroup(state, ownProps.groupId).visibilityFilter);
	return {
		active: ownProps.filter === getGroup(state, ownProps.groupId).visibilityFilter,
		child: ownProps.children,
	};
};

const mapDispatchToProps = (a = {}, ownProps: { filter: string; children: string; groupId: number }) => ({
	onClick: () => ({
		type: consts.SET_VISIBILITY_FILTER,
		payload: { filter: ownProps.filter, groupId: ownProps.groupId },
	}),
});
const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(Links);
