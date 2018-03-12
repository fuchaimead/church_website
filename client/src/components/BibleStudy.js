import React from 'react';
import { Segment, Container, Header } from 'semantic-ui-react';

const BibleStudy = () => {
  return(
    <Segment basic>
      <Header as='h1' className='center'>Bible Study</Header>
      <Container text>
        Do you need a Bible study? Here are some studies based on the weekly 
        lessons read in church each Sunday. (Click on the red lettering to pull up that week's study.)
        If you would like a study from a prior week, contact the parish office.
      </Container>
    </Segment>
  )
}

export default BibleStudy