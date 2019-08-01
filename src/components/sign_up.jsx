import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

// import { createNewUser, sessionErrors } from '../../actions/session_actions';
// import { connect } from 'react-redux';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.primary.dark,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      fontSize: '1.5em',
    },
  },
  titleText: {
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      fontSize: '3em',
    },
  },
  inputText: {
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      fontSize: '1.5em',
    },
  }
});

class SignIn extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      username: '',
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  clearState() {
    this.setState({
        username: "",
        email: "",
        password: ""
    });
  }

  handleChange(field) {
    return e => {
      this.setState({[field]: e.target.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault(); 
    this.props.processForm(this.state); 
    this.clearState();
  }
  
  render() {
  const { classes } = this.props;

    return (
      <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
      <Avatar className={classes.avatar}>
      <LockOutlinedIcon />
      </Avatar>
          <Typography className={classes.titleText} component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel className={classes.inputText} htmlFor="username">Username</InputLabel>
              <Input onChange={this.handleChange('username')} id="username" name="username" autoComplete="username" autoFocus value={this.state.username} />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel className={classes.inputText} htmlFor="email">Email Address</InputLabel>
              <Input onChange={this.handleChange('email')} id="email" name="email" autoComplete="email" autoFocus value={this.state.email}/>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel className={classes.inputText} htmlFor="password">Password</InputLabel>
              <Input onChange={this.handleChange('password')} name="password" type="password" id="password" autoComplete="current-password" value={this.state.password}/>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign up
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};


// const msp = state => {
//   return {
//       errors: Object.values(state.errors),
//   };
// };

// const mdp = dispatch => ({
//   processForm: (user) => dispatch(createNewUser(user)),
//   clearErrors: () => dispatch(sessionErrors([])),
// }); 

export default (withStyles(styles)(SignIn));