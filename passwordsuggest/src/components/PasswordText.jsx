import { useState } from 'react';
import PasswordControls from './PasswordControls';
import './PasswordText.css';

function getChars() {
    this.DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    this.LOCASE_CHARACTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'm', 'n', 'o', 'p', 'q',
        'r', 's', 't', 'u', 'v', 'w', 'x', 'y',
        'z'];
    this.UPCASE_CHARACTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'M', 'N', 'O', 'P', 'Q',
        'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y',
        'Z'];
    this.SYMBOLS = ['@', '#', '$', '%', '=', ':', '?', '.', '/', '|', '~', '>',
        '*', '(', ')', '<'];
}

function randomPasswordGenerator(allowedLength=20, collections={
    "DIGITS": true,
    "LOCASE_CHARACTERS": true,
    "UPCASE_CHARACTERS": true,
    "SYMBOLS": true
}) {
    
    const chars = new getChars();

    // By default it will take all collections. If different combination is needed, pass those character types and only those will be taken.
    
        // Find the spread length
    let spread = Object.keys(collections).length;
    let equalDivisionOfGivenLength = Math.ceil(allowedLength/spread); // Gives how many characters each will have.
    // Note that ceil may increase the length of the passoword from allowedLength. Then remove passwordLength - allowedLength characters from the result.
    // Above step may be ignored given the fact that password limit is set on minimum.
    let password = "";
    for(let key in collections) {
        console.log("key", key);
        for(let i=1; i<=equalDivisionOfGivenLength; i++) {
            /* Tried with Math.ciel => it was introducing one character being constant, hence switched to round.
            Also use +ve integers only, as decimals raise errors */
            const randNum = (Math.round((Math.random() + 1)*i)) % chars[key].length;
            console.log("RandNum", randNum);
            password += chars[key][randNum];
        }
    }
    console.log(password);
    return password;
    

    
}

export default function PasswordText({defaultPassword}) {
    const [password, setPassword] = useState('');

    function handleOnChange(event) {
        console.log("input", event.target.value);
        setPassword(event.target.value);
    }

    return (<>
        <div id="text_button" className="text-button">
            <input id="pass_text" className="pass-text" placeholder="password" value={password} onChange={handleOnChange}>
            </input>
            <button id="text_copy" className="text-copy" onClick={() => {
                const response = randomPasswordGenerator();
                setPassword(response);
            }}>Suggest</button>
        </div>
        {/* <div id="password_controls_container" className="password-controls-container">
           <PasswordControls />
        </div> */}
    </>)
}
