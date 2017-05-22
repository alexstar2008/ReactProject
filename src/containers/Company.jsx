const React = require('react');
const router = require('react-router');
let Router = router.Router;
let hashHistory = router.hashHistory;
let Route = router.Route;
let IndexRoute = router.IndexRoute;
let Link = router.Link;

let Biography = require('../components/company/Biography.jsx');
let History = require('../components/company/History.jsx');
let Skills = require('../components/company/Skills.jsx');

class CompanyTitle extends React.Component {
    render() {
        return(
              <div className="company_title">
                <h2 className="company_title_text">about our company</h2>
                <div className="company_decoration">
                    <div className="company_decoration_up"></div>
                    <div className="company_decoration_down"></div>
                </div>
             </div>
        );
    }
}
class CompanyLink extends React.Component {
    constructor() {
        super();
        this.state = {
            current:2
        }
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(event){
        let target = event.target;
        let links = document.getElementsByClassName('company_nav_link');

        links[this.state.current].classList.remove('company_nav_link_active');
        target.classList.add('company_nav_link_active');

        this.setState({ current: target.dataset.id });
    }
    render() {
        return(
            <ul className="company_nav" >
                <li><Link to='/company/history' className="company_nav_link" data-id="0" onClick={this.clickHandler}>our history</Link></li>                
                <li><Link to='/company/biography' className="company_nav_link" data-id="1" onClick={this.clickHandler}>our biography</Link></li>
                <li><Link to='/company/skills' className="company_nav_link company_nav_link_active" data-id="2" onClick={this.clickHandler}>our skills</Link></li>
            </ul>    
        );
    }
}



class Company extends React.Component {
    render() {
        return(
            <div className="container-fluid no_padding " >
                <div className="company" id="about">
                    <div className="row no_margin">
                        <div className="col-md-6 col-sm-12 col-xs-12 " >
                            <div className="company_img">
                                <img src="imgs/company.png" alt="company" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="company_content">
                              <CompanyTitle />
                              <CompanyLink />
                              <div>
                                  {this.props.children}
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            
        );
    }
}

class CompanyRouter extends React.Component {
    render() {
        return(
            <Router history={hashHistory}>
                <Route path='/' component={Company}>
                   <Route path='company/history' component={History} />
                   <Route path='company/biography' component={Biography} />
                   <Route path='company/skills' component={Skills} />
                   <IndexRoute component={Skills} />
                </Route>
            </Router>    
        );
    }
}

module.exports = CompanyRouter;