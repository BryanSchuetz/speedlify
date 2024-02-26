// YOUR_BASE_DIRECTORY/netlify/functions/test-scheduled-function.mts

import type { Config } from "@netlify/functions"

export default async (req: Request) => {
  fetch('https://api.netlify.com/build_hooks/65dcdb212e58231333d8a03d',{
    method: 'POST'
  }); 
  return {
      statusCode: 200
  };
}

export const config: Config = {
    schedule: "@weekly"
}
