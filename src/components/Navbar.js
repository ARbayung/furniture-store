import React from 'react'

export default function Navbar() {
    return (
        <div>

            {/* Navbar brand */}

            <nav className="navbar navbar-expand-lg bg-transparent">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Furnishly</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar links */}

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Collections
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Sofas & armchairs</a></li>
                                    <li><a className="dropdown-item" href="#">Tables & chairs</a></li>
                                    <li><a className="dropdown-item" href="#">Bookcases & shelves</a></li>
                                    <li><a className="dropdown-item" href="#">Kitchen appliances</a></li>
                                    <li><a className="dropdown-item" href="#">Bedroom furniture</a></li>
                                    <li><a className="dropdown-item" href="#">Lighting</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">About Us</a>
                            </li>
                        </ul>

                        {/* Navbar search field */}

                        <form className="d-flex ms-auto" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search Furnishly..." aria-label="Search" />
                            <button className="btn btn-outline-success search-icon" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0.2 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg></button>

                            {/* Navbar basket modal */}

                            <button type="button" className="btn btn-outline-success basket-icon" data-toggle="modal" data-target="#cartModal"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-cart2" viewBox="0 1 16 16">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg></button>

                            {/* Navbar profile modal */}

                            <button type="button" className="btn btn-outline-success profile-icon" data-bs-toggle="modal" data-bs-target="#ModalForm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-person" viewBox="0 0.3 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                </svg>
                            </button>
                            <div className="modal fade" id="ModalForm" tabindex="-1" aria-labelledby="ModalFormLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="modal" aria-label="Close"></button>
                                            <div className="myform bg-transparent">
                                                <h1 className="text-center">Sign In</h1>
                                                <form>
                                                    <div className="mb-3 mt-4">
                                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                                    </div>
                                                    <button type="submit" className="btn btn-dark mt-3">LOGIN</button>
                                                    <p className='faded'>Not a member? <a href="#" className='signup'>Signup now</a></p>

                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>

                        {/* Navbar basket modal data */}

                        <div className="modal fade" id="cartModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-header border-bottom-0">
                                        <h5 className="modal-title" id="exampleModalLabel">
                                            Your Basket
                                        </h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-x" viewBox="0 1.4 16 16">
                                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <table className="table table-image">
                                            <thead>
                                                <tr>
                                                    <th scope="col"></th>
                                                    <th scope="col" className='cart-title'>Product</th>
                                                    <th scope="col" className='cart-title'>Price</th>
                                                    <th scope="col" className='cart-title'>Qty</th>
                                                    <th scope="col" className='cart-title'>Total</th>
                                                    <th scope="col" className='cart-title'>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="w-25">
                                                        <img src="https://images.dfs.co.uk/i/dfs/content-014_header_fabric-image2?w=684&qlt=default&fmt=auto" className="img-fluid img-thumbnail" alt="Grey sofa" />
                                                    </td>
                                                    <td className='item-text'>Medium Grey 2 Seater Sofa</td>
                                                    <td className='item-text'>£899</td>
                                                    <td className="qty"><input type="text" className="form-control" id="input1" value="2" /></td>
                                                    <td className='item-text total-price'>£1798</td>
                                                    <td className='item-text'>
                                                        <a href="#" className="btn btn-danger btn-sm">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-x" viewBox="0 1.3 16 16">
                                                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                            </svg>
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td className="w-25">
                                                        <img src="https://i1.adis.ws/i/fv/PRODDOCETBL-DHD-001_dolce_dining-table__lifestyle?$product$&h=990&w=1406" className="img-fluid img-thumbnail" alt="Grey sofa" />
                                                    </td>
                                                    <td className='item-text'>Large Grey Marble Dining Table</td>
                                                    <td className='item-text'>£1099</td>
                                                    <td className="qty"><input type="text" className="form-control" id="input1" value="1" /></td>
                                                    <td className='item-text total-price'>£1099</td>
                                                    <td className='item-text'>
                                                        <a href="#" className="btn btn-danger btn-sm">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-x" viewBox="0 1.3 16 16">
                                                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                            </svg>
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="d-flex justify-content-end">
                                            <h5 className='total-price'>Total: <span className="price text-success">£2897</span></h5>
                                        </div>
                                    </div>
                                    <div className="modal-footer border-top-0 d-flex justify-content-between">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-success">Checkout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
