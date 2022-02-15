import React from "react";

export default class SearchConvo extends React.Component {
    render() {
        return (
            <div className="outer-search">
                <div className="inner-search" onClick={() => this.props.openModal("createConversation")}>
                    Find or start a conversation
                </div>
            </div>
        )
    }
}