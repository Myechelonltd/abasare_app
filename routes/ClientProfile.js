import express from 'express'
import {
    getClients,
    getClient,
    deletedClient,
    updatedDriver
} from '../controllers/ClientProfile'
import {
    verifyToken,
    verifyTokenAndClient
} from '../middleware/Auth'

const router = express.Router();

router.route("/").get(getClients)
router.route("/:id").get(getClient).delete(deletedClient).put(updatedDriver)

export default router