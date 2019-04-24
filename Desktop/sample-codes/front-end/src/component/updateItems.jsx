import React, { Component } from 'react';
import '../css/updateItems.css';
import axios from 'axios';

class UpdateItems extends Component {

    constructor() {
        super();

        this.state = {
            FoodItems: [],
            id: '',
        };

    }

    componentDidMount() {
        axios.get('http://localhost:8080/restsample01/rest/AddFoodItem')
            .then(res => {
                const FoodItems = res.data;
                this.setState({ FoodItems });
            })
    }

    // onDelete(id)
    // {
    //     axios.delete('http://localhost:8080/restsample01/rest/AddFoodItem/'+delete_id)
    //     .then(res => {
    //         var deleteId = this.state.deleteId;

    //         for(var i = 0; i <deleteId.length; i++)
    //         {
    //             if(deleteId[i].id==delete_id){
    //                 deleteId.splice(i, 1);
    //                 this.setState({deleteId:deleteId});
    //             }
    //         }
    //     });
    // }
    // handleDelete = rowIndex => {

    //     const ser = {
    //         id: this.state.id
    //     }

    //     ser.splice(rowIndex, 1);

    //     this.setState({ser: ser})

    //     console.log("input");
    //     console.log(ser);

    //     axios.delete('http://localhost:8080/restsample01/rest/AddFoodItem',ser)
    //     .then(res => {
    //         console.log(res);
    //         // console.log(res.data);
    //     })

    // }

    render() {


        return (

            <div>
                <div className="main-content">
                    <div className="title">
                        DASHBOARD
			</div>

                    <table>
                        <thead>
                            <th className="add-table-cell">ID</th>
                            <th className="add-table-cell">FOOD ITEM NAME</th>
                            <th className="add-table-cell">UNIT PRICE</th>
                            <th className="add-table-cell">STOCK STATUS</th>
                            <th className="add-table-cell">MODIFY</th>
                        </thead>
                        <tbody>
                            {
                                this.state.FoodItems.map((FoodItem) => {
                                    return (
                                        <tr className="add-food-row">
                                            <td className="add-food-cell">{FoodItem.id}</td>
                                            <td className="add-food-cell">{FoodItem.foodItemName}</td>
                                            <td className="add-food-cell">{FoodItem.unitPrice}</td>
                                            <td className="add-food-cell">{FoodItem.inStock}</td>
                                            <td className="add-food-cell"><button className="edit" type="button">EDIT</button><button className="delete" type="button">DELETE</button></td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}


export default UpdateItems;