
import React, {useState} from 'react';
import styled from 'styled-components';
import spinner from "../../spinner.gif";
import {Link} from "react-router-dom";
import axios from "axios";


const PostList = ({posts}) => {
    const [editor, setEditor] = useState([])

//DELETE ARTICLE BY ID
const deleteEditor = id => {
    axios.delete(`/editors/${id}`)
    .then(res => alert(res.data));
    setEditor(editor.filter(elem => elem._id !== id));
};


    return (
        <MainContainer >

        <div className="header-page">
                <div className="main-info">
                    <h1> Upcoming Conferences</h1>
                </div>
            </div>

        <div class="card" style={{width: "60rem", marginTop: "5rem", marginBottom: "6rem"}}>
            { !posts.length ? <img src={spinner} alt="loading..."/>:
              
             posts.map((editor, key) => (
                <div className="container" key={key}>
                     <div className="row">
                <div  className="col-md-6" >
                    <img src={`/uploads/${editor.photo}`} alt="..." style={{width:"90%"}}></img>

                    </div>
             
                <div className="col-md-5">
                    <Link to={{pathname: `/editor/${editor._id}`}} style={{textDecoration: "none"}}>
                <h1 className="col">{editor.topic_name}</h1>
                </Link>
                <h3 className="col">{editor.speaker_name}</h3>
                
              
                <div className="row my-5">
                    <div className="col-sm-4">
                        <Link to={`/update/${editor._id}`} className="btn btn-outline-success">Edit Post</Link>
                    </div>

                    <div className="col-sm-5">
                        <button onClick={() => deleteEditor(editor._id)} className="btn btn-outline-danger">Delete Post</button>
                    </div>

                </div>
                </div>
                </div>
                <hr />
                </div>
             ))}
                  </div>
        </MainContainer >
    ); 
};

export default PostList;

// MAIN CONTAINER

const MainContainer = styled.div`
    margin: 0rem 0;

    img {
        width: 10rem;
        display: block;
        margin: auto;
        margin-top:3rem;
        margin-botton: 4rem;
        border-radius: 10%;
    }


    span h1{
        color: red;
        font-weight: 500;
        margin-top:2rem;
    }


    .card {
        color: #02014b ;
       background: #FFFFFF;
    }

    h1 {
        margin-top: 5rem;
        color: #f9ab00;
        font-weight: 400;
    }

    h3 {
        color: #000;
    }

    .btn btn-outline-danger {
        margin-left:2rem;
    }

    
    .card {
        margin: auto;
    }

`;