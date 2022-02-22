import React from "react";
import DmListContainer from "./dm_list_container";
import SearchConvoContainer from "./search_convo_container";

export default class Me extends React.Component {
    render() {
        return (
            <div id="me-container">
                <div className="search-bar-header">
                    <SearchConvoContainer />
                </div>
                <div id="dm-container">
                    <DmListContainer history={this.props.history} />
                </div>
                <div id="friend-container">

                </div>
            </div>
        )
    }
}