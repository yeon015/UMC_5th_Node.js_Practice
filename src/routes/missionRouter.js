import express from "express";
import asyncHandler from "express-async-handler";
import { challengeMission } from "../controllers/mission.controller.js";

// mergeParams: true -> 는 controller에서 하위 routing인 storeId를 사용하기 위해 사용
export const missionRouter = express.Router({ mergeParams: true });

// 미션 도전 중
missionRouter.post(
  "/challenge/:missionId/:memberId",
  asyncHandler(challengeMission)
);
