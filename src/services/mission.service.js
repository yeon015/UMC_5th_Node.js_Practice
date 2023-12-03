import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import { addMemberMission } from "../models/mission.dao";

// 리뷰 작성
export const insertMemberMission = async (missionId, memberId) => {
  const memberMissionData = await addMemberMission({
    memberId: memberId,
    missionId: missionId,
    status: "도전",
  });

  if (memberMissionData == -1) {
    throw new BaseError(status.STORE_NOT_EXIST);
  } else {
    return "미션 도전 성공";
  }
};
