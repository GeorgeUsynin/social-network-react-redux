import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story} from '@storybook/react/types-6-0';
import {DialogItem, DialogItemPropsType} from "./DialogItem";
import {BrowserRouter} from "react-router-dom";



export default {
    title: 'Dialogs/DialogItem',
    component: DialogItem,
}

const Template: Story<DialogItemPropsType> = (args) => <BrowserRouter><DialogItem {...args} /></BrowserRouter>;

export const NewName = Template.bind({});

NewName.args = {
    id: 222,
    name: 'SomeName',
    avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
}
