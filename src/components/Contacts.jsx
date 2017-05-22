const React = require('react');

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validation: {
                name: true,
                email: true,
                contactsMessage: true
            }
        }
        this.validateField = this.validateField.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    submitForm(event) {
        let json;
        let name = document.getElementsByName('name')[0];
        let email =  document.getElementsByName('email')[0];
        let message = document.getElementsByName('contactsMessage')[0];

        this.validateField(name);
        this.validateField(email);
        this.validateField(message);

        if(this.state.validation.name && this.state.validation.email &&
            this.state.validation.message) {
                let fields = {
                    name: name.value,
                    email: email.value,
                    contactsMessage: message.value
                }
                console.log(fields);
                json = JSON.stringify(fields);
                alert(json);
        } else {
            alert('Check all fields!');
        }
       
        event.preventDefault();
    }
    validateField(event) {
        let target, value;
        if (event.target) {
            target = event.target;
            value = target.value;
        } else {
            target = event;
            value = target.value;
        }
        let pattern = '';

        switch (target.name){
            case 'name': pattern = /^[a-zA-Z]+$/; break;
            case 'email': pattern = /^[a-zA-Z0-9._]+@+[a-zA-Z0-9._]+$/; break;
            case 'contactsMessage': pattern = /[\S\s]{20,}$/; break;
            default: return;
        }
        let newValidation = this.state.validation;
        newValidation[target.name] = pattern.test(value);
        
        this.setState({ validation: newValidation });
    }
    render() {
        let validation = {};
        if (!this.state.validation.name) {
            validation.name = <p className="contacts_error">Uncorrect name</p>
        } else {
            validation.name = '';
        }
        if (!this.state.validation.email) {
            validation.email = <p className="contacts_error">Uncorrect e-mail</p>
        } else {
            validation.email = '';
        }
        if (!this.state.validation.contactsMessage) {
            validation.contactsMessage = <p className="contacts_error">20 symbols is required</p>
        } else {
            validation.contactsMessage = '';
        }
        return (
        <div className="container-fluid no_padding" id="contacts">
            <div className="row no_margin">
                <div className="contacts" >
                    <div className="col-md-6 col-xs-12 col-sm-6 no_padding">
                        <div className="contacts_map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1270.4072348513298!2d30.45186204557817!3d50.44455635981426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce87a0bfa6d3%3A0x19327c76da170b91!2sIgnite!5e0!3m2!1suk!2sua!4v1495381576338"></iframe>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="contacts_content">
                           <div className="contacts_title">
                                <h2 className="сontacts_title_text">Keep In Touch</h2>
                                <div className="сontacts_decoration">
                                    <div className="сontacts_decoration_up"></div>
                                    <div className="сontacts_decoration_down"></div>
                                </div>
                           </div>
                            <div className="contacts_form">
                                <form onSubmit={this.submitForm}>
                                    <div>
                                        <input type="text" placeholder="Name" className="contacts_input_text" name="name" onChange={this.validateField}/>
                                        {validation.name}
                                    </div>
                                   <div>
                                        <input type="email" placeholder="Email" className="contacts_input_text" name="email" onChange={this.validateField} />
                                        {validation.email}
                                   </div>
                                    <div>
                                        <textarea placeholder="Message" className="contacts_message" name="contactsMessage" onChange={this.validateField}></textarea>
                                        {validation.contactsMessage}
                                    </div>
                                    <button type="submit" className="contacts_submit_btn">
                                        Send Request
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

module.exports = Contacts;