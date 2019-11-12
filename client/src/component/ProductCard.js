import React,{Component} from 'react';

export default class ProductCard extends Component{
    render(){
        return(
            <tbody>
                <tr>
                    <td>{this.props.item.name}</td>
                    <td>{this.props.item.price}</td>
                    <td>
                    <img className="img-top img-fluid" alt="..." style={{width: "260px", height: "150px"}}
                     src={this.props.item.productImage||
    "http://files.vforum.vn/2013/T08/img/diendanbaclieu-99098-i2funcom-funny-asians-p131-005.jpg"}></img>
                    </td>
                    <td>
                        <button onClick={()=>this.props.btnUpdate(this.props.item.id)}>
                        {this.props.item.isAdded?"Remove from Cart":"Add to Cart"}
                        </button>
                    </td>
                </tr>
            </tbody>
        )
    }
} 