import { __404Section } from "@/devlink/404Section";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Not Found"
};

export default function NotFound() {
  return (
    <main className="mb-[5%]">
      <__404Section />
    </main>
  );
}