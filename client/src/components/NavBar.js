import React, { Component } from 'react';
import { Menu, Segment, Grid } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import EpiscopalShield from '../images/EpiscopalShieldWeb.jpg';

class NavBar extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Segment basic> 
        <Grid className='secondary-menu'>
          <img src={ EpiscopalShield } alt='episcopal shield' />
          <h1>Saint John's Episcopal Church</h1>
          <Menu pointing secondary>
            <Menu.Item name='prayer requests' active={activeItem === 'prayer requests'} onClick={this.handleItemClick} />
            <Menu.Item name='resources' active={activeItem === 'resources'} onClick={this.handleItemClick} />
            <Menu.Item name='membership' active={activeItem === 'membership'} onClick={this.handleItemClick} />
          </Menu>
        </Grid>
        </Segment>
        <Menu pointing secondary className='main-menu'>
            <Menu.Item as={Link} to='home' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item name='about us' active={activeItem === 'about us'} onClick={this.handleItemClick} />
            <Menu.Item name='ministries' active={activeItem === 'ministries'} onClick={this.handleItemClick} />
            <Menu.Item name='sermons' active={activeItem === 'sermons'} onClick={this.handleItemClick} />
            <Menu.Item name='contact us' active={activeItem === 'contact us'} onClick={this.handleItemClick} />
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
