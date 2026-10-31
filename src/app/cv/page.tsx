import type { Metadata } from "next"
import { CvViewer } from "@/components/cv/CvViewer"

export const metadata: Metadata = {
  title: "CV | Omar",
  description: "Preview the CV of Omar, Riyadh-based web developer and UI designer.",
}

export default function CvPage() {
  return <CvViewer />
}
