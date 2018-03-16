import React from 'react';
import { Header, Container, Segment, Form, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import NoMatch from './NoMatch';
import axios from 'axios';

class Announcements extends React.Component {
  state = { title: '', body: '' }

  handleSubmit = (e) => {
    const { title, body } = this.state
    e.preventDefault();
    // let quiz = { title: title, body: body }
    // dispatch(addQuiz(quiz, history))
  }
  

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  

  render() {
    const { user } = this.props;
    const { title, body } = this.state;
    if (user.id) {
      return(
        <Container basic>
          <Header> Add Announcement </Header> 
          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths='equal'>
              <Form.Input 
                label='Title'
                name='title'
                value={title}  
                placeholder='Title' 
                autoFocus={true}
                required
                onChange={this.handleChange}>
              </Form.Input>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.TextArea 
                name='body'
                value={body}
                label='Body' 
                onChange={this.handleChange}
                 >
              </Form.TextArea>
            </Form.Group>
          </Form>
        </Container>
        )
      } else 
        return(
          <NoMatch />
        )
      }
}


const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Announcements)


