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
import Modal from './modal';

class App extends React.Component {

  state = {
    isMenu: false,
    isModal: false
  }

  toggleMenu = () => {
    this.setState(({isMenu}) => ({
      isMenu: !isMenu
    }))
  }

  toggleModal = () => {
    this.setState(({isModal}) => ({
      isModal: !isModal
    }))
  }

  render() {
    const sideMenu = this.state.isMenu && <SideMenuContainer toggleMenu={this.toggleMenu}/>
    const modal = this.state.isModal && <Modal toggleModal={this.toggleModal}/>
    return (
      <>
      <HeaderContainer toggleMenu={this.toggleMenu}/>
  
      <Banner/>
  
      <AboutMe />
  
      <Relationships />
  
      <Requrements />
  
      <UsersContainer />
  
      <SignUpContainer  toggleModal={this.toggleModal}/>
  
      <Footer />

      { sideMenu }

      { modal }
  
    </>
    )
  }
};


export default App;
