import { createServer } from "node:http";
const name = "Shahab";
export const server = createServer((request, response) => {
  response.statusCode = 200;
  response.end(`Hello, ${name}!`);
});
