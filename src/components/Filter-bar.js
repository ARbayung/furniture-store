import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from 'react-bootstrap/Dropdown';

function Filter(){
    return(
        <div class="filter-bar">
            <div class="filter-container bg-warning">
                <Container>
                    <Row >
                        <Col>
                            <div class="center"><p class="bold">Filters: </p></div>
                        </Col>
                        <Col>
                            <Dropdown>
                                <Dropdown.Toggle name="sort" variant="warning" id="sort" style={{ color: 'black' }}>
                                    sort
                                </Dropdown.Toggle> 
                                <Dropdown.Menu variant="dark">
                                <Dropdown.Item href="#">High to Low</Dropdown.Item>
                                <Dropdown.Item href="#">Low to High</Dropdown.Item>
                                <Dropdown.Item href="#">New</Dropdown.Item>
                                <Dropdown.Item href="#">Sale</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col >
                            <Dropdown>
                                <Dropdown.Toggle name="colour" variant="warning" id="colour">
                                    colour
                                </Dropdown.Toggle> 
                                <Dropdown.Menu variant="dark">
                                <Dropdown.Item href="#">Black</Dropdown.Item>
                                <Dropdown.Item href="#">Red</Dropdown.Item>
                                <Dropdown.Item href="#">Yellow</Dropdown.Item>
                                <Dropdown.Item href="#">Green</Dropdown.Item>
                                <Dropdown.Item href="#">Orange</Dropdown.Item>
                                <Dropdown.Item href="#">Pink</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col >
                            <Dropdown>
                                <Dropdown.Toggle name="category" variant="warning" id="category">
                                    category
                                </Dropdown.Toggle> 
                                <Dropdown.Menu variant="dark">
                                <Dropdown.Item href="#">Chair</Dropdown.Item>
                                <Dropdown.Item href="#">Table</Dropdown.Item>
                                <Dropdown.Item href="#">Baby & Children</Dropdown.Item>
                                <Dropdown.Item href="#">Mirror</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col >
                            <Dropdown>
                                <Dropdown.Toggle name="price" variant="warning" id="price">
                                    price
                                </Dropdown.Toggle> 
                                <Dropdown.Menu variant="dark">
                                <Dropdown.Item href="#">£59 - £100</Dropdown.Item>
                                <Dropdown.Item href="#">£101 - £199</Dropdown.Item>
                                <Dropdown.Item href="#">£200 - £299</Dropdown.Item>
                                <Dropdown.Item href="#">£300 +</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                    <hr/>
                </Container>
            </div>
        </div>
    );
}

export default Filter;