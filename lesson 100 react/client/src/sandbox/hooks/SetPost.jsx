import { Button, Card, List, ListItem } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'

const SetPost = () => {
   const INITIAL_POST = {
    title: "",
    subtitle: "",
    author: "",
    createdAt: "",
   }

   const [post, setPost] = useState(INITIAL_POST);
   const [posts, setPosts] = useState([]);

   const createNewPost = e => {
    e.preventDefault();
    setPosts([...posts, post]);
    return setPost(INITIAL_POST);
    };
  return (
   <>
   <Box sx={{display: 'flex', justifyContent: 'center'}}>
    <Card sx={{ p: 8, mt: 20 ,width: 500}}>
   <Box sx={{display: 'flex', justifyContent: 'center', mt: 10, textAlign: 'center'}}>
        <Box sx={{border: 1}}>
        <form style={{border: 1 }}>
            <h5 style={{marginBottom: 10}}>
                Posts:
                <span>{post.title} {post.subtitle} {post.author}</span>
            </h5>
            <input type="text" onChange={e => setPost({...post, title: e.target.value})} value={post.title}/>
            <input type="text" onChange={e => setPost({...post, subtitle: e.target.value})} value={post.subtitle}/>
            <input type="text" onChange={e => setPost({...post, author: e.target.value})} value={post.author}/>
        </form>
        <Button sx={{marginTop: 1}}
            disabled={!post.title}
            onClick={createNewPost}>
            Create
        </Button>
      </Box>              
    </Box>

    <Box sx={{display: 'flex', justifyContent: 'center', mt: 10, textAlign: 'center'}}>
        <Box>
            <List>
            {posts.map(
            ( post,
                index) => (
                <ListItem key={index}>
                        {index + 1}. 
                        { post.title} 
                        { post.subtitle} 
                        { post.author}
                </ListItem>
                )
            )}
            </List>
        </Box>
        
    </Box>
   </Card>
   </Box>
   
    
    
   </>
  );
};

export default SetPost