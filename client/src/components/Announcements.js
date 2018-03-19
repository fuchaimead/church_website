import React from 'react';
import { Header, Container, Segment, Button, Icon } from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';
import { deleteAnnouncement, getAnnouncements } from '../actions/announcements';
import { Link } from 'react-router-dom';
import AnnouncementEditForm from './AnnouncementEditForm'

class Announcements extends React.Component {
  state = { loaded: false, editing: false }

  componentDidMount() {
    this.props.dispatch(getAnnouncements(this.props.announcements))
  }

  componentDidUpdate() {
    if (!this.state.loaded)
    this.setState({ loaded: true })
  }

  deleteAnnouncement = (id) => {
    const { dispatch, deleteAnnoucement } = this.props
    const deleted = window.confirm("Delete Announcement?")
    if (deleted)
    dispatch(deleteAnnouncement(id))
  }

  // toggleEdit = () => {
  //   this.setState({ editing: !this.state.editing })
  // }

  displayAnnouncements = () => {
    const { id } = this.props.match.params
    const { user, announcements } = this.props
    if (user.id){ 
      return announcements.map(a => {
        return(
          <Segment key={a.id}> 
          <Header>{a.title}</Header>
          <p> {a.body}</p>
          <p>{a.image}</p>
          <Button as={ Link } to={`/announcements/${a.id}`}>Edit</Button>
          <Button onClick={ () => this.deleteAnnouncement(a.id) }>Delete</Button>
          </Segment>
        )
      }) 
        
    } else {
      return this.props.announcements.map(a => {
        return(
          <Segment key={a.id}> 
          <Header>{a.title}</Header>
          <p> {a.body}</p>
          <p>{a.image}</p>
          </Segment>
        )
      }) 
    }
  }

  render(){
    const { editing } = this.state;
    if(editing) {
      return <AnnouncementEditForm announcement={this.props.announcements} toggleEdit={this.toggleEdit} editing />
    } else {
    return(
      <Segment basic>
        <p className='center'><i>“If you missed church last Sunday, here
        are the announcements from the bulletin of March 4</i></p>
        <Container>
         { this.displayAnnouncements() }
        <Button
            as={Link} 
            to='announcement-form'
            basic
            icon
            labelPosition='left'
          >
            <Icon name='add' />
            Announcement
          </Button>
        </Container>
      </Segment>
    )
   }
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    announcements: state.announcements 
  };
};

export default connect(mapStateToProps)(Announcements) 


