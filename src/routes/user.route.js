// routes/user.route.js
import express from "express";
import asyncHandler from "express-async-handler";
import {
  userSignin,
  getMyReviews,
  getMyMissions,
} from "../controllers/user.controller.js";

export const userRouter = express.Router({ mergeParams: true });

userRouter.post("/signin", asyncHandler(userSignin));

// 내가 작성한 리뷰 목록
userRouter.get("/reviews/:memberId", asyncHandler(getMyReviews));

// 내가 진행 중인 미션 목록
userRouter.get("/missions/:memberId", asyncHandler(getMyMissions));
