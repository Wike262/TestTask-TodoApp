import { connect } from "react-redux";
import { editGroup } from "../actions";
import { deleteGroup } from "../actions";
import Group from "../components/Group";


const mapStateToProps = (state) => ({ groups: state });
const mapDispatchToProps = (dispatch) => ({
 editGroup: (id, text) => dispatch(editGroup(id, text)),
 deleteGroup: (id) => dispatch(deleteGroup(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Group);