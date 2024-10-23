import NewsMedia from "@/components/pages/NewsMedia";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power BI",
};

export default function PowerBIPage() {
  return (
    <div className="flex justify-center min-h-screen items-center ">
      <iframe
        title="Dashboard Ekonomi Restoratif by AHI"
        width="1024"
        height="1060"
        src="https://app.powerbi.com/view?r=eyJrIjoiZDRhNDM4NzctMWVmMi00ZmI3LTk4NDgtYTA3MTM2NzhjZWQwIiwidCI6ImFmMmMwNzM0LWNiNDItNDY0Zi1iNmJmLTJhMjQxYjZhZGE1NiIsImMiOjEwfQ%3D%3D"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}
