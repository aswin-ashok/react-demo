import React, { Fragment } from 'react'
import BootCarousel from '../Components/BootstrapComponents/BootCarousel';
import BootNavbar from '../Components/BootstrapComponents/BootNavbar';
import BootCards from '../Components/BootstrapComponents/BootCards';

const BootstrapPage = () => {
  return (
    <Fragment>
        <BootNavbar />
        <BootCarousel />
        <BootCards />
    </Fragment>
  )
}

export default BootstrapPage;
