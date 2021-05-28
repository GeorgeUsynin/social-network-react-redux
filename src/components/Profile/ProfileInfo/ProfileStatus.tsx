import React from "react";

type ProfileStatusPropsType = {
    status: string
}

type StateType = {
    editMode: boolean
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state: StateType = {
        editMode: false
    }

    activateMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                <div>
                    {!this.state.editMode && <span onDoubleClick={this.activateMode}>{this.props.status}</span>}
                </div>
                <div>
                    {this.state.editMode && <input autoFocus onBlur={this.deactivateMode} value={this.props.status}/>}
                </div>
            </div>
        )
    }
}