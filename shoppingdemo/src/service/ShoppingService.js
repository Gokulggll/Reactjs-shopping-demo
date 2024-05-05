
import axios from 'axios'

const getAllEmployee=()=>{
return   axios.get('https://react-shopping-cart-67954.firebaseio.com/products.json')
}

const ShoppingService = {
    getAllEmployee
}

export default ShoppingService;
