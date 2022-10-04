import { success, fail, sendError,  } from '../function/respond'
import { validateUsersOnCreate } from '../function/validation'
import User from '../models/User'

const createUser = async (req, res) => {

    try {
        const { firstName, lastName, email, telephone } = req.body
        const {error} = validateUsersOnCreate({firstName, lastName, email, telephone})
        if(error){
            return fail(res, 400, error.details[0].message, null);
        }
        const newUser = new User({
            firstName: firstName,
            lastName:lastName,
            email: email,
            telephone: telephone,
        });
        const findUser = await User.findOne({ email: email });
        if (findUser) return sendError(res, 409, "This email address exist", null);

        const userSaved = await newUser.save();
        return success(res, 201, "User added successfully", userSaved)
    } catch (error) {
        return sendError(res, 500, error.message, null)
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await User.find().sort("-createdAt");
        return success(res, 200, "retrieved all users", users)
    } catch (error) {
        return sendError(res, 500, error.message, null)
    }
}

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) return fail(res, 400, "user doesn't exist", null)
        return success(res, 200, "retrieved Users", user)

    } catch (error) {
        return sendError(res, 500, error.message, null)
    }
}

const deletedUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user) return fail(res, 400, "user doesn't exist", null)
        return success(res, 200, "user deleted successful", null)
    } catch (error) {
        return sendError(res, 500, error.message, null)
    }
}

export  {  
	createUser, 
	getUsers, 
	getUser, 
	deletedUser,
 };