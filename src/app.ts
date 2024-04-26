import http from "node:http";
import express, {
  Express,
  Application,
  Request,
  Response,
  NextFunction,
} from "express";
import dotenv from "dotenv";
import appRoutes from "./route";
import NotFound from "./custom-errors/NotFound";
import ErrorHandler from "./custom-errors/ErrorHandler";

dotenv.config();
class App {
  public _application: Application;
  private readonly _port: number | string;

  constructor() {
    this._application = express();
    this._port = process.env.PORT || 5000;
  }

  private _plugins(): void {}
  private _routes(): void {
    this._application.use((req, res, next) => {
      console.log(`Hitting url: `, req.method, req.originalUrl);
      next();
    });
    this._application.use("/api", appRoutes);
    //catch all the not matched routes!
    this._application.use(
      "*",
      function (req: Request, res: Response, next: NextFunction) {
        const method = req.method;
        const url = req.originalUrl;
        const host = req.hostname;

        const endpoint = `${host}${url}`;
        //NOTE: As this is not a async function so we don't need to throw it from catch block it will automatically go to the default error handler.
        throw new NotFound(
          `Sorry, the ${endpoint} HTTP method ${method} resource you are looking for was not found.`
        );
      }
    );

    this._application.use(ErrorHandler);
  }

  public app(): Application {
    return this._application;
  }

  public run(): void {
    this._application.set("port", this._port);
    const server = http.createServer(this._application);

    const onListening = (): void => {
      const addr = server.address();
      const bind = typeof addr === "string" ? `${addr}` : `${addr?.port}`;
      const host = `http://localhost:${bind}`;
      const env = process.env.NODE_ENV;
      const message = `Server listening on ${host} ⚡️ & Env: ${env} 🚀`;
      console.log(message);
    };
    server.listen(this._port);
    server.on("listening", onListening);
  }
}
export default App