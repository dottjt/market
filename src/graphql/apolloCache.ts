import { InMemoryCache } from '@apollo/client';

export const cache = new InMemoryCache();

// export const cache = new InMemoryCache({
//   typePolicies: {
//     Wizard: {
//       fields: {
//         stepper: {
//           read() {
//             return stepperVar();
//           }
//         }
//       }
//     }
//   }


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
