import { connect } from "react-redux";
import { editGroup } from "../actions";
import { deleteGroup } from "../actions";
import GroupControls from "../components/GroupControls";

const getGroup = (state, id) => {
 return state.groups.filter((item, index) =>
  item.id === id ? index : item
 )
}

const mapStateToProps = (state, ownProp) => ({ group: getGroup(state, ownProp.groupId) });

const mapDispatchToProps = (dispatch) => ({
 editGroup: (id, text) => dispatch(editGroup(id, text)),
 deleteGroup: (id) => dispatch(deleteGroup(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupControls);