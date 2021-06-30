import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import spinner from '../../spinner.gif'
import {Link} from 'react-router-dom'


export const Post = props => {
    const [topic_name, setTopicName] = useState('')
    const [speaker_name, setSpeakerName] = useState('')
    const [venue, setVenue] = useState('')
    const [time_slot, setTimeSlot] = useState('')
    const [date, setDate] = useState('')
    const [fileName, setFileName] = useState('')

    useEffect(() => {
        axios.get(`/editors/${props.match.params.id}`)
        .then((response) => [
            setTopicName(response.data.topic_name),
            setSpeakerName(response.data.speaker_name),
            setVenue(response.data.venue),
            setTimeSlot(response.data.time_slot),
            setDate(response.data.date),
            setFileName(response.data.photo)
        ])
        .catch(error => console.log(error));
    }, [props])
    
    
    
return (
        <MainContainer>

            
        <div className="header-page">
                <div className="main-info">
                <div className="topic">
                    <h1> Event Details</h1></div>
                </div>
            </div>

              <div class="card" style={{width: "60rem" , marginTop: "5rem"}}>   
         {!topic_name || !speaker_name || !venue ? <img src={spinner} alt="loading..."/> :
   
        <div className="row">
                <div  className="col-md-4" >
        <img src={`/uploads/${fileName}`} alt="..."
        style={{ margin: "0 auto", width: "90%", display: "flex"}}></img> </div>

<div className="col-md-5">
        <h2>{topic_name}</h2>
        <p className="text"><h5> Speaker : {speaker_name}</h5></p>
        <p className="text"><h5>Venue of the Event : {venue}</h5></p>
        <p className="text"><h5>Time Duration : {time_slot}</h5></p>
        <p className="text"><h5>Date : {date}</h5></p>
        <br/>
        
        <Link to="/post-list" 
            type="submit" className="btn btn-primary" ><h5>
                Back to Conference List</h5></Link>
                </div>     
                </div>
        }
  
        </div>
        </MainContainer>
        
        );
};

export default Post

//MAIN CONTAINER 
const MainContainer = styled.div`
   
margin: 2rem 0;
    
    .card {
        margin: auto;

    }

    img {
        width: 10rem;
        display: block;
        margin-top:3rem;
        margin-botton: 4rem;
    }


    .btn-primary {
        margin-bottom: 2rem;
        width:15rem;
        height: 3rem;
        background: #f9ab00;
        border: none;
        &:hover {
            background: #ffdb4d;
        }
    
    
    `;
