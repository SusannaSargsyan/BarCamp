import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hajian from '../../../public/images/AH.jpg';
import Arpi from '../../../public/images/arpi.jpg';
import Artashes from '../../../public/images/AV.jpg';
import Bill from '../../../public/images/BG.jpg';
import Pakhchanyan from '../../../public/images/AP.jpg';
import Daniel from '../../../public/images/DT.jpg';
import Nersisyan from '../../../public/images/HN.jpg';
import Mark from '../../../public/images/M.jpg';
import Rihanna from '../../../public/images/R.jpg';
import Martirosyan from '../../../public/images/SM.jpg';



export default class Dashboard extends Component {
  render () {
    return (
      <div>
<Grid container spacing={24}>
  <Grid item md={4} lg={4}>
		<Card>
      <CardActionArea>
        <CardMedia
          image={Daniel}
          title="Transportation of the future for everyone "
		  style={{height: 300}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            "Transportation of the future for everyone " <br/>
            Daniel Tonkopiy
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          June 16, 14:00
        </Button>
        <Button size="small" color="primary">
          AUA, room 208W
        </Button>
      </CardActions>
    </Card>
	</Grid>
  <Grid item md={4} lg={4}>
		<Card>
      <CardActionArea>
        <CardMedia
          image={Hajian}
          title="Breaking Stereotypes: Programming Myths"
		  style={{height: 300}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          "Breaking Stereotypes: Programming Myths" <br/>
          Aram Hajian
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Jun 15, 15:00
        </Button>
        <Button size="small" color="primary">
          AUA, room 208W
        </Button>
      </CardActions>
    </Card>
	</Grid>
  <Grid item md={4} lg={4}>
		<Card>
      <CardActionArea>
        <CardMedia
          image={Arpi}
          title="Rockbite Games | Managing a video game project"
		  style={{height: 300}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          "Rockbite Games | Managing a video game project" <br/>
          Arpi Grigoryan
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Jun 16, 12:00
        </Button>
        <Button size="small" color="primary">
          AUA, room 306E
        </Button>
      </CardActions>
    </Card>
	</Grid>
  <Grid item md={4} lg={4}>
		<Card>
      <CardActionArea>
        <CardMedia
          image={Nersisyan}
          title="Managing Egos / Making good teams"
		  style={{height: 300}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            "Managing Egos / Making good teams" <br/>
            Hayk Nersisyan
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Jun 13, 17:00
        </Button>
        <Button size="small" color="primary">
          AUA, room 113W
        </Button>
      </CardActions>
    </Card>
	</Grid>
  <Grid item md={4} lg={4}>
		<Card>
      <CardActionArea>
        <CardMedia
          image={Rihanna}
          title="Crypto-assets under Armenian Law"
		  style={{height: 300}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          "Crypto-assets under Armenian Law" <br/>
          Rihanna
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Jun 17, 17:00
        </Button>
        <Button size="small" color="primary">
          AUA, room Big Hall
        </Button>
      </CardActions>
    </Card>
	</Grid>
  <Grid item md={4} lg={4}>
		<Card>
      <CardActionArea>
        <CardMedia
          image={Mark}
          title="What makes a hero: when technology is #դուխով"
		  style={{height: 300}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          "What makes a hero: when technology is #դուխով" <br/>
          Mark Zuckerberg
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Jun 13, 17:00
        </Button>
        <Button size="small" color="primary">
          AUA, room 113W
        </Button>
      </CardActions>
    </Card>
	</Grid>
  <Grid item md={4} lg={4}>
		<Card>
      <CardActionArea>
        <CardMedia
          image={Bill}
          title="Parallelism or concurrency: that is the question"
		  style={{height: 300}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          "Parallelism or concurrency: that is the question" <br/>
          Bill Gates
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Jun 13, 17:00
        </Button>
        <Button size="small" color="primary">
          AUA, room 113W
        </Button>
      </CardActions>
    </Card>
	</Grid>
  <Grid item md={4} lg={4}>
		<Card>
      <CardActionArea>
        <CardMedia
          image={Martirosyan}
          title="IT Office Design: Must knows and insights"
		  style={{height: 300}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          "IT Office Design: Must knows and insights" <br/>
          Samvel Martirosyan
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Jun 13, 17:00
        </Button>
        <Button size="small" color="primary">
          AUA, room 113W
        </Button>
      </CardActions>
    </Card>
	</Grid>
  <Grid item md={4} lg={4}>
		<Card>
      <CardActionArea>
        <CardMedia
          image={Pakhchanyan}
          title="Fighting against phishing attacks"
		  style={{height: 300}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          "Fighting against phishing attacks" <br/>
          Aram Pakhchanyan
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Jun 13, 17:00
        </Button>
        <Button size="small" color="primary">
          AUA, room 113W
        </Button>
      </CardActions>
    </Card>
	</Grid>
  <Grid item md={4} lg={4}>
		<Card>
      <CardActionArea>
        <CardMedia
          image={Artashes}
          title="Rockbite Games | Managing a video game project"
		  style={{height: 300}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          "Node.js Load Balancing" <br/>
          Artashes Vardanyan
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Jun 13, 17:00
        </Button>
        <Button size="small" color="primary">
          AUA, room 113W
        </Button>
      </CardActions>
    </Card>
	</Grid>
</Grid>
      </div>
    )
  }
}
