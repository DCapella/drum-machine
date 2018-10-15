import { connect } from "react-redux";

import { MainDisplay } from "../components/MainDisplay.js";
import * as actionCreators from "../actions/index.js";


const mapPropsToState = state => state;

export default connect(mapPropsToState, actionCreators)(MainDisplay);
