import React from 'react';
import { Header, Container, Segment, Form, Button, Icon } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import { handleUpload } from '../actions/images';
import { addAnnouncement, editAnnouncement } from '../actions/announcements';
import { Link } from 'react-router-dom';
import NoMatch from './NoMatch';
import axios from 'axios';

class Announcements extends React.Component {
  state = { title: '', body: '', image: '', fileUploading: false }

  componentDidMount() {
    const { editing } = this.props;
    const { body, title, image } = this.state
    if(editing) {
      this.setState({ body: body, title: title, image: image });
    } 
  }

  toggleUploading = () => {
    this.setState({ fileUploading: !this.state.fileUploading });
  }


  onDrop = (file) => {
    const { user } = this.props
    this.toggleUploading();
    this.props.dispatch(handleUpload(file[0], user, this.toggleUploading));
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, toggleForm, editing } = this.props
    if (editing){
      dispatch(editAnnouncement(this.state, this.props.announcement.id ))
      this.props.toggleEdit()
    } else {
      dispatch(addAnnouncement( this.state ))
      toggleForm()
    }
  }
  
  
  render() {
    const { user, toggleEdit, editing } = this.props;
    const { title, body, image } = this.state;
    if (user.id) {
      return(
        <Container>
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
            <Form.Group widths='equal'>
              <Form.TextArea 
                name='image'
                value={image}
                label='Image' 
                onChange={this.handleChange}
                 >
              </Form.TextArea>
            </Form.Group>
          <Button>Submit</Button> 
          { editing && <Form.Button basic onClick={ toggleEdit }>Cancel</Form.Button> }
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


