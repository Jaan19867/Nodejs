const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers);
  const url = req.url;
  if (url === "/") {
    res.write("<html>");

    res.write(`
    <head>
      <title>Enter First Page</title>
    </head>
`);

    res.write("<body><form>input type='text'><button type='<body>");

    res.end();
  }
  res.setHeader("Conten-Type", "text/html");

  res.write("<html>");

  res.write(`
    <head>
      <title>My First Page</title>
    </head>
`);

  res.write("<body><h1> Hello from my Node.js Server!</h1><body>");

  res.end();
});
server.listen(3000);
