import React, { Component } from 'react';
import { Header, Container, Grid, Segment } from 'semantic-ui-react';
import church from '../images/church.jpg';

class Home extends Component {
  render() {
    return (
      <div> 
        <Header as='h1' style={styles.center}>Welcome</Header>
        <Header as='h3' style={styles.center}>Saint John's Episcopal Church | Farmington, NM</Header>
        <Segment basic>
          <Grid>
            <Grid.Column  width={8}>
              <img className='center' src={church} alt="church" />
            </Grid.Column>
            <Grid.Column width={8}> 
              <Container text> 
                <p styles={styles.center}><i>“We do not draw people to Christ by loudly discrediting what they believe, 
                telling them how wrong they are and how right we are, but by showing them a light so 
                lovely that they want to know its source.”—Madeleine L’Engle</i></p>
                <br />
                <p>
                Located in the northwest corner of New Mexico, 
                St. John's is a faith community sharing Christ's love 
                through liturgical worship and outreach to others. 
                We invite you to join us for worship on Sundays, Tuesdays, Wednesdays, Thursdays, and Holy Days.
                To learn more about St. John's, give us a call, email us, or just drop by for a chat.
                The parish office is open from 9:00 am to 3:00 pm, Monday through Thursday, 
                and the coffee pot is always on.
                </p>
              </Container> 
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    );
  }
}

const styles = {
  center: {
    textAlign: 'center',
  }
}

export default Home;
