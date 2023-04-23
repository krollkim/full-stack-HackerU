import React from 'react'
import { Button, Box, Card, CardMedia, CardContent, Typography, Divider, List, ListItem} from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from "@mui/icons-material/Delete";
import CallIcon from '@mui/icons-material/Call';
import FavoriteIcon from '@mui/icons-material/Favorite';
const CardComponent = () => {
  return (
 <>
    <Box sx={{display: "flex", justifyContent: "center"}}>
    <Card sx={{ width: 270, height: 470, m: 2, background: "pink"}}>
            <CardMedia sx={{height: 250 , p: 1}} 
            component="img" image="assets/images/card-img.png" />
            <CardContent>
                <Typography component="h1" sx={{color: "black", textAlign: "left", p:0.5}}>Kroll Kim</Typography>
                <Typography fontSize="small" component="h2" sx={{color: "black", textAlign: "left", marginBottom: 2, p:0.5}}>Fullstack-Dev</Typography>
                <Divider/>
                <List>
                    <ListItem sx={{p:0}} disablePadding>Phone: 052-5890252</ListItem>
                    <ListItem sx={{p:0}} disablePadding>Address: Tlv-Center</ListItem>
                    <ListItem sx={{p:0}} disablePadding>Email: kimkroll2000@gmail.com</ListItem>
                </List>
            </CardContent>
            <Box sx={{display: "flex", justifyContent: "space-between"}}>
                <Box>
                    <Button startIcon={<DeleteIcon />}></Button> 
                    <Button startIcon={<CreateIcon />}></Button>
                </Box>
                <Box>
                    <Button endIcon={<CallIcon />}></Button> 
                    <Button endIcon={<FavoriteIcon />}></Button>
                </Box>
            </Box>
        </Card>
    </Box>
 </>
 )
}

export default CardComponent