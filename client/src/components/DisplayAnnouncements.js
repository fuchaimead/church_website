import React from 'react';
import SingleAnnouncement from './SingleAnnouncement';
import { connect } from 'react-redux';
import { getAnnouncements } from '../actions/announcements';
import { Segment } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class DisplayAnnouncements extends React.Component {

  componentDidMount(){
    const { dispatch, match: { params: { id } } } = this.props;
    dispatch(getAnnouncements(id))
  }
  
  displayAnnouncements = () => {
    const { announcements } = this.props
    return announcements.map( (announcement, i) => {
      return <SingleAnnouncement key={i} announcement={ announcement } />
    })
  }

  render() {
   return(
    <Segment basic>
      { this.displayAnnouncements() }
    </Segment> 
   )
  }
}

const mapStateToProps = (state) => {
  return {
    announcements: state.announcements, 
  }
}

export default connect(mapStateToProps)(withRouter(DisplayAnnouncements))
