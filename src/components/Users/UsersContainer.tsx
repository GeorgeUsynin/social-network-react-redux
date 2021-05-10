import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setUsers,
    unFollow,
    UsersPageType,
    UserType
} from "../../redux/users-reducer";
import {Users} from "./Users";
import preloader from '../../images/preloader.svg'
import {axiosInstance} from "../../axios-configuration/axiosConfiguration";

type MapStateType = {
    users: Array<UserType>,
    currentPage: number,
    pageSize: number,
    totalUsersAmount: number,
    isFetching: boolean
}



type UsersPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setIsFetching: (isFetching: boolean) => void
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

        //показываем preloader пока загружаются данные с сервера
        this.props.setIsFetching(true)

        axiosInstance
            .get(`/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)

                //убираем preloader после загрузки и установки в state новой порции users
                this.props.setIsFetching(false)
                // this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)

        this.props.setIsFetching(true)

        axiosInstance
            .get(`/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setIsFetching(false)
            })
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.props.isFetching
                        ?
                        <div>
                            <img src={preloader} alt="preloader"/>
                        </div>
                        :
                        <Users
                            users={this.props.users}
                            currentPage={this.props.currentPage}
                            pageSize={this.props.pageSize}
                            totalUsersAmount={this.props.totalUsersAmount}
                            followUser={this.props.follow}
                            unFollowUser={this.props.unFollow}
                            onPageChanged={this.onPageChanged}
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
        isFetching: state.usersPage.isFetching
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
    setIsFetching
})(UsersContainer)

