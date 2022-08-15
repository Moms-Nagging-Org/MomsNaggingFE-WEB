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

interface QuestionsResponse {
  result: Questions[];
  total: number;
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

export default QuestionManage;
