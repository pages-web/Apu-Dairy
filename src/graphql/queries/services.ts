import { gql } from "@apollo/client";

// Бүх үйлчилгээний мэдээллийг авах query
export const GET_ALL_SERVICES = gql`
  query GetAllServices {
    services {
      _id
      name
      description
      price
      imageUrl
    }
  }
`;

// Тухайн үйлчилгээний ID-аар дэлгэрэнгүй авах query
export const GET_SERVICE_BY_ID = gql`
  query GetServiceById($id: ID!) {
    service(_id: $id) {
      _id
      name
      description
      price
      imageUrl
    }
  }
`;
