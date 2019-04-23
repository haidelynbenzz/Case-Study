import React, {Component} from 'react';
import '../css/home.css';
import '../css/body.css';
import '../css/footer.css';
import axios from 'axios';

import gallery from '../img/catering.png';

class View extends Component{

    state = {
        foodItems:[]
    }

    componentDidMount(){
        axios.get('http://localhost:8080/restsample01/rest/AddFoodItem')
        .then(res => {
            const foodItems = res.data;
            this.setState({foodItems});
        })
    }
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

    <ul>
    { this.state.foodItems.map(foodItem => <li>{foodItem.foodItemName}</li>)}
    </ul>
    </body>

    </div>
        );
    }
}
export default View;