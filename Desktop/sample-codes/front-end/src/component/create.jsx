import React, { Component } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Table } from 'reactstrap';


class Create extends Component {

    constructor() {
        super();

        this.state = {
            customerName: '',
            address: '',
            contactNumber: '',
            status: '',

            SelectOrderData: false,
            SelectOrderData: {
                customerName: '',
                address: '',
                contactNumber: '',
                status: '',
                
            },
            FoodItems: [],
           

        };

    }

    componentDidMount() {
        axios.get('http://localhost:8080/restsample01/rest/AddFoodItem')
            .then(res => {
                const FoodItems = res.data;
                this.setState({ FoodItems });
            })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    //SUBMIT FUNCTION
    handleSubmit = e => {
        e.preventDefault();

        const order = {
            customerName: this.state.customerName,
            address: this.state.address,
            contactNumber: this.state.contactNumber,
            status: this.state.status
        }

        console.log("ORDER");
        console.log(order);

        axios.post('http://localhost:8080/restsample01/rest/AddOrder/', order)
            .then(res => {
                console.log(res);
                //console.log(res.data);
            })
    }

    toggleSelectOrder() {
        this.setState({
            openSelectOrderModal: !this.state.openSelectOrderModal
        });
    }

    
    render() {


        return (

            <div>
                <div className="main-content">
                    <div className="title">
                        DASHBOARD
			</div>
                    <div className="main">
                        <div className="widget">
                            <div className="title">Create Order</div>
                            <form onSubmit={this.handleSubmit}>
                                <input name="customerName" placeholder="Customer Name" onChange={this.handleChange} />
                                <input name="address" placeholder="Address" onChange={this.handleChange} />
                                <input name="contactNumber" placeholder="Contact Number" onChange={this.handleChange} /><br /><br />

                                <Button color="info" onClick={this.toggleSelectOrder.bind(this)}>SELECT ORDER ITEM</Button><br />

                                <Modal isOpen={this.state.openSelectOrderModal} toggle={this.toggleSelectOrder.bind(this)}>
                                    <ModalHeader toggle={this.toggleSelectOrder.bind(this)}>SELECT ORDER ITEMS</ModalHeader>
                                    <ModalBody>
                                        <FormGroup>
                                            <Label>Food Item Name and Price</Label>
                                            <Input type="select" onChange={this.handleChange} name="unitPrice">
                                            {
                                                this.state.FoodItems.map((FoodItem) => {
                                                    return (
                                                            <option>FoodName: {FoodItem.foodItemName}  (Php: {FoodItem.unitPrice})</option>
                                                    )
                                                })
                                            }
                                            </Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label >Quantity</Label>
                                            <Input type="number" min='1' max='20' placeholder="Quantity" name="quantity" onChange={this.handleChange}></Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>Est. Total Price</Label>
                                            <h4>Php: {this.state.quantity}</h4>
                                        </FormGroup>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" >Add Selected Order</Button>{' '}
                                        <Button color="secondary" onClick={this.toggleSelectOrder.bind(this)}>Cancel</Button>
                                    </ModalFooter>
                                </Modal>

                                <select name="status" id="status" onChange={this.handleChange}>
                                    <option disabled selected>Choose</option>
                                    <option>Recieved</option>
                                    <option>Kitchen</option>
                                    <option>In Transit</option>
                                    <option>Delivered</option>
                                    <option>Cancelled</option>
                                </select>
                                <br/><br/>
                                <h4>Total: </h4>
                                <h4></h4>
                                <br />
                                <button type="submit" className="submit" onSubmit={this.handleSubmit}>ADD</button>
                            </form>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}


export default Create;