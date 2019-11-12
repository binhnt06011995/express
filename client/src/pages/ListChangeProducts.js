import React,{Component} from 'react';
import {itemService} from '../services/itemService'
import EditingProducts from '../component/EditingProducts';

class AddItem extends Component{
    render(){
        return(
            <div className="justify-content-center">
            <h1>Them san pham moi</h1>
                <form>
                    <div>
                    <label>Name: </label>
                    <input type="text" id="inputName" onChange={e => this.onChangeName(e)} name="name"></input>
                    <p className="text-danger">{this.props.errorName}</p>
                    </div>
                    <div>
                        <label>Price: </label>
                    <input type="text" id="inputPrice" onChange={e => this.onChangePrice(e)} name="price"></input>
                    <p className="text-danger">
                    {this.props.errorPrice===""?this.props.spellingWord:this.props.errorPrice}
                    </p>
                    </div>
                    <div>
                    <input type="file" onChange={this.fileChangedHandler}/>
                    <img src={this.props.picPreview} alt=""/>
                    </div>
                    <div>
                    <button type="button" onClick={(e)=>this.props.addItem(e)}>Add Item</button>
                    <button type="button" onClick={this.clearText}>Clear text</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default class ListChangeProducts extends Component{
    constructor(props){
        super(props);
        this.state={
            products:[],
            errorName:"",
            errorPrice:"",
            spellingWord:""
        }
    }    

    componentDidMount() {
        let productFromStore = itemService.getProducts();
        this.setState({
            products:productFromStore
        });
    }

    deleteItem=(i)=>{
        let list = this.state.products;
        if(list[i].isAdded){
            alert(list[i].name + ": is added to cart..!!");
        }
        else{
            let newProducts = itemService.deleteItem(list[i].id);
            this.setState({
                products:newProducts
            })
            localStorage.setItem("products",JSON.stringify(newProducts));
        }
    }
    
    render(){
        return(
            <div>
                {this.state.products.map((e)=>(<EditingProducts item={e} key={Math.random()}
                deleteItem={()=>this.deleteItem(e.id)} />))}
                <hr></hr>
                <AddItem item={this.state.products} />
            </div>
        )
    }
}