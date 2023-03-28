import CandidateInfoCard from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Organisms/Candidate Information",
  Component: CandidateInfoCard,
} as ComponentMeta<typeof CandidateInfoCard>;

export const Information: ComponentStory<typeof CandidateInfoCard> = () => (
  <CandidateInfoCard />
);
