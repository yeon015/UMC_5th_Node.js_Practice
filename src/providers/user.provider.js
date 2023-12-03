import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import { getPreviewReview, getPreviewMission } from "../models/user.dao";
import { previewReviewResponseDTO } from "../models/store.dto";

import { previewMissionResponseDTO } from "../models/user.dto";

export const getReviewsByMemberId = async (memberId, query) => {
  const { reviewId, size = 3 } = query;
  return previewReviewResponseDTO(
    await getPreviewReview(reviewId, size, memberId)
  );
};

export const getMemberMission = async (memberId, query) => {
  const { missionId, size = 3 } = query;
  return previewMissionResponseDTO(
    await getPreviewMission(missionId, size, memberId)
  );
};
