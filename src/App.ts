import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import { connect } from 'mongoose';
import { Routes } from './interfaces/routes.interface';

class App {
	public app: express.Application;
	public env: string;
	public port: string | number;
	public MONGODB_URI: string = 'mongodb+srv://gaurav:3gANONaT61B5g4RP@cluster0.94qn5u5.mongodb.net/assessment_db_dev'

	constructor(routes: Routes[]) {
		this.app = express();
		this.port = 3000;
		this.env = 'Production';
		this.connectToDatabase();
		this.initializeMiddlewares();
		this.initializeRoutes(routes);

	}
	public listen() {
		this.app.listen(this.port, () => {
			console.log("Backend with typescript is started successfully  " + this.port);
		})
	}

	private connectToDatabase() {
		if (this.env === 'Production') {
			connect(this.MONGODB_URI).then(() => {
				console.log('database is connected')
			}).catch((error) => console.log(error))
		}

	}

	private initializeRoutes(routes: Routes[]) {
		routes.forEach((route) => {
			this.app.use('/', route.router);
		})
	}

	//initialize middlewares
	private initializeMiddlewares() {
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));
		this.app.use(hpp());
		this.app.use(helmet());
		this.app.use(compression());
		this.app.use(cors());
		// this.app.use(morgan());

	}

}
export default App;