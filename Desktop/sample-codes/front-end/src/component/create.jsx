import React, {Component} from 'react';
import '../css/body.css';
import axios from 'axios';

class Create extends Component{

    constructor(){
        super();

        this.state = {
            FoodItems: [],
            foodName: {
                foodItemName: '',
                unitPrice: '',
                inStock: ''
            }
        };

    }

    componentDidMount(){
        axios.get('http://localhost:8080/restsample01/rest/AddFoodItem')
        .then(res => {
            const FoodItems = res.data;
            this.setState({ FoodItems });
        })
    }
    handleChange = e => {
        this.setState({
            foodName: e.target.value
        });
    }
    handleSubmit = e => {
        e.preventDefault();
        
        const foodName = {
            foodName: this.state.foodItemName,
            foodName: this.state.unitPrice,
            foodName: this.state.inStock
        }

        axios.post('http://localhost:8080/restsample01/rest/AddFoodItem', { foodName })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })

    }
    
        
render(){
            

    return(

    <div>
        <div className="main-content">
			<div className="title">
				DASHBOARD
			</div>
			<div className="main">
				<div className="widget">
					<div className="title">Add Food Item</div>
                    <form onSubmit={this.handleSubmit}>
                        <input name="foodItemName" placeholder="Food Name" onChange={this.handleChange}/>
                        <input name="unitPrice" placeholder="Unit Price" onChange={this.handleChange}/>
                        {/* <input name="inStock" value={inStock} placeholder="Stock" onChange={this.onChange} /> */}
                        
                        <select name="inStock" id="inStock" onChange={this.handleChange}>
                        <option disabled selected>Choose</option>
                        <option>Full Inventory</option>
                        <option>Limited Stock</option>
                        <option>Out of Stock</option>
                    </select>
                    <br/>
                    <button type="submit" className="submit" onSubmit={this.onSubmit}>ADD</button>
                    <table>
                        <tbody>
                            <tr className="add-food-row">
                                <th className="add-table-cell">ID</th>
                                <th className="add-table-cell">FOOD ITEM NAME</th>
                                <th className="add-table-cell">UNIT PRICE</th>
                                <th className="add-table-cell">STOCK STATUS</th>

                            </tr>
                            <tr className="add-food-row">
                                <th className='add-food-cell'>{ this.state.FoodItems.map(FoodItem => <li>{FoodItem.id}</li>)}</th>
                            
                                <th className='add-food-cell'>{ this.state.FoodItems.map(FoodItem => <li>{FoodItem.foodItemName}</li>)}</th>
                                <th className='add-food-cell'>{ this.state.FoodItems.map(FoodItem => <li>{FoodItem.unitPrice}</li>)}</th>
                                <th className='add-food-cell'>{ this.state.FoodItems.map(FoodItem => <li>{FoodItem.inStock}</li>)}</th>
                            </tr>
     
                        </tbody>
                    </table>
                    </form>
				    </div>
			    </div>
            </div>
        </div>
        );
    }
}


export default Create;