const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Send a request");

  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Ana sayfaya hosgeldiniz.</h2>");
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Hakkimda sayfasina hosgeldiniz.</h2>");
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Iletisim sayfasina hosgeldiniz.</h2>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h2>Sayfa bulunamadi...</h2>");
  }

  res.end();
});

const port = 5000 || process.env.PORT;

server.listen(port, () => {
  console.log(`server started on port ${port}`);
});
