import ManageUtil from '@/components/ManageUtil';

import useFetch from '@/hooks/useFetch';
import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { useEffect, useState } from 'react';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

interface SignOutResponse {
  result: SignOut[];
  total: number;
}

interface SignOut {
  id: number;
  title: string;
  context: string;
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
  // {
  //   title: '문의 내용',
  //   key: 'context',
  //   dataIndex: 'context',
  // },
];

const SignOutManage = () => {
  const {
    data: questions,
    loading,
    error,
  } = useFetch<SignOutResponse>('/sign-out', 'GET');

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(parseInt(searchParams.get('page') ?? '1'));
  let newQuestions = {
    result: questions ?? undefined,
    total: 4,
  };

  useEffect(() => {
    newQuestions = {
      result: questions ?? undefined,
      total: 4,
    };
  }, [questions]);

  return (
    <div>
      <ManageUtil />
      <Table
        pagination={{
          current: page,
          pageSize: 20,
          total: newQuestions?.total,
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
        dataSource={questions?.result}
        loading={loading}
      />
    </div>
  );
};

export default SignOutManage;
