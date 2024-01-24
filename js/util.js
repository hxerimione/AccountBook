export function toShow(node) {
    node.className = node.className.replace("v-none", "v-show");
  }
  
  export function toHidden(node) {
    node.className = node.className.replace("v-show", "v-none");
  }
  
  export function validatePrice(currentFunds, currentAmount) {
    // TODO: 금액이 현재 자산보다 이하인지
    return currentAmount <= currentFunds
    
  }
  
  export function validateRequired({ category, description, price }) {
    // TODO: 값이 존재하는지
    
    return Boolean(category) && Boolean(description) && Boolean(price) && price > 0;
  } 