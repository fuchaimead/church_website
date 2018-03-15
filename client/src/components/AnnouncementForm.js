import React from 'react';
import { Header, Container, Segment } from 'semantic-ui-react';
import axios from 'axios';

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

  render(){
    return(
      <Segment basic>
        <p className='center'><i>“If you missed church last Sunday, here
        are the announcements from the bulletin of March 4</i></p>
        <Header> This is the form </Header> 
        { this.displayAnnouncements() }
      </Segment>
    )
  }
}

export default Announcements 