// import { pushData } from '@/api/api';
import CustomLayout from '@/components/Layout';
import ManageUtil from '@/components/ManageUtil';

import useFetch from '@/hooks/useFetch';
import { PushColumns, PushResponse } from '@/interface';
import type { RadioChangeEvent } from 'antd';
import { Radio, Table } from 'antd';
import { useState } from 'react';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import styled from 'styled-components';

const PushManage = () => {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(parseInt(searchParams.get('page') ?? '1'));

  const [pushType, setPushType] = useState('REPEAT');
  const { data: push, loading } = useFetch<PushResponse>(
    `/push?pushType=${pushType}&page=${page - 1}`,
    'GET'
  );
  const navigate = useNavigate();

  const onChange = (e: RadioChangeEvent) => {
    setPushType(e.target.value);
  };

  return (
    <CustomLayout data={push} open="/push" title="PUSH알림">
      <ManageUtil />
      <PushTop>
        <Radio.Group onChange={onChange} defaultValue="REPEAT">
          <Radio.Button value="REPEAT">정기성</Radio.Button>
          <Radio.Button value="ONE">일회성</Radio.Button>
        </Radio.Group>
        <PushTopPlus>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="#03A330"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="bevel"
            />
            <path
              d="M17.1899 12.13H7.18994"
              stroke="#03A330"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="bevel"
            />
            <path
              d="M12.1899 17.13V7.13"
              stroke="#03A330"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="bevel"
            />
          </svg>
          추가하기
        </PushTopPlus>
      </PushTop>

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

const PushTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

const PushTopPlus = styled.button`
  display: flex;
  align-items: center;
  gap: 3px;
  border: none;
  background-color: #f0f2f5;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
