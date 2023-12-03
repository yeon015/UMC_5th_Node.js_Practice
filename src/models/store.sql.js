export const insertReviewSql =
  "INSERT INTO user (member_id, store_id, body, score) VALUES (?, ?, ?, ?);";

export const insertMissionSql =
  "INSERT INTO user (store_id, reward, deadline, mission_spec) VALUES (?, ?, ?, ?);";

export const confirmStore =
  "SELECT EXISTS(SELECT 1 FROM store WHERE store_id = ?) as isExistStore";

export const confirmReview =
  "SELECT EXISTS(SELECT 1 FROM review WHERE review_id = ?) as isExistReview";

export const getReviewByReviewId =
  "SELECT u.user_name, u.user_id, r.review_id, r.rate, r.review_content, r.created_at " +
  "FROM review r JOIN user u on r.user_id = u.user_id " +
  "WHERE r.restaurant_id = ? AND r.review_id < ? " +
  "ORDER BY r.review_id DESC LIMIT ? ;";

export const getReviewByReviewIdAtFirst =
  "SELECT u.user_name, u.user_id, r.review_id, r.rate, r.review_content, r.created_at " +
  "FROM review r JOIN user u on r.user_id = u.user_id " +
  "WHERE r.restaurant_id = ? " +
  "ORDER BY r.review_id DESC LIMIT ? ;";

export const getMissionByMissionId =
  "SELECT u.user_name, u.user_id, r.review_id, r.rate, r.review_content, r.created_at " +
  "FROM review r JOIN user u on r.user_id = u.user_id " +
  "WHERE r.restaurant_id = ? AND r.mission_id < ? " +
  "ORDER BY r.mission_id DESC LIMIT ? ;";

export const getMissionByMissionIdAtFirst =
  "SELECT u.user_name, u.user_id, r.review_id, r.rate, r.review_content, r.created_at " +
  "FROM review r JOIN user u on r.user_id = u.user_id " +
  "WHERE r.mission_id = ? " +
  "ORDER BY r.mission_id DESC LIMIT ? ;";
