import http from 'http';
import path from 'path';
import fs from 'fs';

const hostname = '127.0.0.1';
const port = 3000;



const server = http.createServer((req, res) => 
{
  //res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  displayHome(res);
});

server.listen(port, hostname, () => 
{
  console.log(`Server running at http://${hostname}:${port}/`);
});

function displayHome(res: http.ServerResponse): void
{
  fs.readFile("index.html", (err,data) =>
{
if (err)
{
  res.writeHead(404);
  res.end("Error: 404 - Page not found");
  console.log("Error");
  return;
}

res.writeHead(200);
res.end(data);

});
}