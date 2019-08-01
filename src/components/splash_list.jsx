import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Login from '../users/log_in';
import Signup from '../users/sign_up';
import Demo from '../users/demo_log_in';

const styles = theme => ({
  hidden: {
      display: 'none',
  },
  shown: {
      marginBottom: 5,
      fontSize: 25,
  },
  text: {
    fontSize: '20px',
    color: theme.palette.primary,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      fontSize: 40,
    },
  },
  smallTitle: {
    fontSize: '150%',
    color: 'black',
    textAlign: 'center',
    marginTop: '20px',
  },
  session: {
    marginTop: '10px',
  }
});

class SplashList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          checked: '',
        };
        this.checklist = ['Log In', 'Sign up', 'Demo User'];
    }

  handleToggle(value){
    if (this.state.checked === value) {
      value = '';
    }
    this.setState({
      checked: value,
    });
  };

  renderForm(){
    const { checked } = this.state;
    const { classes } = this.props;

    switch (checked) {
      case 'Log In':
        return <Login />
      case 'Sign up':
        return <Signup />
      case 'Demo User':
        return <Demo />
      case '':
        return <Typography className={classes.smallTitle} variant="h5" gutterBottom>
          Pick a Todo Item to start!
        </Typography>
      default:
        break;
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container direction='column'>
          <List>
            {this.checklist.map(value => (
            <Grid item key={value} xs={12} >
              <ListItem className={this.state.checked === value || this.state.checked === '' ? 
              classes.shown : classes.hidden} 
              key={value} role={undefined} dense button divider
              onClick={() => this.handleToggle(value)}>
              <ListItemText className={classes.text} primary={`${value}!`} />
              <Checkbox
                  checked={this.state.checked === value}
                  color="primary"
                  disableRipple={false}
              />
              </ListItem>
            </Grid>
            ))}
          </List>
          <Grid item xs={12}>
            <div className={classes.session}>
              {this.renderForm()}
            </div>
          </Grid>
      </Grid>
    );
  }
}

SplashList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SplashList);