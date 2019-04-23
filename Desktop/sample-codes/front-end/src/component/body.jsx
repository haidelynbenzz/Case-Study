import React, {Component} from 'react';
import '../css/body.css';
import axios from 'axios';

class Body extends Component{

    constructor(){
        super();
        this.state = {
            foodItemName: '',
            unitPrice: '',
            inStock: ''
        };
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDeafault();
        const{ foodItemName, unitPrice, inStock } = this.state;
        axios.post('http://localhost:8080/restsample01/rest/AddFoodItem', {foodItemName, unitPrice, inStock})
        .then((result) => {
            console.log(result)
        });
    }
render(){
            
    const{ foodItemName, unitPrice, inStock } = this.state;
    return(

    <div>
        <div className="main-content">
			<div className="title">
				DASHBOARD
			</div>
			<div className="main">
				<div className="widget">
					<div className="title">Add Food Item</div>
                    <form onSubmit={this.onSubmit}>
                        <input name="foodItemName" value={foodItemName} placeholder="Food Name" onChange={this.onChange}/>
                        <input name="unitPrice" value={unitPrice} placeholder="Unit Price" onChange={this.onChange}/>
                        {/* <input name="inStock" value={inStock} placeholder="Stock" onChange={this.onChange} /> */}
                        
                        <select name="inStock" value={inStock} id="inStock" onChange={this.onChange}>
                        <option disabled selected>Choose</option>
                        <option>Full Inventory</option>
                        <option>Limited Stock</option>
                        <option>Out of Stock</option>
                    </select>
                     <button className="submit" type="submit">List Food Items</button>
                     <button className="cancel" type="clear">Cancel</button>
                    </form>
                   
                   
				</div>

            
                
			    </div>
            </div>
        </div>
    );
            }
        }
export default Body;