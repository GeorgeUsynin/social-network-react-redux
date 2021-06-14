import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {followSuccess, requestUsers, setCurrentPage, unFollowSuccess, UserType} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersAmount,
    getUsers
} from "../../redux/users-selectors";

type MapStateType = {
    users: Array<UserType>,
    currentPage: number,
    pageSize: number,
    totalUsersAmount: number,
    isFetching: boolean
    followingInProgress: Array<number>
}
type MapDispatchType = {
    setCurrentPage: (page: number) => void
    requestUsers: (currentPage: number, pageSize: number) => void
    followSuccess: (userid: number) => void
    unFollowSuccess: (userid: number) => void
}

type UsersPropsType = MapStateType & MapDispatchType


//UsersContainer получает props чререз connect, отправляет запросы на сервер, отрисовывает
//презентационную (тупую) компоненту Users
class UsersContainer extends React.Component<UsersPropsType> {


    componentDidMount() {
        //our thunk
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        //our thunk
        this.props.requestUsers(page, this.props.pageSize)
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.props.isFetching
                        ?
                        <Preloader/>
                        :
                        <Users
                            users={this.props.users}
                            currentPage={this.props.currentPage}
                            pageSize={this.props.pageSize}
                            totalUsersAmount={this.props.totalUsersAmount}
                            onPageChanged={this.onPageChanged}
                            followingInProgress={this.props.followingInProgress}
                            followSuccess={this.props.followSuccess}
                            unFollowSuccess={this.props.unFollowSuccess}
                        />
                }
            </React.Fragment>

        )
    }
}

const mapState = (state: AppStateType): MapStateType => {
    return {
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        totalUsersAmount: getTotalUsersAmount(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

// const mapState = (state: AppStateType): MapStateType => {
//     return {
//         users: state.usersPage.users,
//         currentPage: state.usersPage.currentPage,
//         pageSize: state.usersPage.pageSize,
//         totalUsersAmount: state.usersPage.totalUsersAmount,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

// const mapDispatch = (dispatch: Dispatch): MapDispatchType => {
//     return {
//         followUser: (userID: number) => {
//             dispatch(followAC(userID))
//         },
//         unFollowUser: (userID: number) => {
//             dispatch(unFollow(userID))
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsers(users))
//         },
//         setCurrentPage: (page: number) => {
//             dispatch(setCurrentPage(page))
//         },
//         setIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetching(isFetching))
//         }
//         // setTotalUsersCount: (totalCount: number) => {
//         //     dispatch(setUserTotalCountAC(totalCount))
//         // }
//     }
// }

export default connect(mapState, {
    setCurrentPage,
    requestUsers,
    followSuccess,
    unFollowSuccess
})(UsersContainer)

