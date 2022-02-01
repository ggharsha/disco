import React from "react";
import DmListContainer from "./dm_list_container";

export default class Me extends React.Component {
    render() {
        return (
            <div id="me-container">
                <div className="search-bar-header">

                </div>
                <div id="dm-container">
                    <DmListContainer />
                </div>
                <div id="friend-container">

                </div>
            </div>
        )
    }
}