import React, {Component} from 'react';
import '../css/home.css';
import '../css/body.css';
import '../css/footer.css';


import gallery from '../img/catering.png';

class View extends Component{

    render(){
        return(

    <div>

    <body>
        <div className="main-content">
			<div className="title">
				NEW FEATURES
			</div>
        </div>
        <div className="container">
        <img src={gallery} className="gallery"/>
        <div className="desc">Add Description <br/>ksjdhfskjdhflkdsfhaksj<br/>hskjdfsadasdfsadfd</div>
    </div>

    <div className="container">
        <img src={gallery} className="gallery"/>
        <div className="desc">Add Description <br/>ksjdhfskjdhflkdsfhaksj<br/>hskjdfsadasdfsadfd</div>
    </div>
    </body>

    </div>
        );
    }
}
export default View;