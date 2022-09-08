// import { pushData } from '@/api/api';
import CustomLayout from '@/components/Layout';
import ManageUtil from '@/components/ManageUtil';

import useFetch from '@/hooks/useFetch';
import { PushColumns, PushResponse } from '@/interface';
import { Table } from 'antd';
import { useState } from 'react';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

const PushManage = () => {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(parseInt(searchParams.get('page') ?? '1'));

  const [pushType, setPushType] = useState('REPEAT');
  const { data: push, loading } = useFetch<PushResponse>(
    `/push?pushType=${pushType}&page=${page - 1}`,
    'GET'
  );
  const navigate = useNavigate();

  return (
    <CustomLayout data={push} open="/push" title="PUSH알림">
      <ManageUtil />
      <Table
        pagination={{
          current: page,
          pageSize: push?.totalElements,
          total: push?.totalPages,
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
        columns={PushColumns}
        dataSource={push?.content}
        loading={loading}
      />
    </CustomLayout>
  );
};

export default PushManage;
