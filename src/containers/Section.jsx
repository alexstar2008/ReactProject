const React = require('react');

class Section extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let style = {
            backgroundColor: this.props.backColor ? this.props.backColor : '#fff'
        }
        return (
        <div className="section" id={this.props.id} style={style}>
            <div className="section_title">
                <h2 className="section_title_text">{this.props.title}</h2>   
                <div className="section_decoration">
                    <div className="section_decoration_up"></div>
                    <div className="section_decoration_down"></div>
                </div>
            </div>
            <div className="section_content">
                {this.props.children}
            </div>
        </div>    
        );
    }

}

module.exports = Section;