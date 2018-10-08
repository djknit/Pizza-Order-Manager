class Order {
    constructor() {
        this.isDelivery = isDelivery;
        this.pizzas = [];
        this.drinks = [];
        this.stix = [];
        this.extras = {
            redSauce: 0,
            ranch: 0,
            cups: {
                small: 0,
                large: 0
            },
            redPep: 0,
            parm: 0,
            toppingSides: []
        };
        this.price = {
            asOrdered: 0
        };
    }
}