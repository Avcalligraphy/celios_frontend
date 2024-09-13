import Trainings from "@/components/pages/Trainings";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trainings",
  description:
    "November 2022-Mr. Bhima Yudhistira, executive director of the think-tank Centre of Economic and Law Studies, and Dr. Mohammad Faisal, executive director of Core Indonesia, also a think-tank, said that industrialization –Celios has partnered with national and international media to hold the G20 2022 brief on energy transition, economic recovery post-pandemic and fiscal reform",
};
export default function TrainingsPage() {
 
  return <Trainings />
}