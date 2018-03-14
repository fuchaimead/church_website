import React, { Component } from 'react';
import { Menu, Segment, Grid, Header, Dropdown } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import EpiscopalShield from '../images/EpiscopalShieldWeb.jpg';

class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='Logout'
            onClick={ () => dispatch(handleLogout(history)) }
          />
        </Menu.Menu>
      );
    }
  }


  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Segment basic> 
        <Grid className='secondary-menu'>
          <Link to='/'> 
          <img src={ EpiscopalShield } alt='episcopal shield' />
          </Link>
          <Header as='h1'>Saint John's Episcopal Church</Header>
          <Menu secondary>
            <Menu.Item as={ Link } to='/annoucements' name='annoucements' active={ activeItem === 'annoucements' } onClick={ this.handleItemClick } />
            <Menu.Item as={ Link } to='/resources' name='resources' active={ activeItem === 'resources' } onClick={ this.handleItemClick } />
            <Menu.Item as={ Link } to='/membership' name='membership' active={ activeItem === 'membership' } onClick={ this.handleItemClick } />
            { this.rightNavs() }
          </Menu>
        </Grid>
        </Segment>
        <Menu secondary className='main-menu'>
            <Menu.Item as={ Link } to='/' name='home' active={ activeItem === 'home' } onClick={ this.handleItemClick } />
            <Dropdown text='About Us' pointing className='link item'>
              <Dropdown.Menu>
                <Dropdown.Item as={ Link } to='/about'>
                  About Us
                </Dropdown.Item>
                <Dropdown.Item as={ Link } to='/episcopal-church'>
                  Episcopal Church
                </Dropdown.Item>  
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown text='Ministries' pointing className='link item'>
              <Dropdown.Menu>
              <Dropdown.Item as={ Link } to='/daughters-of-the-king'>
                Daughters of the King
              </Dropdown.Item>
              <Dropdown.Item as={ Link } to='/bible-studies'>
                Bible Study
              </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item as={ Link } to='/sermons' name='sermons' active={ activeItem === 'sermons' } onClick={ this.handleItemClick } />
            <Menu.Item as={ Link } to='/contact' name='contact us' active={ activeItem === 'contact us' } onClick={ this.handleItemClick } />
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
