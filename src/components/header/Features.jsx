const React = require('react');

class Features extends React.Component {

    render() {
        let features = [
           { title: 'personalized options', src: { "width": "58px", "height": "97px", "backgroundPosition": "-235px -82px", "backgroundImage": "url(imgs/icons.png)" } },
           { title: 'fully customizable', src: { "width": "93px", "height": "75px", "backgroundPosition": "-114px -5px", "backgroundImage": "url(imgs/icons.png)" } },
           { title: 'unlimited support', src: { "width": "60px", "height": "96px", "backgroundPosition": "-114px -90px", "backgroundImage": "url(imgs/icons.png)" } },
           { title: 'responsive all device', src: { "width": "99px", "height": "76px", "backgroundPosition": "-5px -5px", "backgroundImage": "url(imgs/icons.png)" } },
        ];


        let featuresRender = features.map((item, index) => {
            let itemRender = '';
            if (index % 2 == 0) {
                itemRender =
                    <div className="col-md-3 col-sm-6 col-xs-12 no_padding" key={index}>
                        <div className="features_item_black">
                            <div className="features_item_icon" style={item.src}>
                            </div>
                            <div className="features_item_title_green">
                                {item.title}
                            </div>
                        </div>
                    </div>
            } else {
                itemRender =
                    <div className="col-md-3 col-sm-6 col-xs-12 no_padding" key={index}>
                        <div className="features_item_green">
                              <div className="features_item_icon" style={item.src}>
                              </div>
                            <div className="features_item_title_white">{item.title}
                            </div>
                        </div>
                    </div>
            }
            return itemRender;
        });

        return (
            <div className="container-fluid  no_padding">
                <div className="row no_margin">
                    {featuresRender}
                </div>
            </div>
        );
    }
}

module.exports = Features;