export {
  singout,
  register_company,
  register_student,
  current_user,
  login_company,
  login_student,
  admin_login,
} from './authAction';

export {
  company_data,
  vacancy_post,
  vacancys,
  vacancyNotification,
  getNotifacations,
  updateVisited,
} from './company';

export { colleges_data } from './collegeAction';

export { student_data, data_reset, single_Data, college_data, studenst_data } from './student';

export { delet_user } from './deleteUser';

export { update_user, company_updated, student_updated } from './updateUser';
