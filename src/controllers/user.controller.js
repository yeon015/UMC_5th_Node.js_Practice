import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { joinUser } from "../services/user.service.js";

import {
  getReviewsByMemberId,
  getMemberMission,
} from "../providers/user.provider.js";

export const userSignin = async (req, res, next) => {
  console.log("회원가입을 요청하였습니다!");
  console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

  res.send(response(status.SUCCESS, await joinUser(req.body)));
};

// 내가 작성한 리뷰 목록
export const getMyReviews = async (req, res, next) => {
  console.log("내가 작성한 리뷰 목록을 요청하였습니다.");
  res.send(
    response(
      status.SUCCESS,
      await getReviewsByMemberId(req.params.memberId, req.query)
    )
  );
};

// 내가 진행 중인 미션 목록
export const getMyMissions = async (req, res, next) => {
  console.log("내가 진행중인 미션 목록을 요청하였습니다.");
  res.send(
    response(
      status.SUCCESS,
      await getMemberMission(req.params.memberId, req.query)
    )
  );
};
