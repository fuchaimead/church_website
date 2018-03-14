import React from 'react'
import { Dimmer, Loader, Container } from 'semantic-ui-react';

class Contact extends React.Component {
  state={ loaded: false }

  componentDidMount() {
  	const script = document.createElement('script');
    script.src = 'https://www.123formbuilder.com/embed/3529579.js';
    script.async = true;
    document.body.appendChild(script);
    this.setState({ loaded: true })
  }

  render(){
    if (this.state.loaded){
      return(
      <div>
        <script 
          type="text/javascript" 
          defer 
          src="https://www.123formbuilder.com/embed/3529579.js" 
          data-role="form" 
          data-default-width="650px">
        </script>  
      </div>
    )
  } else {
    return(
      <Container style={{height: '400px'}}>
        <Dimmer active inverted>
          <Loader>Loading</Loader>
        </Dimmer>
      </Container>
      )
    }
  }
}



export default Contact