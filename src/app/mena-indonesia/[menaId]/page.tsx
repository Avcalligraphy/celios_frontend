import ChinaId from "@/components/pages/ChinaId";
import MenaId from "@/components/pages/MenaId";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mena Media",
};

export default function MenaItem({ params }: { params: { chinaId: string } }) {
  return <MenaId params={params} />;
}
