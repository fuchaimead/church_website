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
  state = { title: '', body: '', fileUploading: false }

  componentDidMount() {
    const { editing } = this.props;
    if(editing) {
      this.setState({ body: this.state.body, title: this.state.title });
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

  handleSubmit = (e) => {
    const { history, dispatch } = this.props
    const { title, body } = this.state
    e.preventDefault();
    let announcement = { title: title, body: body }
    this.props.dispatch(addAnnouncement(announcement, history))
  }
  
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  
  render() {
    const { user, toggleEdit, editing } = this.props;
    const { title, body } = this.state;
    if (user.id) {
      return(
        <Container>
          {/* <Header> Add Announcement </Header>  */}
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
           <Form.Button basic onClick={toggleEdit}>Cancel</Form.Button> 
          <Link to={'./announcements'} > 
            <Button basic> Cancel </Button> 
          </Link>
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


