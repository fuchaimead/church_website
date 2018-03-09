import React from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';
import Iframe from 'react-iframe';

const Footer = () => (
  <div style={styles.footer}>
    <Grid> 
      <Grid.Row>
      <Grid.Column width={4} style={styles.center}>
        SUNDAY SERVICES
        <br />
        8:00 am ( Rite I )
        <br />
        10:00 am ( Rite II )
      </Grid.Column>
      <Grid.Column width={4} style={styles.center}>
        ADDRESS
        <br />
        312 N. Orchard Ave.
        <br />
        Farmington, NM 87401
        <br />
        (505) 325-5832
      </Grid.Column>
      <Grid.Column width={4}>
        <Iframe 
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.5770110347!2d-108.20715518467705!3d36.7327187799626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x873b8f88d4c3e3c9%3A0xccd3879944a2be27!2sSt+John&#39;s+Episcopal+Church!5e0!3m2!1sen!2sus!4v1520546231409"
          width="300" 
          height="200" 
          frameborder="0" 
          style="border:0" 
          allowfullscreen
        /> 
      </Grid.Column>
      </Grid.Row>
    </Grid> 
  </div>
)

const styles = {
  footer: {
    background: '#233741',
    height: '250px',
    paddingTop: '2%',
    color: 'white',
    fontSize: '1.3em',
    lineHeight: '1.3',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
  }
}
export default Footer;