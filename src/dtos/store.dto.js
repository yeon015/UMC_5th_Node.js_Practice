export const previewReviewResponseDTO = (data) => {
  const reviews = [];

  for (let i = 0; i < data.length; i++) {
    reviews.push({
      user_name: data[i].user_name,
      rate: data[i].rate,
      review_body: data[i].review_content,
      create_date: formatDate(data[i].created_at),
    });
  }
  return { reviewData: reviews, cursorId: data[data.length - 1].review_id };
};

const formatDate = (date) => {
  return new Intl.DateTimeFormat("kr")
    .format(new Date(date))
    .replaceAll(" ", "")
    .slice(0, -1);
};

export const previewMissionResponseDTO = (data) => {
  const missions = [];

  for (let i = 0; i < data.length; i++) {
    missions.push({
      user_name: data[i].user_name,
      member_id: data[i].member_id,
      mission_id: data[i].mission_id,
      reward: data[i].reward,
      deadline: data[i],
      deadline,
      mission_spec: data[i].mission_spec,
      create_date: formatDate(data[i].created_at),
    });
  }
  return { missionData: missions, cursorId: data[data.length - 1].mission_id };
};
