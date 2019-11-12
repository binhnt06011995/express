

export const cartService={
    addToCart,
    removeFromCart,
    getCart
}

function getCart(){
    let cart = JSON.parse(localStorage.getItem("cart"));
    return cart || [];
}

function addToCart(item){
    let cart = this.getCart();
    cart.push(item);
    localStorage.setItem("cart",JSON.stringify(cart));
}

function removeFromCart(id){
    console.log("item" + id)
    let cart = this.getCart();
    console.log("cart" + cart)
    let newCart = cart.filter(p => p.id !== id+1);
    console.log("New cart" + newCart)
    localStorage.setItem("cart",JSON.stringify(newCart));
}