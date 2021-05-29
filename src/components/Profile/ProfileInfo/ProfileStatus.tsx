import React, {ChangeEvent} from "react";

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

type StateType = {
    editMode: boolean
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {


    state: StateType = {
        editMode: false,
        status: this.props.status
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
        this.props.updateUserStatus(this.state.status)
    }

    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: StateType) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                <div>
                    {!this.state.editMode &&
                    <span onDoubleClick={this.activateMode}>{this.props.status || 'No status'}</span>}
                </div>
                <div>
                    {this.state.editMode && <input
                        autoFocus
                        onChange={this.onChangeHandler}
                        onBlur={this.deactivateMode}
                        value={this.state.status}/>}
                </div>
            </div>
        )
    }
}