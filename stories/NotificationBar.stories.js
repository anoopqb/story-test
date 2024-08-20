import {createNotificationBar} from '../components/NotificationBar'

export default{
    title: 'Example/Notification Bar',
    tags :['autodocs'],
    render: ({text, ...args})=>{
        return createNotificationBar({text, ...args});
    }
}

export const Default = {
    args: {
        Alternate: false,
        text: 'This is a default notification bar.',
    },
}

export const Dark = {
    args: {
        Alternate: true,
        bgColor:"",
        text: 'This is a default notification bar.',
    },
}