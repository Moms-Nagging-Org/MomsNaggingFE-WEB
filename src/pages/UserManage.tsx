import ManageUtil from '@/components/ManageUtil';
import useFetch from '@/hooks/useFetch';
import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { useState } from 'react';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import CustomLayout from '../components/Layout';

interface UsersResponse {
  content: Users[];
  totalPages: number;
  totalElements: number;
  size: number;
  empty: boolean;
}

interface Users {
  createdAt: string;
  device: string;
  id: number;
  naggingLevel: number;
  nickName: string;
  personalId: string;
  provider: string;
}

const columns: ColumnsType<Users> = [
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

const UserManage = () => {
  const { data: questions, loading } = useFetch<UsersResponse>('/users', 'GET');

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(parseInt(searchParams.get('page') ?? '1'));

  return (
    <CustomLayout data={questions} open="/user" title="회원관리">
      <ManageUtil />
      <Table
        pagination={{
          current: page,
          pageSize: questions?.totalPages,
          total: questions?.totalElements,
          onChange: (page) => {
            setPage(page);
            navigate({
              search: createSearchParams({
                page: page.toString(),
              }).toString(),
            });
          },
        }}
        rowKey={(item) => {
          return item.id;
        }}
        columns={columns}
        dataSource={questions?.content}
        loading={loading}
      />
    </CustomLayout>
  );
};

export default UserManage;
