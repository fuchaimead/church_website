import React from 'react';
import { Header, Container, Segment, Form, Button, Icon } from 'semantic-ui-react';
import { getAnnouncement, editAnnouncement } from '../actions/announcements'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class AnnouncementEditForm extends React.Component {
  state={ title: '', body: '' }

  componentDidMount() {
    const { id, title, body } = this.props.announcement
    this.props.dispatch(getAnnouncement(id))
    this.setState({ title, body })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { history, dispatch } = this.props
    const { title, body } = this.state
    let announcement = { title: title, body: body }
    dispatch(editAnnouncement(this.state, this.props.announcement.id));
    this.props.toggleEdit();
  }

  render(){
    const { title, body } = this.state
      return(
        <Container>
          <Header> Edit Announcement </Header> 
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
          <Button>Submit</Button> 
          <Link to={'./announcements'} > 
            <Button basic> Cancel </Button> 
          </Link>
          </Form>
        </Container>
        )
  }
}


const mapStateToProps = (state) => {
  return { announcement: state.announcements }
}


export default connect(mapStateToProps)(AnnouncementEditForm);