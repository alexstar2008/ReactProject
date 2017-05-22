const React = require('react');

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class Skills extends React.Component {
    constructor() {
        super();
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            components: []
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll(event) {
        let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let scroll = document.documentElement.scrollTop || document.body.scrollTop;
        let scrollTop = scroll + windowHeight;
        let position = document.getElementsByClassName('company')[0].offsetTop;
        let offsetInner = document.getElementsByClassName('skills')[0].offsetTop;
        if (scrollTop > (position+offsetInner)) {
            this.setState({
                components: [
                    { name: 'user interface', color: '#9c5da5', width: '72%' },
                    { name: 'web design', color: '#11b0de', width: '85%' },
                    { name: 'wordpress', color: '#d67f7f', width: '66%' },
                    { name: 'html & css', color: '#20bc9d', width: '90%' },
                    { name: 'app design', color: '#bb8a36', width: '84%' }
                ]
            });
            window.removeEventListener('scroll', this.handleScroll);
        }
    }

    render() {
        let renderItems = this.state.components.map((item,i) => {
            let style = {
                backgroundColor: item.color,
                width: item.width
            }
            return (
                    <div className="skills_item_wrapper"><div style={style} className="skills_item" key={i }>{item.name}</div></div>
            );
        });
        return(
        <div className="skills">
                  <ReactCSSTransitionGroup transitionName="animation" transitionEnterTimeout={3000}>
                      {renderItems}
                  </ReactCSSTransitionGroup>
        </div>
            
        );
    }
}

module.exports = Skills;