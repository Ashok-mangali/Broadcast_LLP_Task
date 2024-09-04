import React from 'react';

function Settings({ setLanguage }) {
    return (
        <div style={{"background-color": "#41413c" , "height" : "100vh", "background-size" : "Cover", "color" : 'white', "justify-content" : "center"
                  ,  "padding" : "30px", "font-size" : "18px"
        }}>
            <h2>Settings</h2>
            <br />
            <label>Select Language: </label>
            <select onChange={(e) => setLanguage(e.target.value)}>
                <option value="english">English</option>
                <option value="french">French</option>
                <option value="german">German</option>
                <option value="russian">Russian</option>
                <option value="spanish">Spanish</option>
                <option value="chinese">Chinese</option>
            </select>
        </div>
    );
}

export default Settings;
