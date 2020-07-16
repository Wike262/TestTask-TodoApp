import { connect } from "react-redux";
import Groups from "../components/Groups";

const mapStateToProps = (state) => ({ groups: state.groups });

export default connect(mapStateToProps)(Groups);