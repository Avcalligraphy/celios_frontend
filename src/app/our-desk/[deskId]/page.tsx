import DeskId from "@/components/pages/DeskId";
import { Metadata } from "next";

// Function to generate dynamic metadata based on deskId
export async function generateMetadata({
  params,
}: {
  params: { deskId: string };
}): Promise<Metadata> {
  const { deskId } = params;

  // Here you can dynamically fetch or construct the title/description
  const title = deskId
    .split("-")
    .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const description = `Detailed report for Desk ID ${deskId}.`;

  return {
    title,
    description,
  };
}

export default function CeliosDesk({ params }: { params: { deskId: string } }) {
  return <DeskId params={params} />;
}
