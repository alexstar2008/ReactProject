const React = require('react');
var Scroll = require('react-scroll');

var Link = Scroll.Link;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

class Footer extends React.Component {
    componentDidMount() {

        Events.scrollEvent.register('begin', function (to, element) {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function (to, element) {
            console.log("end", arguments);
        });

        scrollSpy.update();
    }
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    render() {

        return(
          <footer>
              <div className="text-center">
                <div className="footer_content inline_block">Copyright 2015 <span className="text_green">theHam</span> | All Rights Reserved</div>
                <div className="inline_block">
                     <Link activeClass="active" to="home" spy={true} smooth={true} duration={500}>
                                <button className="footer_arrow_up "><i className="fa fa-angle-up" aria-hidden="true"></i></button>
                    </Link>
                </div>
              </div>
          </footer>  
        );
    }
}

module.exports = Footer;