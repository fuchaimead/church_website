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
    const { dispatch, deleteAnnoucement, announcement } = this.props
    const deleted = window.confirm("Delete Announcement?")
    if (deleted)
    dispatch(deleteAnnouncement(announcement.id))
  }
  
  render(){
    const { announcement: {title, body} } = this.props; 
    const { editing } = this.state;
    if (editing){
      return <AnnouncementForm announcement={ this.props.announcement } toggleEdit={ this.toggleEdit } editing />
    } else {
      return(
        <Segment fluid>
          <Header>{title}</Header>
          <p> {body}</p>
          <Segment basic> 
            <Button basic onClick={ this.toggleEdit }>Edit</Button>
            <Button basic onClick={ this.deleteAnnouncement }>Delete</Button>
          </Segment>
        </Segment>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    announcements: state.announcements,
  }
}

export default connect(mapStateToProps)(SingleAnnouncement)