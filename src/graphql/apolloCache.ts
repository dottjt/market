export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartItems: {
          read() {
            return cartItemsVar();
          }
        }
      }
    }
  }

// const GET_PRODUCT_DETAILS = gql`
//   query ProductDetails($productId: ID!) {
//     product(id: $productId) {
//       name
//       price
//       isInCart @client    }
//   }
// `;


// export const cartItemsVar = makeVar([]);

  // const cache = new InMemoryCache({
  //   typePolicies: { // Type policy map
  //     Product: {
  //       fields: { // Field policy map for the Product type
  //         isInCart: { // Field policy for the isInCart field
  //           read(_, { variables }) { // The read function for the isInCart field
  //             return localStorage.getItem('CART').includes(
  //               variables.productId
  //             );
  //           }
  //         }
  //       }
  //     }
  //   }
  // });
