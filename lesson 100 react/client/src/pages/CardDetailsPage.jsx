import { Container, Grid } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom'
import useCards from '../cards/hooks/useCards';
import PageHeader from '../components/PageHeader';

const CardDetailsPage = () => {
    const {id} = useParams();
    const {pending, error, card, handleGetCard} = useCards();
    const subtitle = "Here you can find more details about the business";

    
    
  return (
    <Container maxWidth="lg">
        <PageHeader
        title = "Business Details"
        subtitle={subtitle} />
        <h1>Details of card:</h1>
        <h2>{id}</h2>  
        <h3>title: <b>{title}</b></h3>

        <Grid container spacing={0}>
         <Grid item xs={10} md={6} lg={8} alignSelf="center">
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