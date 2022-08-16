import * as React from 'react';
import './SubSection.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery';



const SubSection = () => {
    const theme = useTheme();
    const largeScreen = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <div className="SubContainer">
            <div className="Header">
                Water Data Solutions
            </div>
            <div className="CardContainer">
                <Card sx={{ maxWidth: 370, height: '55vh' }}>
                    <CardMedia
                        component="img"
                        height="220"
                        image="data:image/jpeg;base64,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"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Roboto'}}>
                            Subsurface Mapping
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Roboto' }}>
                            Our one-of-a kind subsurface visualisers give put you on the cutting edge of geospatial data interaction. 
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 370, height: '55vh' }}>
                    <CardMedia
                        component="img"
                        height="220"
                        image="https://d3pcsg2wjq9izr.cloudfront.net/files/8924/products/860233/8924_4_202207030544188351952_raw.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Roboto' }}>
                            Quality Analysis
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Roboto' }}>
                            Our analysis engine takes real-time data from embedded sensors to monitor water content and quality.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 370, height: '55vh' }}>
                    <CardMedia
                        component="img"
                        height="220"
                        image="https://media.istockphoto.com/photos/nepali-girl-drinking-water-village-near-annapurna-range-picture-id1186508009?k=20&m=1186508009&s=612x612&w=0&h=oaWeHmFoSAK56TBzfAH7dAWafTjfjxIeofFyfmLpN6Y="
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Roboto'}}>
                            Global Impact
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Roboto' }}>
                            Learn how our solutions are enhancing access to clean and healthy drinking water in communities around the world. 
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
};

export default SubSection