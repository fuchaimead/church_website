import React from 'react';
import AnnouncementForm from './AnnouncementForm';
import { connect } from 'react-redux';
import { Button, Segment, Header } from 'semantic-ui-react';
import { deleteAnnouncement } from '../actions/announcements';

class SingleAnnouncement extends React.Component {
  state = { editing: false } 

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing })
  }

  deleteAnnouncement = () => {
    const { dispatch, announcement } = this.props
    const deleted = window.confirm("Delete Announcement?")
    if (deleted)
    dispatch(deleteAnnouncement(announcement.id))
  }
  
  render(){
    const { announcement: {title, body, image}, user } = this.props; 
    const { editing } = this.state;
    if (user.id && editing ){
      return <AnnouncementForm announcement={ this.props.announcement } toggleEdit={ this.toggleEdit } editing />
    } else if (user.id) {
      return(
        <Segment>
          <Header>{title}</Header>
          <p> {body}</p>
          <Segment basic> 
            <Button basic onClick={ this.toggleEdit }>Edit</Button>
            <Button basic onClick={ this.deleteAnnouncement }>Delete</Button>
          </Segment>
        </Segment>
      )
    } else {
      return(
        <Segment>
        <Header>{title}</Header>
        <p> {body}</p>
        <Segment basic> 
        </Segment>
      </Segment>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    announcements: state.announcements,
    user: state.user
  }
}

export default connect(mapStateToProps)(SingleAnnouncement)