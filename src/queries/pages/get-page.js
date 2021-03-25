import { gql } from "@apollo/client";
import MenuFragment from "../fragments/menus";
import { HeaderFooter } from "../get-menus";
import SeoFragment from "../fragments/seo/index";

export const GET_PAGE = gql`
  query GET_PAGE($uri: String) {
    ${HeaderFooter}
    page: pageBy(uri: $uri) {
      id
      title
      content
      slug
      uri
      seo {
        ...SeoFragment
      }
    }
  }
  ${MenuFragment}
  ${SeoFragment}
`;

// export const GET_PAGE = gql`
//   query GET_PAGE($uri: String) {
//     header: getHeader {
//       favicon
//       siteLogoUrl
//       siteTagLine
//       siteTitle
//     }
//     headerMenus: menuItems(
//       where: { location: HCMS_MENU_HEADER, parentId: "0" }
//     ) {
//       edges {
//         node {
//           ...MenuFragment
//           childItems {
//             edges {
//               node {
//                 ...MenuFragment
//               }
//             }
//           }
//         }
//       }
//     }
//     footerMenus: menuItems(
//       where: { location: HCMS_MENU_FOOTER, parentId: "0" }
//     ) {
//       edges {
//         node {
//           ...MenuFragment
//         }
//       }
//     }
//     footer: getFooter {
//       copyrightText
//       sidebarOne
//       sidebarTwo
//       socialLinks {
//         iconName
//         iconUrl
//       }
//     }
//     page: pageBy(uri: $uri) {
//       id
//       title
//       content
//       slug
//       uri
//       seo {
//         ...SeoFragment
//       }
//     }
//   }

//   fragment MenuFragment on MenuItem {
//     id
//     label
//     url
//     path
//   }

//   fragment SeoFragment on PostTypeSEO {
//     breadcrumbs {
//       text
//       url
//     }
//     title
//     metaDesc
//     metaRobotsNoindex
//     metaRobotsNofollow
//     opengraphAuthor
//     opengraphDescription
//     opengraphTitle
//     schemaDetails
//     opengraphImage {
//       sourceUrl
//     }
//     opengraphSiteName
//     opengraphPublishedTime
//     opengraphModifiedTime
//     twitterTitle
//     twitterDescription
//     twitterImage {
//       sourceUrl
//     }
//   }
// `;
