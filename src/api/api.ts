import axios from 'axios';

const PROXY_URL = window.location.hostname === 'localhost' ? '' : '/proxy';

const instance = axios.create({
  baseURL: `${PROXY_URL}`,
  timeout: 5000,
});

// 문의사항 전체 가져오기
export const questionsApi = async () => {
  return instance({
    url: `/api/v1/admin/questions`,
    method: 'GET',
  });
};

// 추천 습관 카테고리별 가져오기
export const categoriesApi = async (categoryId: number) => {
  return instance({
    url: `/api/v1/admin/schedules/categories/${categoryId}`,
    method: 'GET',
  });
};

//탈퇴사유 전체 가져오기
export const singOutApi = async () => {
  return instance({
    url: `/api/v1/admin/singout`,
    method: 'GET',
  });
};

//회원 정보 전체 가져오기
export const usersApi = async () => {
  return instance({
    url: `/api/v1/admin/users`,
    method: 'GET',
  });
};
