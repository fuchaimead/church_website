import React from 'react';
import { Header, Container, Segment } from 'semantic-ui-react';

class Annoucements extends React.Component {

  render(){
    return(
      <Segment basic>
        <p className='center'><i>“If you missed church last Sunday, here
        are the announcements from the bulletin of March 4</i></p>

        <p>Daylight Savings Time begins next Sunday at 2:00 am. 
        Don’t forget to set your clocks ahead 1 hour for church.</p>

        <p> make this page editable </p>
      </Segment>
    )
  }
}

export default Annoucements 