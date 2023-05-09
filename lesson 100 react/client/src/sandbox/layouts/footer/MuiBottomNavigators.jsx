import React from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { Box } from '@mui/system';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const MuiBottomNavigators = () => {
  return (
        <Box mt={8}>
            <Box>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestiae quis ut neque eum odio delectus sint dolorem iste? Consequuntur debitis atque earum ullam officiis voluptate doloremque ipsam tempore quis.
            </Box>
            
            <Paper sx={{position: 'sticky'}} elevation={4}>
                <BottomNavigation showLabels>
                    <BottomNavigationAction label="Facebook" icon={<FacebookIcon />}/>
                    <BottomNavigationAction label="Instagram" icon={<InstagramIcon />}/>
                    <BottomNavigationAction label="Twitter" icon={<TwitterIcon />}/>
                </BottomNavigation>
            </Paper>
        </Box>
    )
}

export default MuiBottomNavigators