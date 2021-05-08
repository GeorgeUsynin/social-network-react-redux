import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    toggleIsFetchingAC,
    unFollowAC,
    UsersPageType,
    UserType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import axios from "axios";
import {Users} from "./Users";
import preloader from '../../images/preloader.svg'
import {axiosInstance} from "../../axios-configuration/axiosConfiguration";

export type UsersPropsType = MapStateType & MapDispatchType

type MapStateType = {
    usersPage: UsersPageType
}

type MapDispatchType = {
    followUser: (userID: number) => void
    unFollowUser: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setIsFetching: (isFetching: boolean) => void
    // setTotalUsersCount: (totalCount: number) => void
}

//UsersContainer получает props чререз connect, отправляет запросы на сервер, отрисовывает
//презентационную (тупую) компоненту Users
class UsersContainer extends React.Component<UsersPropsType> {



    componentDidMount() {

        //показываем preloader пока загружаются данные с сервера
        this.props.setIsFetching(true)

        axiosInstance
            .get(`/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
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
            .get(`/users?page=${page}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setIsFetching(false)
            })
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.props.usersPage.isFetching
                        ?
                        <div>
                            <img src={preloader} alt="preloader"/>
                        </div>
                        :
                        <Users
                            users={this.props.usersPage.users}
                            currentPage={this.props.usersPage.currentPage}
                            pageSize={this.props.usersPage.pageSize}
                            totalUsersAmount={this.props.usersPage.totalUsersAmount}
                            followUser={this.props.followUser}
                            unFollowUser={this.props.unFollowUser}
                            onPageChanged={this.onPageChanged}
                        />
                }
            </React.Fragment>

        )
    }
}

const mapState = (state: AppStateType): MapStateType => {
    return {
        usersPage: state.usersPage
    }
}

const mapDispatch = (dispatch: Dispatch): MapDispatchType => {
    return {
        followUser: (userID: number) => {
            dispatch(followAC(userID))
        },
        unFollowUser: (userID: number) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
        // setTotalUsersCount: (totalCount: number) => {
        //     dispatch(setUserTotalCountAC(totalCount))
        // }
    }
}

export default connect(mapState, mapDispatch)(UsersContainer)

