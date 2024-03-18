//json server import
const jsonServer = require('json-server');
//create server
const server = jsonServer.create();
//db.json으로 라우팅을 하겠다.
const router = jsonServer.router('db.json');
//서버를 띄울 때 필요한 미들웨어
const middlewares = jsonServer.defaults();

//셋팅
server.use(middlewares);
server.use(router);
//3000번 포트에 연결
server.listen(3000, () => {
    console.log('JSON Server is running');
});
