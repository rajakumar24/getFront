import React, { Component } from 'react'

import { InputGroup, FormControl, Form, Col, Button } from 'react-bootstrap'
import { basicDetails } from '../../Modal/UserFunctions'


class Postpart1 extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            mobile: '',
            person: '',
            rera_id: '',
            rera_url: '',
            Listmy_propertyfor: '',
            Available_for: '',
            Typeof_property: '',
            Property_status: '',
            Possession_from: '',
            Available_from: '',
            Bachelors_allowed: '',
            Pets_allowed: '',
            Nonveg_allowed: '',
          
            errors: {}
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        // this.handleDropdownChange = this.handleDropdownChange.bind(this)
    }

    // handleDropdownChange(e) {
    //     this.setState({e.target.value});
    // }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        const userpart1 = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            person: this.state.person,
            rera_id: this.state.rera_id,
            rera_url: this.state.rera_url,
            Listmy_propertyfor: this.state.Listmy_propertyfor,
            Available_for: this.state.Available_for,
            Typeof_property: this.state.Typeof_property,
            Property_status: this.state.Property_status,
            Possession_from: this.state.Possession_from,
            Available_from: this.state.Available_from,
            Bachelors_allowed: this.state.Bachelors_allowed,
            Pets_allowed: this.state.Pets_allowed,
            Nonveg_allowed: this.state.Nonveg_allowed,
            }

            basicDetails(userpart1).then(res => {
            this.props.history.push('/')
        })
    }

    render() {
        return (
            <div className="post1">
                <p>Tell us about yourself</p>
                <div className="post2">
                    <Form noValidate onSubmit={this.onSubmit}>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Name*</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                type="text"
                                name="name"
                                placeholder="Enter Your Full Name Here"
                                aria-label=""
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Email*</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                type="email"
                                name="email"
                                placeholder="Enter Your Mail Id"
                                aria-label="Amount (to the nearest dollar)"
                                value={this.state.email}
                                onChange={this.onChange}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Mobile*</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                type={Number}
                                placeholder="Your Mobile No"
                                aria-label="Amount (to the nearest dollar)"
                                name="mobile"
                                value={this.state.mobile}
                                onChange={this.onChange}
                            />
                        </InputGroup>
                        {/ <Form> /}
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>I am*</Form.Label>
                            <Form.Control
                                as="select"
                                value={this.state.person}
                                onChange={e => this.setState({person: e.target.value})}
                                custom>
                                <option value="OWNER">OWNER</option>
                                <option value="AGENT">AGENT</option>
                                <option value="BUILDER">BUILDER</option>

                            </Form.Control>
                        </Form.Group>
                        {/* {/ </Form> /}
                        <br />
                        {/ <Form> /} */}
                        <Form.Label>RERA Details*</Form.Label>
                        <Form.Row className="align-items-center">
                            <Col xs="auto">

                                <Form.Control
                                    type="text"
                                    className="mb-2"
                                    name="rera_id"
                                    id="inlineFormInput"
                                    placeholder="rera_id"
                                    value={this.state.rera_id}
                                    onChange={this.onChange}
                                />
                            </Col>
                            <Col xs="auto">

                                <InputGroup className="mb-2">

                                    <FormControl
                                        type="text"
                                        id="inlineFormInputGroup"
                                        placeholder="rera_url"
                                        name="rera_url"
                                        value={this.state.rera_url}
                                        onChange={this.onChange}
                                    />
                                </InputGroup>
                            </Col>

                        </Form.Row>
                        {/* {/ </Form> /}
                        {/ <Form> /} */}
                        <Form.Label>About the property</Form.Label>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>List my property for*</Form.Label>
                            <Form.Control 
                            as="select" 
                            value={this.state.Listmy_propertyfor}
                            // onChange={this.handleDropdownChange}
                            onChange={e => this.setState({Listmy_propertyfor: e.target.value})}
                            custom>
                                <option value="Sale">Sale</option>
                                <option value="Rent">Rent</option>


                            </Form.Control></Form.Group>
                            <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>Available for*</Form.Label>
                            <Form.Control 
                            as="select"
                            value={this.state.Available_for}
                            onChange={e => this.setState({Available_for: e.target.value})}
                            custom>
                                <option value="ReSale">ReSale</option>
                                <option value="New">New</option>


                            </Form.Control></Form.Group>
                            <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>Type of property*</Form.Label>
                            <Form.Control 
                            as="select" 
                            value={this.state.Typeof_property}
                            onChange={e => this.setState({Typeof_property: e.target.value})}
                            custom>
                                <option value="Apartment">Apartment</option>
                                <option value="Builderfloor">Builderfloor</option>
                                <option value="Plot">Plot</option>
                                <option value="House/Villa">House/Villa</option>
                            </Form.Control></Form.Group>
                            <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>Property Status*</Form.Label>
                            <Form.Control 
                            as="select" 
                            value={this.state.Property_status}
                            onChange={e => this.setState({Property_status: e.target.value})}
                            custom>
                                <option value="Ready to move">Ready to move</option>
                                <option value="Under Construction">Under Construction</option>

                            </Form.Control></Form.Group>
                            <Form.Label>Possession From*</Form.Label>
                            <Form.Control
                                className="mb-2"
                                id="inlineFormInput"
                                placeholder="Possession_from"
                                type="date"
                                name="Possession_from"
                                value={this.state.Possession_from}
                                onChange={this.onChange}
                            />
                           
                        <Form.Row className="align-items-center">
                       
                            <Col xs="auto">
                            <Form.Label>Available From*</Form.Label>
                                <Form.Control
                                    type="date"
                                    className="mb-2"
                                    name="Available_from"
                                    id="inlineFormInput"
                                    placeholder="Available_from"
                                    value={this.state.Available_from}
                                    onChange={this.onChange}
                                />
                            </Col>
                            <Col xs="auto">
                            <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>Bachelors Allowed*</Form.Label>
                            <Form.Control 
                            as="select" 
                            value={this.state.Bachelors_allowed}
                            onChange={e => this.setState({Bachelors_allowed: e.target.value})}
                            custom>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>

                            </Form.Control></Form.Group>
                            </Col>

                        </Form.Row>
                        <Form.Row className="align-items-center">
                       
                            <Col xs="auto">
                            <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>Pets Allowed*</Form.Label>
                            <Form.Control 
                            as="select" 
                            value={this.state.Pets_allowed}
                            onChange={e => this.setState({Pets_allowed: e.target.value})}
                            custom>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>

                            </Form.Control></Form.Group>
                            </Col>
                            <Col xs="auto">
                            <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>Non-vegAllowed*</Form.Label>
                            <Form.Control 
                            as="select" 
                            value={this.state.Nonveg_allowed}
                            onChange={e => this.setState({Nonveg_allowed: e.target.value})}
                            custom>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>

                            </Form.Control></Form.Group>
                            </Col>

                        </Form.Row>
                        

                        <Col xs="auto">
                        <Button variant="primary" type="submit">
                                    Continue
                     </Button>
                        </Col>
                    </Form>
                </div></div>
        );
    }
}
export default Postpart1;