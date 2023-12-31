import { pool } from "../../config/db.config";
import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import {
  connectFoodCategory,
  confirmEmail,
  getUserID,
  insertUserSql,
  getPreferToUserID,
  getReviewByReviewIdAtFirst,
  getReviewByReviewId,
  getMissionByMissionIdAtFirst,
  getMissionByMissionId,
} from "./user.sql.js";

// User 데이터 삽입
export const addUser = async (data) => {
  try {
    const conn = await pool.getConnection();

    const [confirm] = await pool.query(confirmEmail, data.email);

    if (confirm[0].isExistEmail) {
      conn.release();
      return -1;
    }

    const result = await pool.query(insertUserSql, [
      data.email,
      data.name,
      data.gender,
      data.birth,
      data.addr,
      data.specAddr,
      data.phone,
    ]);

    conn.release();
    return result[0].insertId;
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

// 사용자 정보 얻기
export const getUser = async (userId) => {
  try {
    const conn = await pool.getConnection();
    const [user] = await pool.query(getUserID, userId);

    console.log(user);

    if (user.length == 0) {
      return -1;
    }

    conn.release();
    return user;
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

// 음식 선호 카테고리 매핑
export const setPrefer = async (userId, foodCategoryId) => {
  try {
    const conn = await pool.getConnection();

    await pool.query(connectFoodCategory, [foodCategoryId, userId]);

    conn.release();

    return;
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

// 사용자 선호 카테고리 반환
export const getUserPreferToUserID = async (userID) => {
  try {
    const conn = await pool.getConnection();
    const prefer = await pool.query(getPreferToUserID, userID);

    conn.release();

    return prefer;
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

export const getPreviewReview = async (cursorId, size, memberId) => {
  try {
    const conn = await pool.getConnection();

    if (
      cursorId == "undefined" ||
      typeof cursorId == "undefined" ||
      cursorId == null
    ) {
      const [reviews] = await pool.query(getReviewByReviewIdAtFirst, [
        parseInt(memberId),
        parseInt(size),
      ]);
      conn.release();
      return reviews;
    } else {
      const [reviews] = await pool.query(getReviewByReviewId, [
        parseInt(memberId),
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

export const getPreviewMission = async (cursorId, size, memberId) => {
  try {
    const conn = await pool.getConnection();

    if (
      cursorId == "undefined" ||
      typeof cursorId == "undefined" ||
      cursorId == null
    ) {
      const [missions] = await pool.query(getMissionByMissionIdAtFirst, [
        parseInt(memberId),
        parseInt(size),
      ]);
      conn.release();
      return missions;
    } else {
      const [missions] = await pool.query(getMissionByMissionId, [
        parseInt(memberId),
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
