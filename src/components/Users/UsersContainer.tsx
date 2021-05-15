import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setUsers, toggleFollowingProgress,
    unFollow,
    UserType
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader";
import {usersAPI} from "../../api/api";

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
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, UserId: number) => void
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
        //baseURL: 'https://social-network.samuraijs.com/api/1.0'
        //показываем preloader пока загружаются данные с сервера
        this.props.setIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                //убираем preloader после загрузки и установки в state новой порции users
                this.props.setIsFetching(false)
                // this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)

        this.props.setIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setIsFetching(false)
            })
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
    setUsers,
    setCurrentPage,
    setIsFetching,
    toggleFollowingProgress
})(UsersContainer)

