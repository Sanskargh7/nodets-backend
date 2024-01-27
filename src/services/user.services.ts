import { hash } from "bcrypt";
import { CreateUserDto } from "../dtos/user.dtos";
import { HttpExceptions } from "../exceptions/HttpExceptions";
import { User } from "../interfaces/user.interface";
import usersModel from "../models/users.model";


class UserService {
	public users = usersModel;
	/**
 * Retrieves all users from the database.
 * @returns {Promise<User[]>} A promise that resolves to an array of User objects.
 */
	public async findAllUsers(): Promise<User[]> {
		const users: User[] = await this.users.find();
		return users;
	}
	/**
 * Finds a user by their ID.
 * @param {string} userId - The ID of the user to find.
 * @returns {Promise<User | null>} - A promise that resolves to the found user or null if not found.
 * @throws {HttpExceptions} - Throws a HttpExceptions with a 404 status code and an error message if the user ID is empty or if the user does not exist.
 */
	public async findUser(userId: string): Promise<User | null> {
		if (!userId) {
			throw new HttpExceptions(404, 'User Id is Empty');
		}
		const findUser: User | null = await this.users.findOne({ _id: userId });
		if (!findUser) {
			throw new HttpExceptions(404, 'User Does not exits');
		}
		return findUser;
	}
	/**
 * Creates a new user.
 * @param {CreateUserDto} userData - The data of the user to be created.
 * @returns {Promise<User | null>} - The created user data or null if user creation fails.
 * @throws {HttpExceptions} - Throws an exception if the user already exists.
 */
	public async createUser(userData: CreateUserDto): Promise<User | null> {

		const findUser: User | null = await this.users.findOne({ email: userData.email });
		if (findUser) {
			throw new HttpExceptions(400, `${findUser.email} Already Exists`)
		}
		const hashedPassword: string = await hash(userData.password, 10);
		const CreateUserData: User | null = await this.users.create({ ...userData, password: hashedPassword });
		return CreateUserData;


	}
	/**
 * Update a user with the given user ID and user data.
 * @param {string} userId - The ID of the user to update.
 * @param {CreateUserDto} userData - The data to update the user with.
 * @returns {Promise<User | null>} - The updated user, or null if the user does not exist.
 * @throws {HttpExceptions} - If the user does not exist or if there is an error updating the user.
 */
	public async updateUser(userId: string, userData: CreateUserDto): Promise<User | null> {

		const isExistUser: User | null = await this.users.findById({ _id: userId });
		if (!isExistUser) {

			throw new HttpExceptions(400, `${userId} Not Found!`);
		}
		if (userData.password) {
			const hashedPassword: string = await hash(userData.password, 10);
			userData = { ...userData, password: hashedPassword };
		}
		const updatedUser: User | null = await this.users.findByIdAndUpdate(userId, { userData });
		if (!updatedUser) {
			throw new HttpExceptions(400, 'User does not exists');
		}
		return updatedUser;

	}

	/**
	 * Deletes a user by their ID.
	 * @param {string} userId - The ID of the user to delete.
	 * @returns {Promise<User | null>} - A promise that resolves to the deleted user or null if the user does not exist.
	 * @throws {HttpExceptions} - Throws a HttpExceptions with a status code of 400 and a message of 'user not exists' if the user does not exist.
	 */
	public async deleteUser(userId: string): Promise<User | null> {
		const deleteUser: User | null = await this.users.findByIdAndDelete(userId);
		if (!deleteUser) {
			throw new HttpExceptions(400, 'user not exists');
		}
		return deleteUser;
	}

}
export default UserService;