import { Request, Response, Router } from "express";
import UsersControllers from "../controllers/user.controller";
import { Routes } from "../interfaces/routes.interface";


class UserRoute implements Routes {
	public path = '/users';
	public router = Router();
	public userController = new UsersControllers();
	constructor() {
		this.initializeRoutes()
	}

	private initializeRoutes() {
		//fetch all users
		this.router.get(`${this.path}/test`, (req: Request, res: Response) => {
			res.status(200).send({ message: "Wellcome to aws" })
		})
		this.router.get(`${this.path}`, this.userController.getUsers);
		//fetch user
		this.router.get(`${this.path}/:id`, this.userController.getUser);
		//create user info
		this.router.post(`${this.path}/create-user`, this.userController.createUser);
		//delete user from table
		this.router.post(`${this.path}/:id`, this.userController.deleteUser);

	}

}
export default UserRoute;