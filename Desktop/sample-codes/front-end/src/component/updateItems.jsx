import React, { Component } from 'react';
import '../css/updateItems.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class UpdateItems extends Component {

    constructor() {
        super();

        this.state = {
            FoodItems: [],
            foodItemName: '',
            unitPrice: '',
            inStock: '',
            editFoodItemsModal: false
        };

        this.toggle = this.toggle.bind(this);
        this.handleChangeFoodItemName = this.handleChangeFoodItemName.bind(this);
        this.handleChangeUnitPrice = this.handleChangeUnitPrice.bind(this);
        this.handleChangeInStock = this.handleChangeInStock.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        

    }

    toggle() {
        this.setState({
            editFoodItemsModal: !this.state.editFoodItemsModal
        });
    }

    handleChangeFoodItemName(e){
        this.setState({
          foodItemName: e.target.value
        })
      }
      handleChangeUnitPrice(e){
        this.setState({
         unitPrice: e.target.value
        })
      }
      handleChangeInStock(e){
        this.setState({
          inStock: e.target.value
        })
      }

    handleUpdate (e) {
        e.preventDefault();
        const food = {
            foodItemName: this.state.foodItemName,
            unitPrice: this.state.unitPrice,
            inStock: this.state.inStock
        }
        console.log("input");
        axios.put('http://localhost:8080/restsample01/rest/AddFoodItem', food)
        .then(res => 
            console.log(res.data));
    }

   

    componentDidMount() {
        axios.get('http://localhost:8080/restsample01/rest/AddFoodItem')
            .then(res => {
                const FoodItems = res.data;
                this.setState({ FoodItems });
            })
    }

    handleDelete(id) {
        axios.delete('http://localhost:8080/restsample01/rest/AddFoodItem/' + id)
            .then(res =>
                console.log(res.data));

    }
    componentDidUpdate(){
        axios.get('http://localhost:8080/restsample01/rest/AddFoodItem')
            .then(res => {
                const FoodItems = res.data;
                this.setState({ FoodItems });
            })
    }



    render() {
        return (

            <div>
                <div className="main-content">
                    <div className="title">DASHBOARD</div>
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
                                            <td className="add-food-cell">
                                                <button className="edit" type="button" onClick={this.toggle}>EDIT</button>
                                                <button className="delete" type="button" onClick={() => this.handleDelete(FoodItem.id)}>DELETE</button></td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                    <Modal isOpen={this.state.editFoodItemsModal}>
                        <form onSubmit={this.handleSubmit}>
                            <ModalHeader>EDIT</ModalHeader>
                            <ModalBody>
                                <div className="row">
                                    <div className="form-group col-md-8">
                                        <label>Food Item Name: </label>
                                        <input type="text" value={this.state.foodItemName} onChange={this.handleChangeFoodItemName} className="form-group" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-8">
                                        <label>Unit Price: </label>
                                        <input type="text" value={this.state.unitPrice} onChange={this.handleChangeUnitPrice} className="form-group" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-8">
                                        <label>Stock Status: </label>
                                        <select name="inStock" value={this.state.inStock} id="inStock" onChange={this.handleChangeInStock} className="form-group" >
                                            <option disabled selected>Choose</option>
                                            <option>Full Inventory</option>
                                            <option>Limited Stock</option>
                                            <option>Out of Stock</option>
                                        </select>
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <input type="submit" value="Submit" onSubmit={this.handleUpdate} color="primary" className="btn btn-primary" />
                                <Button color="danger" onClick={this.toggle}>Cancel</Button>
                            </ModalFooter>
                        </form>
                    </Modal>
                </div>
            </div>
        );

    }
}




export default UpdateItems;
