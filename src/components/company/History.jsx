const React = require('react');

class History extends React.Component {
    render() {
        let list = [
            'Excepteur sint occaecat sint.', 'Excepteur sint occaecat sint.', 'Excepteur sint occaecat sint.',
            'Excepteur sint occaecat sint.', 'Excepteur sint occaecat sint.', 'Excepteur sint occaecat sint.', 'Excepteur sint occaecat sint.',
            'Excepteur sint occaecat sint.'
        ];
        let listRender = list.map((text,index) => {
            return <li key={index} className='company_history_list_item'>
                    <div className="company_history_list_icon">
                        <i className="fa fa-check" aria-hidden="true"></i>
                    </div>
                    <div className="company_history_list_text">
                        {text}
                    </div>
                   </li>;
        });
        return(
            <div>
                <p className="company_history_text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                    sed do eiusmod tempor incid idunt ut labore et dolore magna aliqua.
                    Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <ul className="company_history_list">
                    {listRender}
                </ul>
            </div>    
        );
    }
}

module.exports = History;