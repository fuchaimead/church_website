import React from 'react';
import { Container, Header } from 'semantic-ui-react';

class Sermons extends React.Component {

  render(){
    return(
      <div>
        <Container text>
        <Header>Sermons</Header>
        <p>We generally record the sermons preached at St. John's each Sunday and post the 
          last several here as soon as they are edited. Click on the link to listen to your 
          choice of sermons. (Mouse over the link to see the date of the sermon.) 
          If you would like to save a sermon to your computer, follow the download instructions below.</p>      
        </Container>
      </div>
    )
  }
}

export default Sermons 