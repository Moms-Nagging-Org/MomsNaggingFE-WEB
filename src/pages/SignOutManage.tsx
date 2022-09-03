import CustomLayout from '@/components/Layout';
import ManageUtil from '@/components/ManageUtil';
import useFetch from '@/hooks/useFetch';
import { SignOutColumns, SignOutResponse } from '@/interface';
import { Table } from 'antd';
import { useState } from 'react';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

const SignOutManage = () => {
  const { data: signOutData, loading } = useFetch<SignOutResponse>(
    '/sign-out',
    'GET'
  );

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(parseInt(searchParams.get('page') ?? '1'));

  return (
    <CustomLayout data={signOutData} open="/sign-out" title="탈퇴관리">
      <ManageUtil />
      <Table
        pagination={{
          current: page,
          pageSize: signOutData?.totalElements,
          total: signOutData?.totalPages,
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
        columns={SignOutColumns}
        dataSource={signOutData?.content}
        loading={loading}
      />
    </CustomLayout>
  );
};

export default SignOutManage;
