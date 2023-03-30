import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Filter from "./Filter-bar";
import product from "../images/product.jpg"

function Results()  {
    return (
    <div class="results-page">
        <div class="results-head">
            <h1>Results</h1>
            <h2>Showing for "chair"</h2>
            <p>We found <span color="blue">12 products</span></p>
        </div>
        <Filter/>
        <div class="results-grid">
        {/* <hr/> */}
            <Container fluid>
                <Row>
                    <Col xs="12" sm="6" md="6" lg="4">
                    <div class="product-container">
                    <a href="#"><img class="product img-fluid" src={product}/></a>
                    <h3 class="pt-2">Product Name</h3>
                    <h5>Modern </h5>
                    <p>Price:£20.00</p>
                    <button type="button" class="btn btn-dark mb-2">Add to Cart</button>
                    </div>
                    </Col>
                    <Col xs="12" sm="6" md="6" lg="4">
                    <a href="#"><img class="product img-fluid" src={product}/></a>
                    <h3 class="pt-2">Product Name</h3>
                    <p>Price:£20.00</p>
                    <button type="button" class="btn btn-dark mb-2">Add to Cart</button>
                    </Col>
                    <Col xs="12" sm="6" md="6" lg="4">
                    <a href="#"><img class="product img-fluid" src={product}/></a>
                    <h3 class="pt-2">Product Name</h3>
                    <p>Price:£20.00</p>
                    <button type="button" class="btn btn-dark mb-2">Add to Cart</button>
                    </Col>
                    <Col xs="12" sm="6" md="6" lg="4">
                    <div class="product-container">
                    <a href="#"><img class="product img-fluid" src={product}/></a>
                    <h3 class="pt-2">Product Name</h3>
                    <p>Price:£20.00</p>
                    <button type="button" class="btn btn-dark mb-2">Add to Cart</button>
                    </div>
                    </Col>
                    <Col xs="12" sm="6" md="6" lg="4">
                    <a href="#"><img class="product img-fluid" src={product}/></a>
                    <h3 class="pt-2">Product Name</h3>
                    
                    <p>Price:£20.00</p>
                    <button type="button" class="btn btn-dark mb-2">Add to Cart</button>
                    </Col>
                    <Col xs="12" sm="6" md="6" lg="4">
                    <a href="#"><img class="product img-fluid" src={product}/></a>
                    <h3 class="pt-2">Product Name</h3>
                    <p>Price:£20.00</p>
                    <button type="button" class="btn btn-dark mb-2">Add to Cart</button>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
    );
}

export default Results;