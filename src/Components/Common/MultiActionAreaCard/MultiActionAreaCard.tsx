import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import {myProjects} from "../../Projects/Project_Item/Project_Item";


export  function MultiActionAreaCard({title,description,img}: myProjects) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <a style={{textDecoration:"none"}} href={""} >
                    <Button size="small">View</Button>
                </a>
                <a style={{textDecoration:"none"}} href={""}>
                    <Button size="small">Github</Button>
                </a>
            </CardActions>
        </Card>
    );
}