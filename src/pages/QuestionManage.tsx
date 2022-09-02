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

interface QuestionsResponse {
  content: Questions[];
  totalPages: number;
  totalElements: number;
  size: number;
  empty: boolean;
}

interface Questions {
  id: number;
  title: string;
  context: string;
  userId: number;
  createdAt: string;
}

const columns: ColumnsType<Questions> = [
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

const QuestionManage = () => {
  const {
    data: questions,
    loading,
    error,
  } = useFetch<QuestionsResponse>('/questions', 'GET');

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(parseInt(searchParams.get('page') ?? '1'));

  return (
    <CustomLayout data={questions} open="/question" title="문의사항">
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

export default QuestionManage;
