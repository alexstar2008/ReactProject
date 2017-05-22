const React = require('react');


class Team extends React.Component {
    constructor() {
        super();
        this.state = {
            team:[{id:1, name: 'Ai Masum', role: 'Founder', src: 'imgs/teamPhotoGrey.png', socials: { facebook: '#', twitter: '#', skype: '#', vibeo: '#' },hover:false },
                    {id:2, name: 'Mis Liza', role: 'UX Designer', src: 'imgs/teamPhoto.png', socials: { facebook: '#', twitter: '#', skype: '#', vibeo: '#' }, hover: false },
        {id:3, name: 'Hasan Mahmud', role: 'Web Designer', src: 'imgs/teamPhotoGrey.png', socials: { facebook: '#', twitter: '#', skype: '#', vibeo: '#' }, hover: false },
        {id:4, name: 'Afifa  Jannat', role: 'Web Designer', src: 'imgs/teamPhoto.png', socials: { facebook: '#', twitter: '#', skype: '#', vimeo: '#' }, hover: false }
            ]
        }

        this.togglePlus = this.togglePlus.bind(this);
    }
    togglePlus(event) {

        let id = event.currentTarget.dataset.id;
        console.log(id);
        let newTeam = this.state.team.map((item) => {
            if (item.id == id) {
                item.hover = !item.hover;
            }
            return item;
        });
        this.setState({ team: newTeam });
    }
    render() {
        let team = this.state.team;
        let teamRender = team.map((item,index) => {
            let hover = '';
            if (item.hover) {
                hover = <div className="team_member_img_hover" key={`${index}` }>
                            <div className="outer_circle">
                                <div className="circle">
                                    <i className="fa fa-plus fa-2x" aria-hidden="true"></i>
                                </div>
                            </div>
                    </div>
            }
            return <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
                <div className="team_member" data-id={item.id} onMouseEnter={this.togglePlus} onMouseLeave={this.togglePlus}>
                    <div className="team_member_img">
                        <img src={item.src} alt={item.title} />
                        {hover}
                    </div>
                    <div className="team_member_info">
                        <div className="team_member_info_name">{item.name}</div>
                        <div className="team_member_info_role">{item.role}</div>
                    </div>
                    <div className="team_member_socials">
                        <a href={item.socials.facebook} className="team_member_socials_item"><i className="fa fa-facebook " aria-hidden="true"></i></a>
                        <a href={item.socials.twitter} className="team_member_socials_item"><i className="fa fa-twitter " aria-hidden="true"></i></a>
                        <a href={item.socials.skype} className="team_member_socials_item"><i className="fa fa-skype " aria-hidden="true"></i></a>
                        <a href={item.socials.vibeo} className="team_member_socials_item"><i className="fa fa-vimeo " aria-hidden="true"></i></a>
                    </div>
                       
                </div>
            </div>
        });
        return (
            <div className="container"> 
                <div className="row">
                    {teamRender}
                </div>
            </div>
        );
    }

}

module.exports = Team;