import React from 'react'
import './Projects.css'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';

function Projects() {
  return (
    <Box style={{marginLeft:'10rem',marginRight:'10rem',marginTop:"4rem"}} >
    <Grid container rowSpacing={4.5} columnSpacing={10}>
      <Grid item xs={12} lg={12}>
      <Typography variant="h3" style={{textAlign:'center', margin:'1rem'}}>Projects</Typography>
      </Grid>
      <Grid item xs={6} lg={4} >
        <Card>
          <CardMedia
          component='img'
          height='150'
          image=''
          alt='project1'
          />
          <CardContent>
            <Typography>
            Fluid grids use columns that scale and resize content. A fluid grid's layout can use breakpoints to determine if the layout needs to change dramatically.
            </Typography>
          </CardContent>
          <CardActions>
            <Button>View Source Code</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={6} lg={4} >
        <Card>
          <CardMedia
          component='img'
          height='150'
          image=''
          alt='project2'
          />
          <CardContent>
            <Typography>
            Fluid grids use columns that scale and resize content. A fluid grid's layout can use breakpoints to determine if the layout needs to change dramatically.
            </Typography>
          </CardContent>
          <CardActions>
            <Button>View Source Code</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={6} lg={4} >
        <Card>
          <CardMedia
          component='img'
          height='150'
          image=''
          alt='project1'
          />
          <CardContent>
            <Typography>
            Fluid grids use columns that scale and resize content. A fluid grid's layout can use breakpoints to determine if the layout needs to change dramatically.
            </Typography>
          </CardContent>
          <CardActions>
            <Button>View Source Code</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
    </Box>
  );
}

export default Projects
