const React = require('react');

class PortfolioWorks extends React.Component {
    constructor(props){
        super(props);
        this.showDesc = this.showDesc.bind(this);
        this.hideDesc = this.hideDesc.bind(this);
    }
    showDesc(event) {
        let target = event.currentTarget;

        let div = document.createElement('div');
        let title = document.createElement('div');
        let type = document.createElement('div');
        let iconsWrapper = document.createElement('div');
        let iconsFirst = document.createElement('div');
        let iconsSecond = document.createElement('div');
        title.classList.add('filter_gen_div_title');
        title.innerText = target.dataset.title;

        type.classList.add('filter_gen_div_type');
        type.innerText = target.dataset.type;

        iconsFirst.classList.add('fitler_link');
        iconsSecond.classList.add('filter_search');

        iconsWrapper.appendChild(iconsFirst);
        iconsWrapper.appendChild(iconsSecond);
        iconsWrapper.classList.add('filter_wrapper');

        div.classList.add('filter_gen_div');
        div.appendChild(iconsWrapper);
        div.appendChild(title);
        div.appendChild(type);

        target.appendChild(div);
    }
    hideDesc(event) {
        let target = event.currentTarget;
        target.removeChild(target.querySelector('.filter_gen_div'));
    }
    render() {
        let works = [
            {src:'imgs/works.png',title:'creative design',type:'web design'},
            {src:'imgs/worksGreen.png',title:'creative design',type:'graphic design'},
            {src:'imgs/works.png',title:'creative design',type:'graphic design'},
            {src:'imgs/worksGreen.png',title:'creative design',type:'graphic design'},
            {src:'imgs/works.png',title:'creative design',type:'web design'},
            {src:'imgs/worksGreen.png',title:'creative design',type:'landing pages'},
            {src:'imgs/works.png',title:'creative design',type:'landing pages'},
            {src:'imgs/worksGreen.png',title:'creative design',type:'landing pages'},
            {src:'imgs/works.png',title:'creative design',type:'wordpress'},
            {src:'imgs/worksGreen.png',title:'creative design',type:'wordpress'},
            {src:'imgs/works.png',title:'creative design',type:'wordpress'},
            {src:'imgs/worksGreen.png',title:'creative design',type:'wordpress'},
        ];
        let type = this.props.filterType.toLowerCase();
        let worksRender = works.map((item,index)=>{
            if(item.type == type || type == 'all'){
                return <div className="col-md-3 col-sm-4 col-xs-6 no_padding" key={index}>
                        <div className="filter_item" data-title={item.title} 
                             data-type={item.type} onMouseEnter={this.showDesc} onMouseLeave={this.hideDesc}>
                            <img src={item.src} alt={item.title}/>
                        </div>
                       </div>
            }
        });
        return (
            <div>
            { worksRender }
            </div>
        );
    }
}

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterType:'All'
        }
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(event) {
        let target = event.target;
        this.setState({ filterType: target.innerText });
    }
    render() {
        let filterList = ['All', 'Graphic Design', 'Web Design', 'Landing Pages', 'Wordpress'];
        let filterListRender = filterList.map((text,index) => {
            if (text == this.state.filterType) {
                return <li className="filter_list_item filter_list_item_active" onClick={this.clickHandler} key={index}>{text}</li>
            } else {
                return <li className="filter_list_item" onClick={this.clickHandler} key={index}>{text}</li>
            }
        });
        return(
        <div>
            <ul className="filter_list">
                {filterListRender}
            </ul>
            <div className="container">
                <div className="row">
                    <PortfolioWorks filterType={this.state.filterType} />
                </div>
            </div>
        </div>    
            
        );
    }
}

module.exports = Portfolio;