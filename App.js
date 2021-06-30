import React, {useState, useEffect} from "react";
import {Route} from "react-router-dom";
import axios from 'axios';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AddPost from './components/AddPost/AddPost';
import EditPost from './components/EditPost/EditPost';
import Post from './components/Post/Post';
import PostList from './components/PostList/PostList';
import Home from './components/Home/Home'

function App() {
  const[posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('/editors')
    .then(res => setPosts(res.data))
    .catch(error => console.log(error));
  });
  return (
    <div className="App">
       <Navbar/>
    
      <Route exact path="/" render={() => <Home posts={posts}/>} /> 
      

      <Route 
      path="/post-list" 
      render={(props) => <PostList {...props} posts={posts}/>} />    

      <Route 
      path="/editor/:id" 
      render={(props) => <Post {...props} posts={posts}/>} />     

      <Route 
      path="/update/:id" 
      render={(props) => <EditPost {...props} posts={posts}/>} />         

      <Route path="/add-post" component={AddPost} />      
      <Footer/>
      
    </div>
  );
}

export default App;
