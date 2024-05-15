import { defineConfig } from "astro/config";
import aws from "astro-sst";
import preact from "@astrojs/preact";

export default defineConfig({
  adapter: aws(),
  site: "https://example.com",
  integrations: [preact()],
});
