const { schedule } = require('@netlify/functions');

const handler = async function(event, context){
  fetch('https://api.netlify.com/build_hooks/65dcdb212e58231333d8a03d', {
    method: 'POST'
  });
  return {
    statusCode: 200,
  };
}

module.exports.handler = schedule('daily', handler);