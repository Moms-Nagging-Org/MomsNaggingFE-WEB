import CustomLayout from '@/components/Layout';
import ManageUtil from '@/components/ManageUtil';
import useFetch from '@/hooks/useFetch';
import { userColumns, UsersResponse } from '@/interface';
import { Table } from 'antd';
import { useState } from 'react';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

const UserManage = () => {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(parseInt(searchParams.get('page') ?? '1'));
  const { data: userData, loading } = useFetch<UsersResponse>(
    `/users?page=${page - 1}`,
    'GET'
  );

  const navigate = useNavigate();

  return (
    <CustomLayout data={userData} open="/user" title="회원관리">
      <ManageUtil />
      <Table
        pagination={{
          current: page,
          pageSize: userData?.totalPages,
          total: userData?.totalElements,
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
        columns={userColumns}
        dataSource={userData?.content}
        loading={loading}
      />
    </CustomLayout>
  );
};

export default UserManage;
