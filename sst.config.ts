import type { SSTConfig } from "sst";
import { AstroSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "guidoeduardodev",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new AstroSite(stack, "site", {
        customDomain: "guidoeduardo.dev",
      });
      stack.addOutputs({
        url: site.url,
      });
    });
  },
} satisfies SSTConfig;
