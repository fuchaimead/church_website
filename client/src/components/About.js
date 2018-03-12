import React from 'react' 
import { Segment, Container, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class About extends React.Component {
  render(){
    return(
      <Segment basic> 
        <Header as='h1' className='center'> About Saint John's Episcopal Church </Header>
        <p className='center'><i>“Our mission is to grow in our relationship with Christ
            and to make Him known to all."</i></p>
        <Container text>
        <p> St. John’s is centrally located in Farmington and serves folks from the Four Corners area 
        (The Four Corners is the only place in the U.S. where four states meet: New Mexico, Colordao, 
        Utah, and Arizona). We also enjoy a close relationship with the Episcopal Church in Navajoland. </p>

        <p> We offer a wide range of parish activities and programs, respond to the needs of our community 
        through our outreach mission, and strive to make St. John’s a spiritual home for everyone.</p>

        <p> St. John’s is a part of the <a href='https://www.dioceserg.org/' target='blank'>Diocese of the Rio Grande </a> and was established in Farmington as a 
        mission by Bishop John Mills Kendrick. Initial planning, services, and funding for the new 
        church began in 1893-94, and by 1908, the church building was completed. The building has 
        undergone many changes including the addition of new rooms, beautiful stained glass windows, 
        pews and furniture. We have kept the traditional English chapel features and still have many 
        items of historical and artistic value. </p>

        <p> St. John’s is the oldest church in San Juan County still worshipping in its original building; 
        all other congregations have either rebuilt their churches or relocated to other locations. 
        On October 11, 2008, St. John’s was re-consecrated to the Glory of God by Bishop Bill Frey in 
        celebration of a century of worship and service in Farmington. </p>       
        <Button basic as={ Link } to='/membership'> Become a Member </Button>
        </Container> 


      </Segment> 
    )
  }
}

export default About;