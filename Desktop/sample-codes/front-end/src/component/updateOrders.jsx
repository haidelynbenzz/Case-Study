import React, { Component } from 'react';
import '../css/updateOrders.css';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Table } from 'reactstrap';

import gallery from '../img/catering.png';

class UpdateOrders extends Component {

    constructor() {
        super();

        this.state = {
            Orders: [],
            editSelectOrderData: false,
        };

    }

    componentDidMount() {
        axios.get('http://localhost:8080/restsample01/rest/AddOrder')
            .then(res => {
                const Orders = res.data;
                this.setState({ Orders });
            })
    }

    handleDelete(id) {
        axios.delete('http://localhost:8080/restsample01/rest/AddOrder/' + id)
            .then(res =>
                console.log(res.data));

    }
    //DISPLAY EXISTING DATA AFTER DELETE REQUEST
    componentDidUpdate() {
        axios.get('http://localhost:8080/restsample01/rest/AddOrder')
            .then(res => {
                const Orders = res.data;
                this.setState({ Orders });
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

                    <table>
                        <thead>
                            <th className="add-table-cell">ORDER ID</th>
                            <th className="add-table-cell">CUSTOMER NAME</th>
                            <th className="add-table-cell">ADDRESS</th>
                            <th className="add-table-cell">CONTACT NUMBER</th>
                            <th className="add-table-cell">ORDER ITEMS</th>
                            <th className="add-table-cell">STATUS</th>
                            <th className="add-table-cell">TOTAL</th>
                            <th className="add-table-cell">MODIFY</th>
                        </thead>
                        <tbody>

                            {
                                this.state.Orders.map((Order) => {
                                    return (
                                        <tr className="add-food-row">
                                            <td className="add-food-cell">{Order.id}</td>
                                            <td className="add-food-cell">{Order.customerName}</td>
                                            <td className="add-food-cell">{Order.address}</td>
                                            <td className="add-food-cell">{Order.contactNumber}</td>
                                            <td className="add-food-cell">
                                                <Button color="info" onClick={this.toggleSelectOrder.bind(this)}>ORDER ITEMS</Button><br /></td>
                                            <td className="add-food-cell">{Order.status}</td>
                                            <td className="add-food-cell">TOTAL</td>
                                            <td className="add-food-cell">
                                                <button className="edit" type="button" onClick={this.toggleSelectOrder.bind(this)}>EDIT</button>
                                                <button className="delete" type="button" onClick={() => this.handleDelete(Order.id)}>DELETE</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                        <Modal isOpen={this.state.openSelectOrderModal} toggle={this.toggleSelectOrder.bind(this)}>
                            <ModalHeader toggle={this.toggleSelectOrder.bind(this)}>SELECT ORDER ITEMS</ModalHeader>
                            <ModalBody>
                                
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" >Add Selected Order</Button>{' '}
                                <Button color="secondary" onClick={this.toggleSelectOrder.bind(this)}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                    </table>

                </div>
                </div>
                )
        
            }
        }
        
export default UpdateOrders;