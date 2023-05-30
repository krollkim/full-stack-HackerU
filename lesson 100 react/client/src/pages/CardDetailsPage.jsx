import { Container, Grid } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader';

const CardDetailsPage = () => {
    const {id,title, url} = useParams();
   
    
  return (
    <Container maxWidth="lg">
        <PageHeader
        title = "Business Details"
        subtitle="Here you can find more details about the business" />
        <h1>Details of card:</h1>
        <h2>{id}</h2>  
        <h3>title: <b>{title}</b></h3>

        <Grid container spacing={0}>
         <Grid item xs={10} md={6} lg={8} alignSelf="center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit sunt, magni explicabo dolor optio obcaecati eligendi facilis quia labore omnis libero? Laudantium, ab possimus dolor deleniti expedita inventore ipsa sapiente!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit sunt, magni explicabo dolor optio obcaecati eligendi facilis quia labore omnis libero? Laudantium, ab possimus dolor deleniti expedita inventore ipsa sapiente!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit sunt, magni explicabo dolor optio obcaecati eligendi facilis quia labore omnis libero? Laudantium, ab possimus dolor deleniti expedita inventore ipsa sapiente!
         </Grid>
          <Grid 
          item xs={5.1} lg={4} 
          sx={{display: {md: "flex"}, 
          justifyContent: "center"
          }}>
            <img src={`/assets/images/${url}`} alt="card" width={350}/>
          </Grid>
        </Grid>
    </Container>
  )
}

export default CardDetailsPage