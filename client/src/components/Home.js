import React, { Component } from 'react';
import { Header, Container, Grid, Segment, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import church from '../images/church.jpg';

class Home extends Component {
  render() {
    return (
      <Segment basic> 
        <Header as='h1' className='center'>Welcome</Header>
        <Header as='h3' className='center'>Saint John's Episcopal Church | Farmington, NM</Header>
        <Segment basic>
          <Grid>
            <Grid.Column  width={8}>
              <img className='center' src={ church } alt="church" />
            </Grid.Column>
            <Grid.Column width={8}> 
              <Container> 
                <p style={styles.center}><i>“We do not draw people to Christ by loudly discrediting what they believe, 
                telling them how wrong they are and how right we are, but by showing them a light so 
                lovely that they want to know its source.”—Madeleine L’Engle</i></p>
                <br />
                <p style={styles.font}>
                Located in the northwest corner of New Mexico, 
                St. John's is a faith community sharing Christ's love 
                through liturgical worship and outreach to others.</p>
                <p style={styles.font}> 
                We invite you to join us for worship on Sundays, Tuesdays, Wednesdays, Thursdays, and Holy Days.
                <Link to='about'> To learn more about St. John's </Link>, give us a call, email us, or just drop by for a chat.
                The parish office is open from 9:00 am to 3:00 pm, Monday through Thursday, 
                and the coffee pot is always on.
                </p>
              </Container> 
            </Grid.Column>
          </Grid>
        </Segment>
        <Divider />
          <Grid> 
            <Grid.Column width={8}> 
            <Container text>
              <p>Schedule of Services</p>
              <p>
                SUNDAY
                <br />
                8:00 am ( Rite I )
                <br />
                10:30 am ( Rite II )
              </p>
              <p>
                TUESDAY
                <br />
                8:30 am Morning Prayer 
              </p>
              <p>
                WEDNESDAY
                <br />
                12:00 pm Eucharist
                <br />
                (Bible Study afterwards)
              </p>
              <p>
                THURSDAY
                <br /> 
                5:00 pm Evening Prayer
              </p>
              <p>
                SATURDAY
                <br /> 
                10:00 am Ukrainian Orthodox
              </p>
            </Container> 
            </Grid.Column>
            <Grid.Column>
              <Container text>
              <p>Saint John's Episcopal
                <br />
              312 North Orchard Ave.
              <br />
              Farmington, NM 87401
              <br />
              (505) 325-5832 </p>
              <p> Of special interest: </p>
              <p>A little bit about Lent</p>
              <p>Daylight Savings Time begins</p>
              <p> Holy Week Schedule </p>
              <p>Knitting Lessons at St. John's</p>
              Lenten Soup Supper and Study
              Staff:
              Fr. Guy Mackey OPA, rector, (email)
              Mo. Carol Tookey, priest associate
              Mo. Pat Cook, priest associate
              Jack Yerby, parish administrator/ organist
              Wardens and Vestry
              </Container>
            </Grid.Column>
        </Grid> 
      </Segment>
    );
  }
}

const styles = {
  font: {
    fontSize: '1.5em',
  },
}

export default Home;
