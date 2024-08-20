import { fn } from '@storybook/test';
import { createCard } from './Card';



export default{
    title: 'Example/Card',
    tags: ['autodocs'],
    render: ({label, ...args}) => {
        return createCard({label, ...args})
    },
    args: { onClick: fn() },
}

export const Primary = {
    args: {
        primary: true,
        label: 'Card',
    },
}

export const Horizontal = {
    args: {
        primary: true,
        label: 'Horizontal Card',
    },
}