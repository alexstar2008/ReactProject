const React = require('react');
const router = require('react-router');

let Router = router.Router;
let hashHistory = router.hashHistory;
let Route = router.Route;
let IndexRoute = router.IndexRoute;
let Link = router.Link;

class Content extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        let id = this.props.params.id ? this.props.params.id : 1;
        let contents = [
            { id: 1, src: 'imgs/service.png', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' },
            { id: 2, src: 'imgs/serviceGreen.png', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' },
            { id: 3, src: 'imgs/service.png', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' },
            { id: 4, src: 'imgs/serviceGreen.png', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' },
            { id: 5, src: 'imgs/service.png', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' },
            { id: 6, src: 'imgs/serviceGreen.png', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ' },
        ];
        let content = contents.filter((item) => {
            return item.id == id;
        })[0];
        return (
            <div className='services_content'>
                <div className="col-md-2 col-sm-3  no_padding ">
                    <div className="services_content_img">
                        <img src={content.src} alt={content.src} />
                    </div>
                </div>
                <div className="col-md-10 col-sm-9">
                    <p className="services_content_text">
                        {content.text}
                    </p>
                </div>  
            </div>
        );
    }
}

class Services extends React.Component{
    constructor() {
        super();
        this.state = {
            activeId:1
        }
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(event) {
        let target = event.target;
        this.setState({ activeId: target.dataset.id });
    }
    render() {
        let links = [{id:1,title:'Web Design'},
                    { id: 2, title: 'Graphic Design' },
                    { id: 3, title: 'Online Supporrt'},
                    { id: 4, title: 'App Design'},
                    { id: 5, title: 'Online Marketing' },
                    { id: 6, title: 'Seo Service' }
        ];
        let linksRender = links.map((item) => {
            let path = `/service/${item.id}`;
            let cssClass = '';
            cssClass = item.id == this.state.activeId ? 'services_link services_active' : 'services_link';

            return  <div className="col-md-2 col-sm-4 col-xs-6 no_padding" key={item.id}><Link to={path} className={cssClass} onClick={this.clickHandler} data-id={item.id}>{item.title}</Link></div>
        });
        return(
        <div className="container" id="services">
              <div className="row">
                        {linksRender}
              </div>
              <div className="row">
                        {this.props.children}
              </div>
        </div>
       );
    }
}

class ServicesRouter extends React.Component{
    render(){
        return(
          <Router history={hashHistory}>
              <Route path='/' component={Services}>
                  <IndexRoute component={Content} />
                  <Route path='service/:id' component={Content} />
              </Route>
          </Router> 
            
            
        );
    }
}

module.exports = ServicesRouter;