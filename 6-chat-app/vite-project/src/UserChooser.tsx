import * as React from 'react';
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material';
import User from './model/User';

// TODO API
const userList = [
    new User('user-1', 'User 1'),
    new User('user-2', 'User 2'),
    new User('user-3', 'User 3'),
    new User('user-4', 'User 4'),
    new User('user-5', 'User 5'),
    new User('user-6', 'User 6'),
    new User('user-7', 'User 7'),
];

interface UserChooserProps {
    activeUser: User | undefined;
    setActiveUser: (selectedUser: User | undefined) => void;
}

export const UserChooser = ({
    activeUser,
    setActiveUser,
}: UserChooserProps) => {
    const handleChange = (event: SelectChangeEvent<string>) => {
        console.log(event.target.value);

        setActiveUser(
            userList.find(
                (userItem: User) => userItem.id === event.target.value
            )
        );
    };

    return (
        <FormControl fullWidth={true}>
            <InputLabel id="user-select-label">User</InputLabel>
            <Select
                labelId="user-select-label"
                value={activeUser?.getId()}
                label="User"
                onChange={handleChange}
            >
                {userList.map((user) => (
                    <MenuItem key={user.getId()} value={user.getId()}>
                        {user.getName()}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
