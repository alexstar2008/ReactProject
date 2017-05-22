const React = require('react');
import CountUp, { startAnimation } from 'react-countup';

class Facts extends React.Component {
    constructor(){
        super();
        this.state={
            animation:false
        }
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll(event){
        let windowHeight =  window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
        let scroll = document.documentElement.scrollTop || document.body.scrollTop;
        let scrollTop = scroll + windowHeight;
        let position = document.getElementsByClassName('facts')[0].offsetTop;
        let offsetInner = document.getElementsByClassName('facts_item_amount')[0].offsetTop/2;
        if(scrollTop>(position+offsetInner)){
            this.setState({animation:true});
            window.removeEventListener('scroll', this.handleScroll);
        }    
    }
    render() {
        let facts = [
            { title: 'Works', amount: 4609, icons: 'fa fa-briefcase ' },
            { title: 'Customers', amount: 3470, icons: 'fa  fa-user' },
            { title: 'Purchase', amount: 2908, icons: 'fa  fa-shopping-cart    ' },
            { title: 'Office', amount: 1908, icons: 'fa  fa-map-marker' },
        ];
        let factsRender = facts.map((item, index) => {
            let itemRender='';
            let counterAnimation ='';
            if(this.state.animation){
                counterAnimation = <CountUp start={0} end={item.amount} duration={3} />
            }
            if (index % 2 != 0) {
                itemRender =
                    <div className="col-md-3 col-sm-6 col-xs-12 no_padding" key={index}>
                        <div className="facts_item_black">
                            <div className="facts_item_circle_outer_green">
                                <div className="facts_item_circle_inner_green">
                                    <i className={item.icons} aria-hidden="true"></i>
                                </div>
                            </div>
                            <h3 className="facts_item_amount">
                                {counterAnimation}
                            </h3>
                            <div className="facts_item_title_green">{item.title}</div>
                        </div>
                    </div>
            } else {
                itemRender =
                    <div className="col-md-3 col-sm-6 col-xs-12 no_padding" key={index}>
                        <div className="facts_item_green">
                            <div className="facts_item_circle_outer_black">
                                <div className="facts_item_circle_inner_black">
                                    <i className={item.icons} aria-hidden="true"></i>
                                </div>
                            </div>
                            <h3 className="facts_item_amount">{counterAnimation}</h3>
                            <div className="facts_item_title_black">{item.title}</div>
                        </div>
                    </div>
            }
            return itemRender;
        });
        return (
            <div className="container-fluid">
                <div className="row facts" id="facts">
                    {factsRender}
                </div>
            </div>    
        );
    }
}
module.exports = Facts;