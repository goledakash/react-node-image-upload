import React, {useState} from 'react';
import axios from'axios';

import '../App.css';

// import images from "../images.json";


function ImageSubmit() {
    const[ image, setImage] = useState('');
    const[text, setText] = useState('');

    const handleImage = (e) => {
        setImage(e.target.files[0]);
    };

    const handleChangeText = (e) => {
        setText(e.target.value);
    }

    const handleSend = (e) => {
        let formData = new FormData();
        formData.append('image', image);
        formData.append('text', text);
        
        axios.post('http://localhost:8080/submitImageAPI', {
            data: formData
        },
        ).then((res) => {
            alert('IMAGE SUBMITTED SUCCESSFULLY', res);
        }).catch((err) => {
            console.log(err)
            alert('IMAGE SUBMISSION FAILED', err);
        })
    }

    return(
        <div className="App">
        <h1>Select an Image to send</h1>
        <label>Select Image</label>
            <input
                type="file"
                name="file"
                placeholder="Send or Upload an Image"
                onChange={handleImage}
            />
        <div>
            <label>Enter few words</label>
            <input
                type="textarea"
                name="textarea"
                maxLength="200"
                onChange={handleChangeText}
                value={text}
            />
        </div>
        <div>
            <button type="button" onClick={handleSend}>Send Image</button>
        </div>
        </div>
    );
};

export default ImageSubmit;
