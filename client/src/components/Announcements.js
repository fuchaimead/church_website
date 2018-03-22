import React from 'react';
import { Header, Container, Segment, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import DisplayAnnouncements from './DisplayAnnouncements'
import AnnouncementForm from './AnnouncementForm'
class Announcements extends React.Component {
  state = { showForm: false  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  render(){
    const { showForm } = this.state;
    if (this.props.user.id) {
      return(
        <Segment basic>
          <p className='center'><i>“If you missed church last Sunday, here
          are the announcements from the bulletin of March 4</i></p>
          <Button basic onClick={this.toggleForm}> 
            { showForm ? 'Close Form' : 'Add Announcement' }
          </Button> 
          { showForm && <AnnouncementForm toggleForm={ this.toggleForm} /> }
          <DisplayAnnouncements /> 
        </Segment>
    ) 
  } else {
      return(
        <DisplayAnnouncements /> 
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(Announcements) 


