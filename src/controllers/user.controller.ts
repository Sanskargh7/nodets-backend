import { NextFunction, Request, Response } from "express";
import { CreateUserDto } from "../dtos/user.dtos";
import { HttpExceptions } from "../exceptions/HttpExceptions";
import { User } from "../interfaces/user.interface";
import UserService from "../services/user.services";



class UsersControllers {
	public userService = new UserService();

	public getUsers = async (req: Request, res: Response, next: NextFunction) => {

		try {
			const findAllUsersData: User[] = await this.userService.findAllUsers();
			res.status(200).json({ data: findAllUsersData, message: "findAll" })

		} catch (error) {
			next(error);
		}
	}

	public getUser = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const userId: string = req.params.id;
			const findUserData: User | null = await this.userService.findUser(userId);
			if (findUserData === null) {
				throw new HttpExceptions(400, 'User Not Found');
			}
			res.status(200).json({ data: findUserData, message: "find user" })
		} catch (error) {
			next(error)
		}
	}

	public createUser = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const userData: CreateUserDto = req.body;
			console.log(req.body);
			const createUser: User | null = await this.userService.createUser(userData);
			res.status(201).json({ data: createUser, message: "User created successfully" })
		} catch (error) {
			next(error);
		}
	}

	public updateUser = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const userId: string = req.params.id;
			const userData: CreateUserDto = req.body;
			const updateUserData: User | null = await this.userService.updateUser(userId, userData);
			res.status(200).json({ data: updateUserData, message: "User Updated" })
		} catch (error) {
			next(error)
		}
	}

	public deleteUser = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const userId: string = req.params.id;
			const deletedUser: User | null = await this.userService.deleteUser(userId);
			res.status(200).json({ data: deletedUser, message: "user is deleted!" })
		} catch (error) {
			next(error)
		}

	}


}

export default UsersControllers;