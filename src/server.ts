import App from "./App";
import UserRoute from "./routes/user.routes";

const app = new App([new UserRoute()]);
app.listen();





