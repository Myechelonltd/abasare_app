import express from 'express'
import {
    createUser,
    getUsers,
    getUser,
    deletedUser
} from '../controllers/User'

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName   
 *         - email
 *         - telephone
 *       properties:
 *         firstName:
 *           type: string
 *           description: firstname of the user 
 *         lastName:
 *           type: string
 *           description: lastname of the user 
 *         email:
 *           type: string
 *           description: email of the user 
 *         telephone:
 *           type: string
 *           description: telephone of the user
 *       example:
 *         firstname: John
 *         lastname: Doe  
 *         email: name@gmail.com
 *         telephone: 078699866
 *   error: 
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *        data:
 *          type: null
 *        message:
 *          type: string    
 */

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: Users
 * 
 * */ 

/**
 * @swagger 
 * /api/v1/users/create:
 *  post:
 *    summary: Creating user
 *    tags:
 *    - "Users"
 *    requestBody:
 *      content:
 *        application/json:
 *            schema:
 *              required: true
 *              properties:
 *                 firstName:
 *                    type: string
 *                    description: This string of firstname
 *                 lastName:
 *                    type: string
 *                    description: This string of lastname
 *                 telephone:
 *                    type: string
 *                    description: This string of 10 telephone number
 *                 email:
 *                    type: string
 *                    description: This string of your email
 *    responses:
 *        200: 
 *          description: User have been created
 *          content:
 *            application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                    status:
 *                      type: string
 *                    data:
 *                      type: object 
 *                    message:
 *                      type: string                        
 *        400:
 *          description: Invalid inputs
 *          content:
 *              application/json:
 *                schema: 
 *                  $ref: "#/components/schemas/error"
 *        500:
 *          description: Server error
 *          content:
 *              application/json:
 *                schema: 
 *                  $ref: "#/components/schemas/error"   
 * */

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: Getting all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: All available Users
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Internal server error 
*/  

/**
 * 
 * @swagger  
 * /api/v1/users/{id}:
 *  get:
 *    summary: get a user
 *    tags:
 *    - "Users"
 *    parameters:
 *      - name: id
 *        in: path
 *        description: user id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *        200: 
 *          description: User information
 *          content:
 *            application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                    status:
 *                      type: string
 *                    data:
 *                      type: integer
 *                    message:
 *                      type: string  
 *                        
 *        400:
 *          description: Invalid inputs
 *          content:
 *              application/json:
 *                schema: 
 *                  $ref: "#/components/schemas/error"
 *        404:
 *          description: User doesn't exist
 *          content:
 *              application/json:
 *                schema: 
 *                  $ref: "#/components/schemas/error"
 *        500:
 *          description: Server error
 *          content:
 *              application/json:
 *                schema: 
 *                  $ref: "#/components/schemas/error"      
 * */ 


/**
 * @swagger 
 * 
 * /api/v1/users/{id}:
 *  delete:
 *    summary: Deleting a user
 *    tags:
 *    - "Users"
 *    parameters:
 *      - name: id
 *        in: path
 *        description: user id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *        200: 
 *          description: deleted user
 *          content:
 *            application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                    status:
 *                      type: string
 *                    data:
 *                      type: integer
 *                    message:
 *                      type: string  
 *                        
 *        400:
 *          description: Invalid inputs
 *          content:
 *              application/json:
 *                schema: 
 *                  $ref: "#/components/schemas/error"
 *        500:
 *          description: Server error
 *          content:
 *              application/json:
 *                schema: 
 *                  $ref: "#/components/schemas/error"      
 * */ 

router.post("/create", createUser);
router.get("/", getUsers);
router.get("/:id", getUser);
router.delete("/:id", deletedUser);

export default router