import { HeightValue, WeightValue } from "@lib/quiz-lib";
import { PageProps } from "gatsby";

export interface ISPageProps {}

export type SummaryPageState = {
  weight?: WeightValue;
  height?: HeightValue;
  age?: number;
  gender?: "male" | "female";
};

export default function SPage(props: ISPageProps & PageProps) {
  console.log(props);
  const pageState = props.location.state as SummaryPageState;
  console.log(pageState);

  return <div>summary page</div>;
}
