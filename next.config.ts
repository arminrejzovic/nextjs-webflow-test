import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: `/${process.env.NEXT_PUBLIC_BASE_PATH}`,
};

export default nextConfig;
// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
