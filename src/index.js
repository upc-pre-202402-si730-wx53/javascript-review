import {SalesOrder} from "./sales/domain/model/sales-order.js";
import {Customer} from "./crm/domain/model/customer.js";
import {Profile} from "./profile/domain/model/profile.js";

console.log('Thank you for using WebStorm 💙')

const customer = new Customer({ name: "John Doe"});
const order = new SalesOrder({ customerId: customer.id});
order.addItem({ productId: 1, quantity: 2, unitPrice: 100});
order.addItem({ productId: 2, quantity: 1, unitPrice: 50});
customer.lastOrderTotalPrice = order.calculateTotalPrice();
console.log(`Sales Order Total Price is ${order.calculateTotalPrice()}`);
console.log(`The Customer ${customer.name} identified with ID ${customer.id} has a total price os ${customer.lastOrderTotalPrice} on its last order.`);

console.log('New Examples - UPC')

const profile = new Profile({ name: "John Doe", email: "", password: ""});
profile.addAddress({ street: "123 Main St", city: "Springfield", state: "IL", zipCode: "62701"});
profile.addAddress({ street: "123 Elm St", city: "Springfield", state: "IL", zipCode: "62701"});

console.log(`The Profile ${profile.name} identified with ID ${profile.id} has ${profile.address.length} addresses.`);