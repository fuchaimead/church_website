import React from 'react';
import { Header, Container, Segment, Button, Icon } from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Announcements extends React.Component {
  state = { announcements: [] }

  
  componentDidMount() {
    axios.get('/api/announcements')
      .then( res => {
        this.setState({ announcements: res.data })
      }).catch( err => {
        // TODO
    });
  }

  displayAnnouncements = () => {
    const { id } = this.props.match.params
    const { user } = this.props
    if (user.id){ 
      return this.state.announcements.map(a => {
        return(
          <div key={a.id}> 
          <Header>{a.title}</Header>
          <p> {a.body}</p>
          <p>{a.image}</p>
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
          </div>
        )
      }) 
    } else {
      return this.state.announcements.map(a => {
        return(
          <div key={a.id}> 
          <Header>{a.title}</Header>
          <p> {a.body}</p>
          <p>{a.image}</p>
          </div>
        )
      }) 
    }
  }

  render(){
    return(
      <Segment basic>
        <p className='center'><i>“If you missed church last Sunday, here
        are the announcements from the bulletin of March 4</i></p>
        { this.displayAnnouncements() }
      </Segment>
    )
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Announcements) 