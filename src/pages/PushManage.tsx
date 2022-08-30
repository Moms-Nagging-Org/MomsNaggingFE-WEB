import { pushData } from '@/api/api';
import CustomLayout from '@/components/Layout';
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

interface PushResponse {
  result: PushList[];
  total: number;
}

interface PushList {
  id: number;
  pushDate: string;
  pushTime: string;
  pushType: string;
  mon: boolean;
  tue: boolean;
  wed: boolean;
  thu: boolean;
  fri: boolean;
  sat: boolean;
  sun: boolean;
  title: string;
  level1: string;
  level2: string;
  level3: string;
}

const columns: ColumnsType<PushList> = [
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

const PushManage = () => {
  const {
    data: questions,
    loading,
    error,
  } = useFetch<PushResponse>('/push', 'GET');

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

  console.log(questions);

  pushData();

  return (
    <CustomLayout data={questions} open="/push" title="PUSH알림">
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
    </CustomLayout>
  );
};

export default PushManage;
