import { pool } from "../../config/db.config";
import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import {
  confirmStore,
  confirmReview,
  insertReviewSql,
  insertMissionSql,
  getReviewByReviewIdAtFirst,
  getReviewByReviewId,
  getMissionByMissionIdAtFirst,
  getMissionByMissionId,
} from "./store.sql.js";

// 리뷰 작성
export const addReview = async (data) => {
  try {
    const conn = await pool.getConnection();

    // 가게 존재 여부 확인
    const [confirm1] = await pool.query(confirmStore, data.storeId);
    if (confirm1[0].isExistStore) {
      conn.release();
      return -1;
    }

    // 리뷰 유무 여부 확인
    const [confirm2] = await pool.query(confirmReview, [
      data.storeId,
      data.memberId,
    ]);
    if (confirm2[0].isExistReview) {
      conn.release();
      return -1;
    }

    // 리뷰 작성
    const result = await pool.query(insertReviewSql, [
      data.memberId,
      data.storeId,
      data.body,
      data.score,
    ]);

    conn.release();
    return result[0].insertId;
  } catch (err) {
    throw new BaseError(status.BAD_REQUEST);
  }
};

// 미션 등록
export const addMission = async (data) => {
  try {
    const conn = await pool.getConnection();

    // 가게 존재 여부 확인
    const [confirm] = await pool.query(confirmStore, data.storeId);
    if (confirm[0].isExistStore) {
      conn.release();
      return -1;
    }

    // 미션등록
    const result = await pool.query(insertMissionSql, [
      data.storeId,
      data.reward,
      data.deadline,
      data.missionSpec,
    ]);

    conn.release();
    return result[0].insertId;
  } catch (err) {
    throw new BaseError(status.BAD_REQUEST);
  }
};

export const getPreviewReview = async (cursorId, size, storeId) => {
  try {
    const conn = await pool.getConnection();

    if (
      cursorId == "undefined" ||
      typeof cursorId == "undefined" ||
      cursorId == null
    ) {
      const [reviews] = await pool.query(getReviewByReviewIdAtFirst, [
        parseInt(storeId),
        parseInt(size),
      ]);
      conn.release();
      return reviews;
    } else {
      const [reviews] = await pool.query(getReviewByReviewId, [
        parseInt(storeId),
        parseInt(cursorId),
        parseInt(size),
      ]);
      conn.release();
      return reviews;
    }
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

export const getPreviewMission = async (cursorId, size, storeId) => {
  try {
    const conn = await pool.getConnection();

    if (
      cursorId == "undefined" ||
      typeof cursorId == "undefined" ||
      cursorId == null
    ) {
      const [missions] = await pool.query(getMissionByMissionIdAtFirst, [
        parseInt(storeId),
        parseInt(size),
      ]);
      conn.release();
      return missions;
    } else {
      const [missions] = await pool.query(getMissionByMissionId, [
        parseInt(storeId),
        parseInt(cursorId),
        parseInt(size),
      ]);
      conn.release();
      return missions;
    }
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};
