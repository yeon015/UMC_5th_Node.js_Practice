export const insertReviewSql =
  "INSERT INTO user (member_id, store_id, body, score) VALUES (?, ?, ?, ?);";

export const insertMissionSql =
  "INSERT INTO user (store_id, reward, deadline, mission_spec) VALUES (?, ?, ?, ?);";

export const confirmStore =
  "SELECT EXISTS(SELECT 1 FROM store WHERE store_id = ?) as isExistStore";

export const confirmReview =
  "SELECT EXISTS(SELECT 1 FROM review WHERE review_id = ?) as isExistReview";
