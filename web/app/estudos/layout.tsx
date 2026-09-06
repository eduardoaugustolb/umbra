import type { Metadata } from "next";
import Link from "next/link";
import "./studies.css";
import { MotionCursor } from "../MotionCursor";

export const metadata: Metadata = { title: "Umbra — estudos de narrativa" };
export default function StudiesLayout({ children }: { children: React.ReactNode }) {
  return <div className="studies"><nav className="study-nav" aria-label="Estudos"><Link href="/estudos">umbra / estudos</Link><div><Link href="/estudos/01-presenca">01</Link><Link href="/estudos/02-continuidade">02</Link><Link href="/estudos/03-integracoes">03</Link><Link href="/">Landing ↗</Link></div></nav>{children}<MotionCursor /></div>;
}
