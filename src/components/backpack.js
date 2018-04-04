import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { withStyles } from 'material-ui/styles';
import Card, { CardTitle, CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Header from './header';


class BackPack extends Component {

	// const styles = {
	//   card: {
	//     maxWidth: 345,
	//   },
	//   media: {
	//     height: 200,
	//   },
	// };

  render() {
    return (
        <div>
        	<Header/>
        	<div className="row">
        	<div className="col-md-12">
	        	<div className="col-md-3">
		       	<Card style={{maxWidth:"345px"}} className="homeCard">
			        <CardMedia overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
	      				<img src="img/card2.jpg" height="180" width="auto" alt="" />
			        </CardMedia>
			        <CardContent>
			          <Typography gutterBottom variant="headline" component="h2">
			            Lizard
			          </Typography>
			          <Typography component="p">
			            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
			            across all continents except Antarctica
			          </Typography>
			        </CardContent>
			        <CardActions>
			          <Button size="small" color="primary">
			            Share
			          </Button>
			          <Button size="small" color="primary">
			            Learn More
			          </Button>
			        </CardActions>
			      </Card>
			      </div>
			      <div className="col-md-3">
		       	<Card style={{maxWidth:"345px"}} className="homeCard">
			        <CardMedia overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
	      				<img src="img/card2.jpg" height="180" width="auto" alt="" />
			        </CardMedia>
			        <CardContent>
			          <Typography gutterBottom variant="headline" component="h2">
			            Lizard
			          </Typography>
			          <Typography component="p">
			            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
			            across all continents except Antarctica
			          </Typography>
			        </CardContent>
			        <CardActions>
			          <Button size="small" color="primary">
			            Share
			          </Button>
			          <Button size="small" color="primary">
			            Learn More
			          </Button>
			        </CardActions>
			      </Card>
			      </div>
			      <div className="col-md-3">
		       	<Card style={{maxWidth:"345px"}} className="homeCard">
			        <CardMedia overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
	      				<img src="img/card2.jpg" height="180" width="auto" alt="" />
			        </CardMedia>
			        <CardContent>
			          <Typography gutterBottom variant="headline" component="h2">
			            Lizard
			          </Typography>
			          <Typography component="p">
			            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
			            across all continents except Antarctica
			          </Typography>
			        </CardContent>
			        <CardActions>
			          <Button size="small" color="primary">
			            Share
			          </Button>
			          <Button size="small" color="primary">
			            Learn More
			          </Button>
			        </CardActions>
			      </Card>
			      </div>
			      <div className="col-md-3">
		       	<Card style={{maxWidth:"345px"}} className="homeCard">
			        <CardMedia overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
	      				<img src="img/card2.jpg" height="180" width="auto" alt="" />
			        </CardMedia>
			        <CardContent>
			          <Typography gutterBottom variant="headline" component="h2">
			            Lizard
			          </Typography>
			          <Typography component="p">
			            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
			            across all continents except Antarctica
			          </Typography>
			        </CardContent>
			        <CardActions>
			          <Button size="small" color="primary">
			            Share
			          </Button>
			          <Button size="small" color="primary">
			            Learn More
			          </Button>
			        </CardActions>
			      </Card>
			      </div>
		      </div>
		      </div>
        </div>   
    );
}



}
export default BackPack;
