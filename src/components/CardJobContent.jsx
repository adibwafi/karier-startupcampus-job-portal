import * as React from "react";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

  export default function CardJobContent({job})  {
    const navigate = useNavigate();

    const bull = (
      <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
      >
        •
      </Box>
    );

    return (
      
      <Card variant="outlined" className="mb-3">
        <CardContent>
          <Typography variant="h5" component="div">
          {job.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            
          </Typography>
          <Typography variant="body2">
            {job.description.substring(0, 200)}...
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"
          onClick={() => navigate(`/jobs/${job._id}`)}>Apply</Button>
        </CardActions>
        </Card>
      
    );
  }
  