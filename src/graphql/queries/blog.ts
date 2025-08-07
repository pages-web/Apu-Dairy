import { gql } from "@apollo/client";

const GET_ALL_BLOGS = gql`
  query GetAllBlogs {
    blogs {
      _id
      title
      excerpt
      author {
        _id
        name
      }
      coverImage {
        url
      }
    }
  }
`;

const GET_BLOG_BY_SLUG = gql`
  query GetBlogBySlug($slug: String!) {
    blog(where: { slug: $slug }) {
      _id
      title
      content
      author {
        name
        avatar {
          url
        }
      }
      coverImage {
        url
      }
    }
  }
`;

const queries = {
  GET_ALL_BLOGS,
  GET_BLOG_BY_SLUG,
};

export default queries;
