import { connect } from "react-redux";
import UserSettingsOptions from "./user_settings_options";

const mSTP = state => ({
    errors: state.errors.userErrors
});

export default connect(mSTP, null)(UserSettingsOptions);