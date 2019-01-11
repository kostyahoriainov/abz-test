import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import Banner from './banner';
import AboutMe from './about-me';
import Relationships from './relationships';
import Requrements from './requrements';
import UsersContainer from '../containers/UsersContainer';
import Footer from './footer';
import SideMenuContainer from '../containers/SideMenuContainer'
import SignUpContainer from '../containers/SignUpContainer';

class App extends React.Component {

  state = {
    isMenu: false
  }

  toggleMenu = () => {
    this.setState(({isMenu}) => ({
      isMenu: !isMenu
    }))
  }

  render() {
    const sideMenu = this.state.isMenu && <SideMenuContainer toggleMenu={this.toggleMenu}/>
    return (
      <>
      <HeaderContainer toggleMenu={this.toggleMenu}/>
  
      <Banner/>
  
      <AboutMe />
  
      <Relationships />
  
      <Requrements />
  
      <UsersContainer />
  
      <SignUpContainer />
  
      <Footer />

      { sideMenu }
  
    </>
    )
  }
};


export default App;
