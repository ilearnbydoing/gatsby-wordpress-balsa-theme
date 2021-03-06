import React from "react";
import Layout from "../components/Layout";
import CtaBig from "../components/CtaBig";
import { graphql } from "gatsby";
import { PostDescription } from "../models/all-post-description.model";
import { PaginationContext } from "../models/pagination.model";
import PostCard from "../components/PostCard";
import Pagination from "../components/Pagination";
import WebsiteMeta from "../components/meta/website-meta";

type IndexPageProps = {
  data: {
    // allGhostPost: AllGhostPostDescription;
    // ghostSettings: {
    //   title: string;
    //   description: string;
    //   cover_image: string;
    // };
    allWordpressPost: {
      edges: {
        node: PostDescription;
      }[];
    };
    wpSiteMetaData: {
      name: string;
      description: string;
    };
  };
  location: any;
  pageContext?: PaginationContext;
};

const IndexPage: React.FC<IndexPageProps> = ({
  data,
  location,
  pageContext,
}) => {
  const { wpSiteMetaData, allWordpressPost } = data;

  return (
    <>
      <Layout>
        <WebsiteMeta />
        <section className="text-center bg-cover max-w-full bg-blue-900">
          <div className="relative flex items-center py-32">
            <div className="absolute bg-black opacity-50 inset-0" />
            <div className="z-10 max-w-2xl mx-auto px-4">
              <h1
                dangerouslySetInnerHTML={{ __html: wpSiteMetaData.name }}
                className="mb-4 text-4xl leading-tight font-semibold font-heading text-white break-words"
              ></h1>
              <p
                dangerouslySetInnerHTML={{ __html: wpSiteMetaData.description }}
                className="text-2xl leading-tight font-light text-white"
              ></p>
            </div>
          </div>
        </section>
        <div className="spacer my-8"></div>
        <section className="px-4 container mx-auto">
          <div className="flex justify-center flex-wrap -mx-4">
            {allWordpressPost.edges.map(({ node }, i) => {
              return <PostCard post={node} key={i} />;
            })}
          </div>
        </section>

        {/* Pagination */}
        <Pagination pageContext={pageContext} />
        <CtaBig />
      </Layout>
    </>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query WordpressQuery($skip: Int!, $limit: Int!) {
    allWordpressPost(
      sort: { fields: [sticky, date], order: [DESC, DESC] }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          ...WordPressPostData
        }
      }
    }

    wpSiteMetaData {
      ...WordpressSiteMetaData
    }
  }
`;
