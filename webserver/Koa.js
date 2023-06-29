const Koa = require("koa");

const app = new Koa();

// response
app.use((ctx) => {
  const url = ctx.url;
  if (url === "/") {
    ctx.body = "<h1>Ana Sayfa</h1>";
  } else if (url === "/about") {
    ctx.body = "<h1>Hakkimda Sayfasi</h1>";
  } else if (url === "/contact") {
    ctx.body = "<h1>Iletisim Sayfasi</h1>";
  } else {
    ctx.body = "<h1>404 SAYFA BULUNAMADI</h1>";
  }
});

const port = 3000 || process.env.PORT;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
