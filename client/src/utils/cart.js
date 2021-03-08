import { useSelector } from "react-redux";


export function SubTotalPrice() {
    const { cartProducts } = useSelector(state => state.cart);

    let total = cartProducts.map(p => { return p.price * p.quantity })
    let subTotal = total.reduce((a, b) => a + b, 0);

    return subTotal;
}