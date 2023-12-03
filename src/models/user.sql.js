export const insertUserSql =
  "INSERT INTO user (email, user_name, gender, birth, user_address, user_spec_address, user_phone) VALUES (?, ?, ?, ?, ?, ?, ?);";

export const getUserID = "SELECT * FROM user WHERE user_id = ?";

export const connectFoodCategory =
  "INSERT INTO user_favor_category (f_category_id, user_id) VALUES (?, ?);";

export const confirmEmail =
  "SELECT EXISTS(SELECT 1 FROM user WHERE email = ?) as isExistEmail";

export const getPreferToUserID =
  "SELECT ufc.uf_category_id, ufc.f_category_id, ufc.user_id, fcl.f_category_name " +
  "FROM user_favor_category ufc JOIN food_category_list fcl on ufc.f_category_id = fcl.f_category_id " +
  "WHERE ufc.user_id = ? ORDER BY ufc.f_category_id ASC;";

export const getReviewByReviewId =
  "SELECT u.user_name, u.user_id, r.review_id, r.rate, r.review_content, r.created_at " +
  "FROM review r JOIN user u on r.user_id = u.user_id " +
  "WHERE r.user_id = ? AND r.review_id < ? " +
  "ORDER BY r.review_id DESC LIMIT ? ;";

export const getReviewByReviewIdAtFirst =
  "SELECT u.user_name, u.user_id, r.review_id, r.rate, r.review_content, r.created_at " +
  "FROM review r JOIN user u on r.user_id = u.user_id " +
  "WHERE r.user_id = ? " +
  "ORDER BY r.review_id DESC LIMIT ? ;";

export const getMissionByMissionId =
  "SELECT u.user_name, u.user_id, r.review_id, r.rate, r.review_content, r.created_at " +
  "FROM review r JOIN user u on r.user_id = u.user_id " +
  "WHERE r.user_id = ? AND r.mission_id < ? " +
  "ORDER BY r.mission_id DESC LIMIT ? ;";

export const getMissionByMissionIdAtFirst =
  "SELECT u.user_name, u.user_id, r.review_id, r.rate, r.review_content, r.created_at " +
  "FROM review r JOIN user u on r.user_id = u.user_id " +
  "WHERE r.user_id = ? " +
  "ORDER BY r.mission_id DESC LIMIT ? ;";
