import React, {Component} from 'react';
import * as products from './../services/products';
import {Link} from 'react-router-dom';

class Shop extends Component {
    constructor(props){
        super(props)

        this.state = {
            products:[]
        }

    }

    componentDidMount() {
       products.getAll()
       .then(products => this.setState({products}))
    }

    render(){
        const stuff = this.state.products.map( (product, i) => {
            return(
                <div key={i}>
                    
                   <Link to={`/product/${product.id}`} > <div>{product.title}</div> </Link>
                </div>
            )
        })
        return(
            <div>
                {stuff}
            </div>
        )
    }


}
export default Shop