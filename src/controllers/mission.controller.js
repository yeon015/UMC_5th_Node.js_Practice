import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { insertMemberMission } from "../services/mission.service.js";

export const challengeMission = async (req, res, next) => {
  console.log("가게 미션 도전을 요청하였습니다!");
  console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

  res.send(
    response(
      status.SUCCESS,
      await insertMemberMission(req.params.missionId, req.params.memberId)
    )
  );
};
