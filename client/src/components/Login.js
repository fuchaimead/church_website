import React, { Component } from 'react';
import { Header, Segment, Form, Button, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { handleLogin } from '../actions/auth';

class Login extends Component {
  state = { email: '', password: '' };

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { dispatch, history } = this.props;
    const { email, password } = this.state;
    dispatch(handleLogin(email, password, history));
  }

  render() {
    const { email, password } = this.state;
    return (
      <Segment basic style={styles.width}>
        <Grid textAlign='center' style={styles.login_grid}>
          <Grid.Column style={styles.login_container} mobile={16} tablet={8} computer={8} largeScreen={5} widescreen={5}>
            <Header as='h1' textAlign='center'>Login</Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label htmlFor='email'>Email</label>
                <input
                  required
                  id='email'
                  value={email}
                  placeholder='Email'
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor='password'>Password</label>
                <input
                  required
                  id='password'
                  value={password}
                  placeholder='Password'
                  type='password'
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Segment textAlign='center' basic>
                <Button primary type='submit'>Submit</Button>
              </Segment>
            </Form>
          </Grid.Column> 
        </Grid>
      </Segment>
    );
  }
}

const styles = {
  width: {
    maxWidth: '100%',
  }
}

export default connect()(Login);
