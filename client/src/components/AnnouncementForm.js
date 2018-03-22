import React from 'react';
import { Header, Container, Segment, Form, Button, Icon, Image } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import { handleUpload } from '../actions/images';
import { addAnnouncement, editAnnouncement } from '../actions/announcements';
import { Link } from 'react-router-dom';
import NoMatch from './NoMatch';
import axios from 'axios';

class Announcements extends React.Component {
  state = { title: '', body: '', fileUploading: false }

  componentDidMount() {
    const { editing } = this.props;
    if(editing) {
      this.setState({ body: this.props.announcement.body, title: this.props.announcement.title });
    } 
  }

  toggleUploading = () => {
    this.setState({ fileUploading: !this.state.fileUploading });
  }

  onDrop = (file) => {
    this.toggleUploading();
    this.props.dispatch(handleUpload(file[0], this.toggleUploading));
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
                placeholder='Body' 
                name='body'
                value={body}
                label='Body' 
                onChange={this.handleChange}
                 >
              </Form.TextArea>
            </Form.Group>
            <Form.Group widths='equal'>
            <Dropzone onDrop={this.onDrop}> 
              <Image src={`${image}`} />
            </Dropzone>
            </Form.Group>
          <Segment basic>
            <Button>Submit</Button> 
            { editing && <Button basic onClick={ toggleEdit }>Cancel</Button> }
            </Segment>
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


