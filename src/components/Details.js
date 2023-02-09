import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import {ButtonDetail} from './Button';


class Detail extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {id, company, img, info, price, title, inCart} = value.detailProduct;
                return (
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3 text-center">
                                <img src={img} className="img-fluid" alt="Product"/>
                            </div>
                            <div className="col-10 mx-auto text-center text-slanted text-capitalize text-blue my-5">
                                <h1>Model : {title}</h1>
                                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">Made by : 
                                    <span className="text-uppercase">
                                        {company}
                                    </span>
                                </h4>
                                <h4 className="text-blue"><strong>price : <span>Rp.</span> {price}</strong></h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-0">some info about product :</p>
                                <p className="text-muted lead">{info}</p>
                                <div>
                                    <Link to="/">
                                        <ButtonDetail className="mr-2">Back To Product</ButtonDetail>
                                    </Link>
                                    <ButtonDetail
                                        cart
                                        disabled = {inCart?true:false}
                                        onClick={()=>{
                                            value.addToCart(id);
                                            value.openModal(id);
                                          }}
                                    >
                                        {inCart?"In Cart":"Add To Cart"}
                                    </ButtonDetail>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                }}
            </ProductConsumer>
        );
    }
}

export default Detail;