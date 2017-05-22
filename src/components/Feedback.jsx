const React = require('react');


class MessagesPanel extends React.Component{
    constructor(props) {
        super(props);
        this.removeComment = this.removeComment.bind(this);
    }
    removeComment(event) {
        const id = event.target.dataset.id;
        this.props.removeComment(id);
    }
    render() {
        let messagesRender = this.props.messages.map((item,index) => {
            return (
              <div className="row" key={index}>
                <div className="col-md-12">
                    <div className="feedback_item">
                           <div className="panel panel-default">
                             <div className="panel-heading">
                               <div className="feedback_item_title">{item.title}</div>
                               <div className="feedback_item_cross" data-id={item.id} onClick={this.removeComment}>x</div>
                             </div>
                             <div className="panel-body">
                                 <div className="feedback_item_message">
                                     {item.message}
                                 </div>
                             </div>
                           </div>
                    </div>
                </div>
              </div>
              );
              
        });
        return(
            <div className="container no_padding">
                  <div className="feedback_panel_wrapper">
                   {messagesRender}
                </div>
          
            </div>    
        );
    }
}

class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [{ id: 1, title: 'test', message: 'hello test' }],
            errors:''
        }
        this.addComment = this.addComment.bind(this);
        this.removeComment = this.removeComment.bind(this);
    }
    addComment(event) {
        let title = document.getElementsByName('title')[0].value;
        let message = document.getElementsByName('message')[0].value;
        let messages = this.state.messages;
        let id = (messages.length+1);
        if (!message.length || !title.length) {
            this.setState({ errors:true });
            return;
        } else {
            document.getElementsByName('title')[0].value = '';
            document.getElementsByName('message')[0].value = '';
            messages.push({ id, title, message });
            this.setState({ messages, errors: false });
        }
       
    }
    removeComment(id) {
        let messages = this.state.messages.filter((item) => {
            return item.id != id;
        });
        this.setState({ messages });
    }

    render() {
        let errors = this.state.errors ? <h3 className="text-danger">Fields should not be empty!</h3> : '';
        return(
            <div>
                <MessagesPanel messages={this.state.messages} removeComment={this.removeComment}  />
                <div className="container">
                    <div className="row">
                        <div className="col-md-offset-1 col-md-6">
                            <div>
                                <input type="text" name="title" className="feedback_input_titles" placeholder="Title" />
                            </div>
                             <div className="feedback_message">
                                <textarea type="text" name="message" className="feedback_input_message" placeholder="Message" ></textarea>
                             </div>
                           {errors}
                        </div>
                        <div className="col-md-5">
                            <div className="message_btn_title">Leave us a message</div>
                               <button className="message_btn_add" onClick={this.addComment}>
                                    <div className="message_btn_add_sign">+</div>
                                    <div className="message_btn_add_text">add comment</div>
                               </button>
                        </div>
                    </div>
                </div>
            </div>    
        );
    }
}
module.exports = Feedback;