import React, { Component } from 'react';
import Toolbar from '../../components/Navigation/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer';
import classes from './Layout.module.css';

class Layout extends Component {
  state = {
  showSideDrawer: false,
  }

  handleSideDrawerClose = () => {
    this.setState({ showSideDrawer: false })
  };

  toggleSideDrawer = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer }
    });
  };

  render() {
   return (
    <>
       <Toolbar drawerToggleClicked={this.toggleSideDrawer}/>
       <SideDrawer
         show={this.state.showSideDrawer}
         closed={this.handleSideDrawerClose} />
      <main className={classes.Content}>
        {this.props.children}
      </main>
    </>
  ) 
  }
}

export default Layout;