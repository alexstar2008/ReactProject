let news = [];

const React = require('react');

const router = require('react-router');
let Router = router.Router;
let hashHistory = router.hashHistory;
let Link = router.Link;
let Route = router.Route;
let IndexRoute = router.IndexRoute;


let connect = require('react-redux').connect;
let bindActionCreators = require('redux').bindActionCreators;
const action = require('../actions/AppActions');



class NewsSingle extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let id = this.props.params.id;
        let news = this.props.news;
        let newsItem = news.filter((item) => { return item.id == id; })[0];
        return(
            <div>
                <div className="row">
                    <div className="col-xs-offset-1 col-xs-4">
                        <Link to='/' >
                            <button className='news_back_btn'> 
                                <i className="fa fa-arrow-left fa-3x" aria-hidden="true"></i>
                            </button>
                        </Link>
                    </div>
                    <div className="col-xs-2">
                        <div className="news_item_single_date">{newsItem.date}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
                        <div className="news_item_single_text">{newsItem.text}</div>
                    </div> 
                </div> 
            </div>
        );
    }
}

class NewsList extends React.Component{
    constructor(props) {
        super(props);
    }
    getDateText(text) {
        let date = new Date(text);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let newDate = `${date.getDate()} ${months[date.getMonth()]}`;
        return newDate;
    }
    render() {
        let amount = this.props.visible;
        let news = this.props.news;
        let itemsRender = [];
        if(news.length>0)
        for(let i=0;i < amount; i++){
            let item = news[i];
            let link = `/news/${item.id}`;
            itemsRender.push(
                    <div className="col-md-3 col-sm-6 col-xs-12" key={i}>
                        <div className="news_item">
                            <Link to={link} className="news_item_link">
                                <div className="news_item_img">
                                    <img src='/imgs/newsItem.png' alt="sample"/>
                                    <div className="news_item_date">
                                        {this.getDateText(item.date)}
                                    </div>
                                </div>
                                <div className="news_item_title">
                                   Amazing Blog Post
                                </div>
                            </Link>
                        </div>
                    </div>
             );
        };
        return (<div className="row">{ itemsRender }</div>);
                
    }
}

class News extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let btnMore = '';
        if(this.props.hasMore){
            btnMore = <button className="news_load_btn" onClick={this.props.changeVisible}>
                    <div className="news_load_btn_sign">+</div>
                    <div className="news_load_btn_text">load more</div>
                 </button>
        }
        return(
        <div>
            <div className="container">
                    {this.props.children}
            </div>
                {btnMore}
        </div>    
        );
    }
}

class NewsRouter extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
           <Router history={hashHistory}>
               <Route path='/' component={connect(mapStateToProps, matchDispatchToProps)(News)}>
                   <IndexRoute component={connect(mapStateToProps, matchDispatchToProps)(NewsList)} />
                   <Route path='news/:id' component={connect(mapStateToProps, matchDispatchToProps)(NewsSingle)} />
               </Route>
           </Router>
        );
    }
}

function mapStateToProps(state) {
    return {
        news: state.news,
        visible: state.visible,
        hasMore: state.hasMore
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        changeVisible: action.changeVisible
    },dispatch);
}

module.exports = NewsRouter;