const React = require('react');

const Features = require('../components/header/Features.jsx');
const Slider = require('../components/header/Slider.jsx');

class Header extends React.Component {
    render() {
        return(
         <div className="header_wrapper" id="home">
             <Slider/>
             <Features />
         </div>  
       );
    }
}
module.exports = Header;