import React from 'react'

class Contact extends React.Component {
  componentDidMount() {
  	const script = document.createElement('script');
    script.src = 'https://www.123formbuilder.com/embed/3529579.js';
    script.async = true;
    document.body.appendChild(script);
  }

  render(){
    return(
      <div>
        <script type="text/javascript" defer src="https://www.123formbuilder.com/embed/3529579.js" data-role="form" data-default-width="650px"></script>
      </div>
    )
  }
}



export default Contact