import React, {Component} from 'react';
import * as products from './../services/products';
import './Product.css';

class Product extends Component{
    constructor(props){
        super(props)

        this.state = {
            product: []
        }
    }

    componentDidMount() {
        products.getOne(this.props.match.params.id)
        .then(product => this.setState({product}))
    }


    render() {
        const product = this.state.product;
        return(
        <div className="container">
            <img src={product.image} />
            <div className="title">{product.title}</div>
            <div className="price">{product.price}</div>
        </div>
        )
    }

}
export default Product;
