const http = require('http');
const port = parseInt(process.env.PORT, 10) || 3000;

const redirect = (request, response) => {
  console.log(response);
  response.writeHead(302, { 'Location': 'https://kwizkwiz.com' });
  response.end();
}

http.createServer(redirect).listen(port);
