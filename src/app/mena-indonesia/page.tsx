
import Mena from "@/components/pages/Mena";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mena-Indonesia Relations",
  description:
    "Middle-East and North Africa-Indonesia realtions desk provide analysis about the political economy of indonesia's relations with the middle Eastern and North African countries.",
};

export default function MenaPage() {
  return <Mena />;
}
