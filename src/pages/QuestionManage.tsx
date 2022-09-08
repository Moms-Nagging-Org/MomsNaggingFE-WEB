import CustomLayout from '@/components/Layout';
import ManageUtil from '@/components/ManageUtil';
import useFetch from '@/hooks/useFetch';
import { questionsColumns, QuestionsResponse } from '@/interface';
import { Table } from 'antd';
import { useState } from 'react';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

const QuestionManage = () => {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(parseInt(searchParams.get('page') ?? '1'));
  const { data: questions, loading } = useFetch<QuestionsResponse>(
    `/questions?page=${page - 1}`,
    'GET'
  );

  const navigate = useNavigate();

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
        columns={questionsColumns}
        dataSource={questions?.content}
        loading={loading}
      />
    </CustomLayout>
  );
};

export default QuestionManage;
