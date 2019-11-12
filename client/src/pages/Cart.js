import React,{Component} from 'react';

export default class Cart extends Component{
    constructor(props){
        super(props);
        this.state={
            cart:JSON.parse(window.localStorage.getItem("cart")) || []
        }
    }

    render(){
        return(
            <div className="container">
            <h3>Cart Details</h3>
            <a href='#/'>Continue Shopping?</a>
            <table className="table-bordered">
                <thead>
                    <th>No.</th>
                    <th>Item Image</th>
                    <th>Item Name</th>
                    <th>Item Price</th>
                </thead>
                <tbody>
                    {this.state.cart.length==0?
                    <tr>
                        <td colSpan="3">No item in cart</td>
                    </tr>:
                    this.state.cart.map((item, Num) => 
                        <tr>
                            <td>{Num+1}</td>
                            <td><img className="rounded-circle" style={{width: "150px", height: "120px"}} src={item.productImage||"http://files.vforum.vn/2013/T08/img/diendanbaclieu-99098-i2funcom-funny-asians-p131-005.jpg"} /></td>
                            <td>{item.name}</td>
                            <td>$ {item.price}</td>                                
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3">
                            Total
                        </td>
                        <td>$ {this.state.cart.map(item => {return item.price}).reduce((a,b) => a + b, 0 )}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
        )
    }
}
