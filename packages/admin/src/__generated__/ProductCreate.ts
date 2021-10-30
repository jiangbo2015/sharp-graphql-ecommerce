/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductBaseInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: ProductCreate
// ====================================================

export interface ProductCreate_productCreate_collections {
  __typename: "Collection";
  id: number;
  title: string;
}

export interface ProductCreate_productCreate {
  __typename: "Product";
  id: number;
  title: string;
  slug: string;
  price: number;
  image: string;
  collections: (ProductCreate_productCreate_collections | null)[] | null;
}

export interface ProductCreate {
  productCreate: ProductCreate_productCreate;
}

export interface ProductCreateVariables {
  data: ProductBaseInput;
  collectionId: number;
}
