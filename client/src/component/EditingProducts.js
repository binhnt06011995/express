import React, {Component} from 'react';

export default class EditingProducts extends Component{
    constructor(props){
        super(props);
        this.state={
            EditStatus:false,
            errorName:"",
            errorPrice:"",
            spellingWord:""
        }
    }

    renderEditForm=()=>{
        if (!this.state.EditStatus) {
            return (
                <div className="col-md-3 d-flex align-items-stretch">
                    <div className="card" style={{"width": "18rem"}}>
                        <img className="img-top img-fluid" alt="..." style={{width: "260px", height: "170px"}} src={this.props.item.productImage||"http://files.vforum.vn/2013/T08/img/diendanbaclieu-99098-i2funcom-funny-asians-p131-005.jpg"}></img>
                    <div className="card-body">
                        <div className="card-title">{this.props.item.name}</div>
                        <div className="card-text">
                            Price: {this.props.item.price} USD
                        </div>

       <button onClick={() => this.setState({ EditStatus: !this.state.EditStatus})}>Edit</button>
       <button onClick={() => this.props.deleteItem(this.props.item.id)}>Delete</button>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="col-md-3">
                <div className="card" style={{"width": "18rem"}}>
                    <button onClick={() => this.setState({ EditStatus: !this.state.EditStatus})}>X</button>
                        <form onSubmit={(e)=>this.editItem(e,this.props.item.id)}>
                        <img className="img-top img-fluid" alt="..." style={{width: "260px", height: "170px"}} src={this.props.item.productImage||"http://files.vforum.vn/2013/T08/img/diendanbaclieu-99098-i2funcom-funny-asians-p131-005.jpg"}></img>
                        <input type="file" onChange={this.fileChangedHandler}/>
                    <div className="card-body">
                            <div className="card-title">
                            IdProduct: <input 
                                readOnly
                                value={this.props.item.id} />
                            </div>
                            <div className="card-text">
                            Name: <input 
                                type="text" 
                                name="name" 
                                onChange={(e)=>this.onChangeName(e)} 
                                defaultValue={this.props.item.name} />
                            </div>
                            <p className="text-danger">{this.state.errorName}</p>

                            <div className="card-text">
                            Price: <input type="text" 
                                name="price" 
                                onChange={(e)=>this.onChangePrice(e)} 
                                defaultValue={this.props.item.price}/>USD
                            </div>
                  <p className="text-danger">
                  {this.state.errorPrice===""?this.state.spellingWord:this.state.errorPrice}
                  </p>
                            <button>SAVE</button>
                    </div>

                        </form>
                </div>
            </div>
        )
    }

    render(){
        return(
            <div className="row">
                {this.renderEditForm()}
            </div>
        )
    }
}