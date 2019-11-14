import * as sapper from "@sapper/server";

import compression from "shrink-ray-current";
import polka from "polka";
import sirv from "sirv";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

polka()
  .use(
    compression({
      filter: () => true,
      zlib: {
        level: 9
      },
      brotli: {
        quality: 11
      }
    }),
    sirv("static", { dev }),
    sapper.middleware()
  )
  .listen(PORT, err => {
    if (err) console.log("error", err);
  });
