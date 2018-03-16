import React from 'react';
import { Segment, Container, Header, Button } from 'semantic-ui-react';

class About extends React.Component {
  render(){
    return(
      <Segment basic> 
        <Container text>
        <Header as='h1' className='center'> About Saint John's Episcopal Church </Header>
        <p className='center'><i>“We do not draw people to Christ by loudly discrediting what 
        they believe, telling them how wrong they are and how right we are, but by showing 
        them a light so lovely that they want to know its source.”—Madeleine L’Engle</i></p>
        <Header as='h3'> We Want You to be a Part of our Family </Header>
        <br />
        <p>
        We look forward to having you be a part of our parish family. 
        Please feel free to participate in any area of worship and ministry. 
        We are all eager to help you understand the Episcopal Church—its beliefs and practices, 
        its style of worship. Please let us know if there is anything we can do to help you better 
        understand our customs and traditions. Official membership can come when you decide you are
        ready to join.
        </p>

        <p>
        Becoming a Member of St. John’s
        People become members of St. John's in several ways. The first is through baptism at an 
        Episcopal church. (But no matter where or when you were baptized, you are a part of the 
        Body of Christ and eligible to receive Communion and to participate in our life together.) 
        If you were baptized at St. John’s, your name is already listed in our Parish Register, 
        the official list of members.</p>
          <p>
        A second way to become a member of St. John's is through Confirmation. Done by the Bishop, 
        this sacrament is a further commitment to Christ and and a way to reconfirm the vows made 
        for you if you were baptized as an enfant or small child. Confirmation is also for those 
        baptized in a non-liturgical denomination.</p>
        <p>
        Some of our members were confirmed elsewhere and came to us by means of a Letter of Transfer. 
        This means that the person was a member of another Episcopal church and is simply transferring 
        their membership to St. John’s. We record their names in the Parish Register.</p>
        <p>
        For people who were confirmed in another branch of the Church in Apostolic Succession 
        such as the Roman Catholic, Lutheran, or any of the various Orthodox Churches), 
        we do not re-confirm them. Instead, they become members of the Episcopal Church through 
        Reception, which is done by the Bishop.</p>
        <p> If you have any questions at all, feel free to speak with any of our clergy 
          or email the parish office.  </p>
        </Container> 


      </Segment> 
    )
  }
}

export default About;