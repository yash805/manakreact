import { buyBook } from "./Types";

 function purchase(quantity) {
    return {
        type: buyBook,
        payload: quantity,
    };
}


export default purchase
