import { ColumnsType } from 'antd/lib/table';

export interface DashBoardResponse {
  service: Services;
  grade: Levels;
}

export interface Levels {
  [level: string]: string;
}

export interface Services {
  nofQuestions: number;
  nofUsers: number;
}

export interface QuestionsResponse {
  content: Questions[];
  totalPages: number;
  totalElements: number;
  size: number;
  empty: boolean;
}

export interface Questions {
  id: number;
  title: string;
  context: string;
  userId: number;
  createdAt: string;
}

export const questionsColumns: ColumnsType<Questions> = [
  {
    title: '문의 일자',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (value) => <div>{value.slice(0, 10)}</div>,
  },
  {
    title: '아이디',
    dataIndex: 'userId',
    key: 'userId',
  },
  {
    title: '문의 제목',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '문의 내용',
    key: 'context',
    dataIndex: 'context',
  },
];

export interface SignOutResponse {
  content: SignOut[];
  totalPages: number;
  totalElements: number;
  size: number;
  empty: boolean;
}

export interface SignOut {
  context: string;
  id: number;
  title: string;
  createdAt: string;
}

export const SignOutColumns: ColumnsType<SignOut> = [
  {
    title: '탈퇴 일자',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (value) => <div>{value.slice(0, 10)}</div>,
  },
  {
    title: '아이디',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '탈퇴 사유',
    dataIndex: 'title',
    key: 'title',
  },
];

export interface UsersResponse {
  content: Users[];
  totalPages: number;
  totalElements: number;
  size: number;
  empty: boolean;
}

export interface Users {
  createdAt: string;
  device: string;
  id: number;
  naggingLevel: number;
  nickName: string;
  personalId: string;
  provider: string;
}

export const userColumns: ColumnsType<Users> = [
  {
    title: '가입 일자',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (value) => <div>{value.slice(0, 10)}</div>,
  },
  {
    title: '기기',
    dataIndex: 'device',
    key: 'device',
  },
  {
    title: '로그인',
    dataIndex: 'provider',
    key: 'provider',
  },
  {
    title: '아이디',
    key: 'personalId',
    dataIndex: 'personalId',
  },
  {
    title: '호칭',
    key: 'nickName',
    dataIndex: 'nickName',
  },
  {
    title: '잔소리 강도',
    key: 'naggingLevel',
    dataIndex: 'naggingLevel',
  },
];
