import React, {Component} from 'react';
import '../css/body.css';
import axios from 'axios';

class Create extends Component{

    

//'http://localhost:8080/restsample01/rest/AddFoodItem')

   
render(){
   
    return(
        
        <body>
        <div className="main-content">
			<div className="title">
				DASHBOARD
			</div>
			<div className="main">
				<div className="widget">
					<div className="title">Create Order</div>
                   
                   <input placeholder="Customer Name" />
                   <input placeholder="Address" />
                   <input placeholder="Contact Number" />
                        <table className="createOrder">
                            <tbody>
                                <tr>Order Items</tr>
                            </tbody>
                        </table>
                    <input placeholder="Status" />
                    <label>Total: </label>
				</div>
                
                {/* <table className="addFoodItem">
                <tbody>
                    <tr className="add-table-row">
                        <th>Food ID</th>
                        <th>Food Item Name</th>
                        <th>Unit Price</th>
                        <th>InStock</th>
                    </tr>
                    <tr>
                        <th>{items.map(item =>(
                        <li key={item.id}>
                            Id : {item.id}
                        </li>))}
                        </th>
                        <th>{items.map(item =>(
                        <li key={item.id}>
                            Name: {item.foodItemName}
                        </li>))}
                        </th>
                        <th>{items.map(item =>(
                        <li key={item.id}>
                            UnitPrice: {item.unitPrice}
                        </li>))}
                        </th>
                        <th>{items.map(item =>(
                        <li key={item.id}>
                            InStock: {item.inStock}
                        </li>))}
                        </th>
                    </tr>
                </tbody>
                
                </table> */}

			</div>

           
            <button className="list">List Food Items</button>
            <button className="cancel" type="clear">Cancel</button>
		</div>
        </body>
    );
}
}
export default Create;