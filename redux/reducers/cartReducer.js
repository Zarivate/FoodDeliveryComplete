let defaultState = {
  selectedItems: { items: [], restaurantName: "" },
};

let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let newState = { ...state };
      if (action.payload.checkboxValue) {
        console.log("Added to cart");
        newState.selectedItems = {
          // New item will be what was already in the cart plus whatever was sent in
          items: [...newState.selectedItems.items, action.payload],
          restaurantName: action.payload.restaurantName,
        };

        // If check box is false, filter out item that has matching title in cart
      } else {
        console.log("Removed from cart");
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter(
              (item) => item.title !== action.payload.title
            ),
          ],
          restaurantName: action.payload.restaurantName,
        };
      }
      console.log(newState, "got here");
      return newState;
    }

    default:
      return state;
  }
};

export default cartReducer;
