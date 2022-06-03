import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export function buildCard(title, description, componentRender, helpLink){
    return (
      <React.Fragment>
        <CardContent>
          <Typography variant="h5" component="div">
            {{ title }}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {{ description }}
          </Typography>
          <Typography variant="body2">
            {{ componentRender }}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{{ helpLink }}</Button>
        </CardActions>
      </React.Fragment>
    );
  
}

  