import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import { getPreviewReview, getPreviewMission } from "../models/store.dao";
import {
  previewReviewResponseDTO,
  previewMissionResponseDTO,
} from "../models/store.dto";

export const getReview = async (storeId, query) => {
  const { reviewId, size = 3 } = query;
  return previewReviewResponseDTO(
    await getPreviewReview(reviewId, size, storeId)
  );
};

export const getMission = async (storeId, query) => {
  const { missionId, size = 3 } = query;
  return previewMissionResponseDTO(
    await getPreviewMission(missionId, size, storeId)
  );
};
