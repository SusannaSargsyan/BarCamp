import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 10,
    paddingBottom: theme.spacing.unit * 10,
    borderRadius: '0',

  },
  socialIcon: {
    margin: 5
  }
});

function Footer(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={10} md={4} lg={4}>
          <Typography variant="subheading">
            <b>About Us</b>
          </Typography>
          <Typography variant="caption">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry՝s
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
            a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Grid>
        <Grid item xs={10} md={2} lg={2}></Grid>
        <Grid item xs={10} md={4} lg={4}>
          <Typography variant="subheading" gutterBottom>
            <b>Contact Us</b> <br />
            <small>40 Marshal Baghramyan street, Yerevan 0019</small> <br />
            <small>contact@barcamp.com</small> <br />
          </Typography>
        </Grid>

        <Grid item xs={10} md={2} lg={2}>
          <Typography variant="subheading" gutterBottom>
            <b>Follow Us</b>
          </Typography>
          <div>
            <FontAwesomeIcon size="lg" color="#4267b2" className={classes.socialIcon} icon={faFacebook} />
            <FontAwesomeIcon size="lg" color="#d62976" className={classes.socialIcon} icon={faInstagram} />
            <FontAwesomeIcon size="lg" color="#1da1f2" className={classes.socialIcon} icon={faTwitter} />
            <FontAwesomeIcon size="lg" color="#ff0000" className={classes.socialIcon} icon={faYoutube} />
          </div>
        </Grid>
      </Grid>
    </Paper>

  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
