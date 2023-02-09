import './App.css';
import 'sendbird-uikit/dist/index.css';
import { useState } from 'react';
import User from './model/User';
import { UserChooser } from './UserChooser';
import { App as SendbirdApp } from 'sendbird-uikit';

const APP_ID = 'E5225E4F-8898-4B26-AE4D-AADD82F8A353';

function App() {
    const [activeUser, setActiveUser] = useState<User | undefined>(
        new User('user-1', 'User 1')
    );

    return (
        <div className="App">
            <UserChooser
                activeUser={activeUser}
                setActiveUser={setActiveUser}
            />
            <SendbirdApp appId={APP_ID} userId={activeUser?.getId() || ''} />
        </div>
    );
}

export default App;
