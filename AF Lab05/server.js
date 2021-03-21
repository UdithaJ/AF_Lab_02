
const Koa = require('koa');
const HomeRoutes = require('./routes/home.router.js');
const PostRoutes = require('./routes/post.route.js');
bodyParser  = require('koa-bodyparser');

const app = new Koa();

app.use(bodyParser());

app.use(HomeRoutes.routes())
    .use(HomeRoutes.allowedMethods())


app.use(PostRoutes.routes())
    .use(PostRoutes.allowedMethods());


app.use(ctx => {
    ctx.body = 'Hello';
});
app.listen(3000);
console.log('Application is running on port 3000');
