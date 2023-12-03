import { pool } from "../../config/db.config";
import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import {
  confirmStore,
  confirmReview,
  insertReviewSql,
  insertMissionSql,
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
