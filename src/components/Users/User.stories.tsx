import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story} from '@storybook/react/types-6-0';
import {User, UserPropsType} from "./User";
import {BrowserRouter} from "react-router-dom";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Users/User',
    component: User,
}

const photos = {
    small: 'https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
    large: 'https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg'
}

const unFollowUserCallback = action('User was unfollowed')
const followUserCallback = action('User was followed')

const Template: Story<UserPropsType> = (args) => <BrowserRouter><User {...args} /></BrowserRouter>

export const UserBaseExample = Template.bind({});

UserBaseExample.args = {
    id: 15,
    name: 'George',
    photos: {
        small: 'https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
        large: 'https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg'
    },
    status: "I'm sleep",
    followed: true,
    followingInProgress: []
}

export const ExampleUser2 = () => {
    return (
        <div>
            <BrowserRouter>
                <User
                    id={15}
                    photos={photos}
                    name={'Elena'}
                    status={'Really status'}
                    followed={true}
                    followingInProgress={[]}
                    unFollowSuccess={unFollowUserCallback}
                    followSuccess={followUserCallback}
                />
            </BrowserRouter>
        </div>
    )
}



