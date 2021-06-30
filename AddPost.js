import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

export const AddPost = () => {
    const [topic_name, setTopicName] = useState("");
    const [speaker_name, setSpeakerName] = useState("");
    const [venue, setVenue] = useState("");
    const [time_slot, setTimeSlot] = useState("");
    const [date, setDate] = useState("");
    const [message, setMessage] = useState("");
    const [fileName, setFileName] = useState("");

    

    const onChangeFile = e => {
        setFileName(e.target.files[0]);
    }


    const changeOnClick = e => {
       e.preventDefault();

    const formData = new FormData();

    formData.append("topic_name", topic_name);
    formData.append("speaker_name", speaker_name);
    formData.append("venue", venue);
    formData.append("time_slot", time_slot);
    formData.append("date", date);
    formData.append("photo", fileName);

    setTopicName("");
    setSpeakerName("");
    setVenue("");
    setTimeSlot("");
    setDate("");

       axios.post("/editors/add", formData)
       .then((res) => setMessage(res.data))
       .catch((err) => {
           console.log(err);
       });
    };


    return (
     <AddPostContainer>

         <div className="header-page">
                <div className="main-info">
                <div className="topic">
                    <h1> Add New Conference </h1></div>
                </div>
            </div>

        <div className="container">
        <div className="topic">
         <h1 style={{textAlign:"center"}}>Add New Conference</h1></div>
         
            <form onSubmit={changeOnClick} encType="multipart/form-data">
            <div className="form-group">
                <label htmlFor="topic_name" >Topic Name</label>
                <input type="text" 
                value={topic_name}
                onChange={e => setTopicName(e.target.value)}
                className="form-control"
                placeholder="Topic Name">
                    </ input>
            </div>

            <div className="form-group">
                <label htmlFor="speaker_name" >Speaker Name</label>
                <input type="text" 
                value={speaker_name}
                onChange={e => setSpeakerName(e.target.value)}
                className="form-control" 
                placeholder="Speaker Name">

                </input>
            </div>


            <div className="form-group">
                <label htmlFor="venue" >Venue</label>
                <input type="text" 
                value={venue}
                onChange={e => setVenue(e.target.value)}
                className="form-control" 
                placeholder="Venue">
                </input>
            </div>

            <div className="form-group">
                <label htmlFor="time_slot" >Time Slot</label>
                <select name="cars" id="cars" type="text" 
                value={time_slot}
                onChange={e => setTimeSlot(e.target.value)}
                className="form-control" 
                placeholder="Time Slot">
                        <option value="All Day">All Day</option>
                        <option value="3 hours">3 hours</option>
                        <option value="1 hour">1 hour</option>
                        <option value="30 min">30 min</option>
                    </select>
            </div>

            <div className="form-group">
                <label htmlFor="date" >Date</label>
                <input type="date" 
                value={date}
                onChange={e => setDate(e.target.value)}
                className="form-control" 
                placeholder="Date">
                </input>
            </div>

                <div className="form-group">
                    <label htmlFor="file">Choose conference post</label>
                    <input type="file" filename="photo" className="form-control-file"
                    onChange={onChangeFile}></input>
                </div>
                
                <span className="message">{message}</span>
                <div className="button" style={{textAlign:"center"}} >
            <button 
            type="submit" className="btn btn-primary" style={{textAlign:"center"}} >
                Upload Conference </button></div>
            </form>
    </div>
</AddPostContainer>
)}

export default AddPost

//MAIN CONTAINER
const AddPostContainer = styled.div`
   
.container {
    width: 32rem;
    position: center;
    margin-top: 4rem; 
    margin-bottom: 6rem;
}

.form-group {
    margin: 1rem auto;
}

.btn-primary {
    margin-top: 3rem;
    background: #f9ab00;
    border: none;
    width: 10rem;
    height: 3rem;
    &:hover {
        background: #ffdb4d;
    }
}

.message {
    font-weight: 900;
    color: tomato;
    padding: 1rem 1rem 1rem 0;
}

.label {
    color: #02014b 
}
`;