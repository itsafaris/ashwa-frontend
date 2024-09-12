import { type HeadFC } from "gatsby";
import { SEO } from "@components/SEO";
import { SummaryPage } from "@funnels/quiz-1/SummaryPage";

export const Head: HeadFC = () => {
  return <SEO />;
};

export default SummaryPage;
