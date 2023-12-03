import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { insertReview, insertMission } from "../services/store.service.js";

import { getReview, getMission } from "../providers/store.provider.js";

// 리뷰 작성
export const addReview = async (req, res, next) => {
  console.log("리뷰 작성을 요청하였습니다!");
  console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

  res.send(
    response(status.SUCCESS, await insertReview(req.params.storeId, req.body))
  );
};

// 미션 추가
export const addMission = async (req, res, next) => {
  console.log("미션 추가를 요청하였습니다!");
  console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

  res.send(
    response(status.SUCCESS, await insertMission(req.params.storeId, req.body))
  );
};

//
export const reviewPreview = async (req, res, next) => {
  return res.send(
    response(status.SUCCESS, await getReview(req.params.storeId, req.query))
  );
};

// 특정 가게의 미션 목록
export const missionPreview = async (req, res, next) => {
  return res.send(
    response(status.SUCCESS, await getMission(req.params.storeId, req.query))
  );
};
