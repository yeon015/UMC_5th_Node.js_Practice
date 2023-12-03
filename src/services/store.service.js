import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import { addReview, addMission } from "../models/store.dao";

// 리뷰 작성
export const insertReview = async (storeId, body) => {
  const reviewData = await addReview({
    memberId: 1,
    storeId: storeId,
    body: body.body,
    score: body.score,
  });

  if (reviewData == -1) {
    throw new BaseError(status.REVIEW_ALREADY_EXIST);
  } else {
    return "리뷰 작성 성공";
  }
};

// 미션 추가
export const insertMission = async (storeId, body) => {
  const missionData = await addMission({
    storeId: storeId,
    reward: body.reward,
    deadline: body.deadline,
    missionSpec: body.missionSpec,
  });

  if (missionData == -1) {
    throw new BaseError(status.STORE_NOT_EXIST);
  } else {
    return "미션 추가 성공";
  }
};
