import React,{Component} from'react';

export default class Products extends Component{
    constructor(){
        super();
        this.state={
            products:[]
        }
    }

    componentDidMount() {
        fetch('/api/products')
        .then(res => res.json())
        .then(products => this.setState({products},()=>console.log('Customer fetched...',
        products)));
    }
    
    render(){
        return(
            <div>
                <h2>Products</h2>
                {this.state.products.map(products=>
                    <li key={products.id}>{products.name} {products.price}</li>
                    )}
            </div>
        );
    }
}