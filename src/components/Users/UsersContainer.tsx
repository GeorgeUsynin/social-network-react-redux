import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    getUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unFollow,
    UserType
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader";

type MapStateType = {
    users: Array<UserType>,
    currentPage: number,
    pageSize: number,
    totalUsersAmount: number,
    isFetching: boolean
    followingInProgress: Array<number>
}


type UsersPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setCurrentPage: (page: number) => void
    toggleFollowingProgress: (isFetching: boolean, UserId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
} & MapStateType

// type MapDispatchType = {
//     followUser: (userID: number) => void
//     unFollowUser: (userID: number) => void
//     setUsers: (users: Array<UserType>) => void
//     setCurrentPage: (page: number) => void
//     setIsFetching: (isFetching: boolean) => void
//     // setTotalUsersCount: (totalCount: number) => void
// }

//UsersContainer получает props чререз connect, отправляет запросы на сервер, отрисовывает
//презентационную (тупую) компоненту Users
class UsersContainer extends React.Component<UsersPropsType> {


    componentDidMount() {
        //our thunk
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        //our thunk
        this.props.getUsers(page, this.props.pageSize)
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
                            followUser={this.props.follow}
                            unFollowUser={this.props.unFollow}
                            onPageChanged={this.onPageChanged}
                            followingInProgress={this.props.followingInProgress}
                            toggleFollowingProgress={this.props.toggleFollowingProgress}
                        />
                }
            </React.Fragment>

        )
    }
}

const mapState = (state: AppStateType): MapStateType => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsersAmount: state.usersPage.totalUsersAmount,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

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
    follow,
    unFollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
})(UsersContainer)

