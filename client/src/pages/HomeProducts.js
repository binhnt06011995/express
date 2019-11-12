import React,{Component} from 'react';
import ProductCard from '../component/ProductCard';
import '../App.css';
import {itemService} from '../services/itemService';
import {cartService} from '../services/cartService';

export default class HomeProducts extends Component{
    constructor(props){
        super(props);
        this.state={
            products:[],
            cart:[]
        }
    }

    componentDidMount(){
        let productFromStore = itemService.getProducts();
        let cart = JSON.parse(window.localStorage.getItem('cart'))||[];

        cart.forEach(element => {
            try{
                productFromStore.find(p => {return p.id === element.id}).isAdded = true;
            }finally{ }
        });
        this.setState({products: productFromStore});
    }

    btnAddorRemove=(item)=>{
        let list = this.state.products;
        if(!list[item].isAdded){
            list[item].isAdded = true;
            this.setState({
                products: list
                });
            cartService.addToCart(list[item]);
        localStorage.setItem("products",JSON.stringify(list));
        }
    
        else{
            list[item].isAdded = false;
            this.setState({
                products: list
                });
            cartService.removeFromCart(item);
        localStorage.setItem("products",JSON.stringify(list));
        }
    }

    onCheckOut=()=>{
        this.props.history.push('/cart');
    }

    onAddNewProduct=()=>{
        this.props.history.push('/add-product');
    }


    render(){
        const mapProduct = this.state.products.map((e,id)=>
            <ProductCard key={Math.random()} item={e} btnUpdate={()=>this.btnAddorRemove(id)}/>)

        return(
          <div className="container">
            <h1 className="text-center">STORE</h1>
              
            <h4><button onClick={this.onAddNewProduct}>Add an Item</button></h4>
            <div className="table-responsive">
              <table className="table table-striped table-bordered table-hover">
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Picture</td>
                  </tr>
                </thead>
                    {mapProduct}
                </table>
            </div>
              <button onClick={this.onCheckOut}>Move to Check Out</button>
          </div>
        );
    }
}