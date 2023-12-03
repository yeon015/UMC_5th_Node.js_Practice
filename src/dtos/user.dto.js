// sign in response DTO
export const signinResponseDTO = (user, prefer) => {
  const preferFood = [];
  for (let i = 0; i < prefer[0].length; i++) {
    preferFood.push(prefer[0][i].f_category_name);
  }
  return {
    email: user[0].email,
    name: user[0].user_name,
    preferCategory: preferFood,
  };
};

export const previewMissionResponseDTO = (data) => {
  const missions = [];

  for (let i = 0; i < data.length; i++) {
    missions.push({
      member_id: data[i].member_id,
      mission_id: data[i].mission_id,
      status: data[i].status,
      create_date: formatDate(data[i].created_at),
    });
  }
  return { missionData: missions, cursorId: data[data.length - 1].mission_id };
};
