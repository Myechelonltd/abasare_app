import express from 'express'
import {
    createRides,
    getRides,
    getRide,
    deletedRides,
    updatedRide
} from '../controllers/NewRides'

const router = express.Router();

/**
 * @swagger
 * tags:
 *  name: AllRides
 *  description: AllRides
 * 
 * */

/**
 * @swagger
 * /api/v1/rides:
 *   get:
 *     summary: Getting all AllRides
 *     tags: [AllRides]
 *     responses:
 *       200:
 *         description: All available AllRides
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
 * /api/v1/rides/{id}:
 *  get:
 *    summary: get a AllRides
 *    tags:
 *    - "AllRides"
 *    parameters:
 *      - name: id
 *        in: path
 *        description: AllRides id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *        200: 
 *          description: AllRides information
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
 *          description: Ride doesn't exist
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
 * /api/v1/rides/{id}:
 *  delete:
 *    summary: cancel a AllRides
 *    tags:
 *    - "AllRides"
 *    parameters:
 *      - name: id
 *        in: path
 *        description: AllRides id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *        200: 
 *          description: delete AllRides
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


router.route("/").post(createRides).get(getRides)
router.route("/:id").get(getRide).delete(deletedRides).put(updatedRide)
export default router