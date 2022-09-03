import CustomLayout from '@/components/Layout';
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

interface SignOutResponse {
  content: SignOut[];
  totalPages: number;
  totalElements: number;
  size: number;
  empty: boolean;
}

interface SignOut {
  context: string;
  id: number;
  title: string;
  createdAt: string;
}

const columns: ColumnsType<SignOut> = [
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

const SignOutManage = () => {
  const { data: questions, loading } = useFetch<SignOutResponse>(
    '/sign-out',
    'GET'
  );

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(parseInt(searchParams.get('page') ?? '1'));

  return (
    <CustomLayout data={questions} open="/sign-out" title="탈퇴관리">
      <ManageUtil />
      <Table
        pagination={{
          current: page,
          pageSize: questions?.totalElements,
          total: questions?.totalPages,
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

export default SignOutManage;
