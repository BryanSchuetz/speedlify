import { schedule } from '@netlify/functions';

// To learn about scheduled functions and supported cron extensions, 
// see: https://ntl.fyi/sched-func
export const handler = schedule("@weekly", async (event) => {
    fetch('https://api.netlify.com/build_hooks/65dcdb212e58231333d8a03d',{
      method: 'POST'
    }); 
    return {
        statusCode: 200
    };
});
