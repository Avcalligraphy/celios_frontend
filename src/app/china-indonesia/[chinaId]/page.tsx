import ChinaId from "@/components/pages/ChinaId";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "China Media",
};


export default function ChinaItem({ params }: { params: { chinaId: string } }) {


  return <ChinaId params={params} />
}
