import { graphql, useStaticQuery } from "gatsby";

export type SiteMetadata = {
  websiteHostname: string;
  title: string;
};

export default function useSiteMetadata(): SiteMetadata {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          websiteHostname
        }
      }
    }
  `);

  return data.site.siteMetadata;
}
