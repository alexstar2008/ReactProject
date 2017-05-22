const React = require('react');

var Scroll = require('react-scroll');

var Link = Scroll.Link;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

class Slider extends React.Component{

    constructor() {
        super();
        this.sliders = [
            { src: 'imgs/slider.png', title: 'KPI', supTitle: 'Fict', subTitle: 'TC' },
            { src: 'imgs/slider.png', title: 'KPI', supTitle: 'Burlakov', subTitle: 'TC' },
            { src: 'imgs/slider.png', title: 'KPI', supTitle: 'Pasko', subTitle: 'TC' }
        ];
        this.state={
            current: 0
        }
        this.moveLeft = this.moveLeft.bind(this);
        this.moveRight = this.moveRight.bind(this);
        this.waitTimer = this.waitTimer.bind(this);
    }
    componentWillMount() {
        this.setState({ timer: setInterval(this.moveRight, 3000) });
    }
    componentDidMount() {

        Events.scrollEvent.register('begin', function (to, element) {
        });

        Events.scrollEvent.register('end', function (to, element) {
        });

        scrollSpy.update();
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    waitTimer() {
        clearInterval(this.state.timer);
        this.setState({ timer: null });
        setTimeout(() => {
            this.setState({ timer: setInterval(this.moveRight, 3000) });
        }, 2000);
    }   
    moveLeft() {
        let length = this.sliders.length;
        if (this.state.current == 0) {
            this.setState({ current: (length - 1) });
        } else {
            this.setState({ current: (this.state.current-1) });
        }
    }
    moveRight() {
        let length = this.sliders.length;
        if (this.state.current == (length-1)) {
            this.setState({ current: 0 });
        } else {
            this.setState({ current: (this.state.current + 1) });
        }
    }
    render() {
        let item = this.sliders[this.state.current];
        let style = {
            backgroundImage: 'url(' + item.src + ')',
        }
        return (
        <div className="container-fluid no_padding">
            <div className="slider" style={style}>
            <div className="row no_margin">
                <div className="col-md-1 col-md-offset-1 col-xs-2">
                    <button className="slider_arrow arrow_left" onClick={() => { this.waitTimer(); this.moveLeft(); }}>
                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                    </button>
                </div>
                <div className="col-md-8 col-xs-8">
                    <div className="slider_content" >
                        <h2 className="slider_sup_title">{item.supTitle}</h2>
                        <h1 className="slider_title">{item.title}</h1>
                        <h3 className="slider_sub_title">{item.subTitle}</h3>
                        <div className="slider_btns">
                            <Link activeClass="active" to="work" spy={true} smooth={true}  duration={500} offset={-50} >
                                <button className="slider_green_btn">explore now</button>
                            </Link>
                            <Link activeClass="active" to="contacts" spy={true} smooth={true} duration={500}>
                                <button className="slider_blue_btn">purchase now</button>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="col-md-1 col-xs-2">
                    <button className="slider_arrow arrow_right" onClick={() => { this.waitTimer(); this.moveRight(); }}>
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
            </div>
        </div>
        );
    }
}

module.exports = Slider;