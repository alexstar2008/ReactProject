const React = require('react');
var Scroll = require('react-scroll');

var Link = Scroll.Link;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

class Nav extends React.Component{
    componentDidMount(){

        Events.scrollEvent.register('begin', function(to, element) {
        });

        Events.scrollEvent.register('end', function(to, element) {
        });

        scrollSpy.update();
    }
    componentWillUnmount(){
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    render() {
        const Links =   <ul className="nav navbar-nav navbar-right ">
                            <li><Link  to="home" spy={true} smooth={true} duration={500}  className="nav_item" activeClass="active">Home</Link></li>
                            <li><Link  to="about" spy={true} smooth={true} duration={500} className="nav_item" offset={-100} activeClass="active">About</Link></li>
                            <li><Link  to="services" spy={true} smooth={true} duration={500} className="nav_item"  offset={-100} activeClass="active">Service</Link></li>
                            <li><Link  to="work" spy={true} smooth={true} duration={500} className="nav_item" offset={-50} activeClass="active">Work</Link></li>
                            <li><Link  to="facts" spy={true} smooth={true} duration={500} className="nav_item" offset={-100} activeClass="active">Testimonial</Link></li>
                            <li><Link  to="blog" spy={true} smooth={true} duration={500} className="nav_item" offset={-50} activeClass="active">Blog</Link></li>
                            <li><Link  to="team" spy={true} smooth={true} duration={500} className="nav_item" offset={-50}  activeClass="active" >Team</Link></li>
                            <li><Link to="contacts" spy={true} smooth={true} duration={500} className="nav_item" activeClass="active">Contact</Link></li>
                        </ul>
        return(
                <div className="navbar navbar-fixed-top " id="nav-panel" role="navigation">
                    <div className="container nav-container">
                        <div className="row">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><i className="fa fa-bars"></i></button>
                                <a className="navbar-brand" href="#homeLink"><img src="imgs/logo.png" alt="logo"/></a>
                            </div>
                            <div className="navbar-collapse collapse">
                                {Links}
                            </div>
                        </div>
                    </div>
                </div>  
        )
    }
}

module.exports = Nav;