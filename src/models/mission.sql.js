export const insertMemberMissionSql =
  "INSERT INTO user (member_id, store_id, body, score) VALUES (?, ?, ?, ?);";

export const confirmMission =
  "SELECT EXISTS(SELECT 1 FROM mission WHERE mission_id = ?) as isExistMission";

export const confirmMemberMission =
  "SELECT EXISTS(SELECT 1 FROM member_mission WHERE member_id = ? and mission_id = ? and status = ?) as isExistMemberMission";
