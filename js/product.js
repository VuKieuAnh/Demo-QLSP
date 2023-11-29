class Product {
    constructor(_name, _price, _number, _img) {
        this.name = _name;
        this.price = _price;
        this.number = _number;
        this.img = _img;
    }
    getTotalPrice(){
        let totalPrice = this.price*this.number;
        return totalPrice;
    }

}
