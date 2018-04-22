import React from 'react';
import { Container, Header, Form, Button, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';
import axios from 'axios';


class Sermons extends React.Component {
  state = { content: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = (e) => {
    e.preventDefault();
    const { content } = this.state
    const { dispatch } = this.props
    axios.post('/api/sermons')
    .then( res => {
      const { headers } = res;
      this.setState({ content: content })
    }).catch( res => {
      const { headers } = res;
      dispatch(setFlash('Failed to add sermon. Please try again!', 'red'));
      dispatch({ type: 'SET_HEADERS', headers });
    });
  }


  render(){
    if (this.props.user.id) {
      return(
        <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.TextArea 
              placeholder='Content' 
              name='content'
              value={this.state.content}
              label='Content' 
              onChange={this.handleChange}
               >
            </Form.TextArea>
          </Form.Group>
        <Segment basic>
          <Button>Submit</Button> 
          {/* { editing && <Button basic onClick={ toggleEdit }>Cancel</Button> } */}
          </Segment>
        </Form>
      </Container>
      )
    } else {
      return(
        <div>
        <Container text>
        <Header>Sermons</Header>
        <p>We generally record the sermons preached at St. John's each Sunday and post the 
          last several here as soon as they are edited. Click on the link to listen to your 
          choice of sermons. (Mouse over the link to see the date of the sermon.) 
          If you would like to save a sermon to your computer, follow the download instructions below.</p>      
        </Container>
      </div>
      )
    }
  }
}


const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(Sermons)