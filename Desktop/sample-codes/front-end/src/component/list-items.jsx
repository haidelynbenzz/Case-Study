import React, {Component} from 'react';
import '../css/listItems.css';
import axios from 'axios';

class ListItems extends Component{

    constructor(){
        super();

        this.state = {
            FoodItems: [],       
        };

    }

    componentDidMount(){
        axios.get('http://localhost:8080/restsample01/rest/AddFoodItem')
        .then(res => {
            const FoodItems = res.data;
            this.setState({ FoodItems });
        })
    }
        
render(){
            

    return(

    <div>
        <div className="main-content">
			<div className="title">
				DASHBOARD
			</div>
			
                    <table>
                    
                    <thead>

                    </thead>
                        <tbody>
                            <tr className="add-food-row">
                                <th className="add-table-cell">ID</th>
                                <th className="add-table-cell">FOOD ITEM NAME</th>
                                <th className="add-table-cell">UNIT PRICE</th>
                                <th className="add-table-cell">STOCK STATUS</th>

                            </tr>

                            {
                                this.state.FoodItems.map((FoodItem) => {
                                    return(
                                        <tr className = "add-food-row">
                                            <td className="add-food-cell">{FoodItem.id}</td>
                                            <td className="add-food-cell">{FoodItem.foodItemName}</td>
                                            <td className="add-food-cell">{FoodItem.unitPrice}</td>
                                            <td className="add-food-cell">{FoodItem.inStock}</td>
                                        </tr>
                                    )
                                    })
                            }
                        </tbody>
                    </table>

                    {/* <table>
                        <tbody>
                            <tr className="add-food-row">
                                <th className="add-table-cell">ID</th>
                                <th className="add-table-cell">FOOD ITEM NAME</th>
                                <th className="add-table-cell">UNIT PRICE</th>
                                <th className="add-table-cell">STOCK STATUS</th>

                            </tr>
                            <tr className="add-food-row">
                                <td className='add-food-cell'>{ this.state.FoodItems.map(FoodItem => <li>{FoodItem.id}</li>)}</td>
                                <td className='add-food-cell'>{ this.state.FoodItems.map(FoodItem => <li>{FoodItem.foodItemName}</li>)}</td>
                                <td className='add-food-cell'>{ this.state.FoodItems.map(FoodItem => <li>{FoodItem.unitPrice}</li>)}</td>
                                <td className='add-food-cell'>{ this.state.FoodItems.map(FoodItem => <li>{FoodItem.inStock}</li>)}</td>

                            </tr>
     
                        </tbody>
                    </table> */}
                  
            </div>
        </div>
        );
    }
}


export default ListItems;