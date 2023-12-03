import { pool } from "../../config/db.config";
import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import {
  confirmMission,
  confirmMemberMission,
  insertMemberMissionSql,
} from "./mission.sql.js";

// 리뷰 작성
export const addMemberMission = async (data) => {
  try {
    const conn = await pool.getConnection();

    // 미션 존재 확인
    const [confirm1] = await pool.query(confirmMission, data.missionId);
    if (confirm1[0].isExistMission) {
      conn.release();
      return -1;
    }

    // 해당 유저의 미션 여부 확인
    const [confirm2] = await pool.query(confirmMemberMission, [
      data.memberId,
      data.missionId,
      data.status,
    ]);
    if (confirm2[0].isExistMemberMission) {
      conn.release();
      return -1;
    }

    // 도전 미션 등록
    const result = await pool.query(insertMemberMissionSql, [
      data.memberId,
      data.missionId,
      data.status,
    ]);

    conn.release();
    return result[0].insertId;
  } catch (err) {
    throw new BaseError(status.BAD_REQUEST);
  }
};
