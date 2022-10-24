import express from 'express'
import {
    createUserProfile,
    getUserProfiles,
    getUserProfile,
    deleteUserProfile
} from '../controllers/UserProfile'

import {
    verifyToken,
    verifyTokenAndAdmin,
    verifyTokenAndDriver,
    verifyTokenAndClient
} from '../middleware/Auth' 

const router = express.Router();


/**
 * @swagger
 * tags:
 *  name: User Profile
 *  description: User Profile
 * 
 * */


/**
 * @swagger
 * /api/v1/profile/user:
 *   get:
 *     summary: Getting all User Profile
 *     tags: [User Profile]
 *     responses:
 *       200:
 *         description: All available User Profile
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
 * /api/v1/profile/user/{id}:
 *  get:
 *    summary: get a User Profile
 *    tags:
 *    - "User Profile"
 *    parameters:
 *      - name: id
 *        in: path
 *        description: user id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *        200: 
 *          description: BookingHistory information
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
 *          description: user doesn't exist
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
 * /api/v1/profile/user/{id}:
 *  delete:
 *    summary: Deleting a User Profile
 *    tags:
 *    - "User Profile"
 *    parameters:
 *      - name: id
 *        in: path
 *        description: user id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *        200: 
 *          description: deleted user profile
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

router.route("/").post(createUserProfile).get(getUserProfiles)
router.route("/:id").get(getUserProfile).delete(deleteUserProfile)

export default router