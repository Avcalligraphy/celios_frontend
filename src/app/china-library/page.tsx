import ChinaLibrary from "@/components/pages/ChinaLibrary";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "China-Library",
  description:
    "China-Indonesia Library at CELIOS is a bibliography which covers all aspects of modern China-Indonesia relations—politics, energy, trade, investment, and the rare discussion of cultural aspects. For now, only English and Bahasa materials are included in this bibliography. Nonetheless, Chinese language materials will be added here soon.",
};
export default function ChinaLibraryPage() {

  return <ChinaLibrary />
}
