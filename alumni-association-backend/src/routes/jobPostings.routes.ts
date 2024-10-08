import express, { Request, Response } from "express";
import prisma from "../utils/prisma";
import {authenticateJWT , authorizeAdmin,checkRole} from "../middlewares/authMiddleware"
import { createJobPosting, getAllJobPostings, getJobPostingById } from "../controllers/jobPostings.controllers";
const router = express.Router();

router.route('/create').post(authenticateJWT, checkRole(['admin', 'alumni']), createJobPosting);
router.route('/getAlljobPostings').get(getAllJobPostings);
router.route('/getjobPosting/:id').get(getJobPostingById);



  
export default router;
