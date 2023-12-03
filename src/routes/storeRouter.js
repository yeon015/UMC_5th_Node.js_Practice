import express from "express";
import asyncHandler from "express-async-handler";
import { addReview, addMission } from "../controllers/store.controller.js";

// mergeParams: true -> 는 controller에서 하위 routing인 storeId를 사용하기 위해 사용
export const storeRouter = express.Router({ mergeParams: true });

// 리뷰 작성
storeRouter.post("/reviews/:storeId", asyncHandler(addReview));

// 가게에 미션 추가
storeRouter.post("/missions/:storeId", asyncHandler(addMission));
