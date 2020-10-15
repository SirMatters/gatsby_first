import { graphql } from 'gatsby';
import React from 'react';

import PizzaList from '../components/PizzaList';

const Pizzas = ({ data }) => (
  <>
    <PizzaList pizzas={data.pizzas.nodes} />
  </>
);

export const query = graphql`
  query PizzaQuery {
    pizzas: allSanityPizza {
      nodes {
        name
        id
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

export default Pizzas;
