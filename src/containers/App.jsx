const React = require('react');

const Nav = require('../components/Nav.jsx');
const Footer = require('../components/Footer.jsx');
const Section = require('./Section.jsx');
const ServicesRouter = require('../components/Services.jsx');
const CompanyRouter = require('./Company.jsx');
const Portfolio = require('../components/Portfolio.jsx');
const Team = require('../components/Team.jsx');
const Facts = require('../components/Facts.jsx');
const News = require('../components/News.jsx');
const Feedback = require('../components/Feedback.jsx');
const Contacts = require('../components/Contacts.jsx');
const Header = require('./Header.jsx');

class App extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Nav />
                <Header />
                <Section title={'Our Services'} id='services'>
                    <ServicesRouter />
                </Section>
                <CompanyRouter />
                <Section title={'Our Amazing Work'} id="work" backColor="#f8fcfe">
                    <Portfolio />
                </Section>
                <Section title={'Meet our Team'} id="team">
                    <Team />
                </Section>
                <Facts />
                <Section title={'Breaking News'} id="blog">
                    <News />
                </Section>
                <Section title={'Feedback'} backColor="#f8fcfe">
                    <Feedback / >
                </Section>
                <Contacts />
                <Footer />
           </div>

        );


    }
}

module.exports = App;