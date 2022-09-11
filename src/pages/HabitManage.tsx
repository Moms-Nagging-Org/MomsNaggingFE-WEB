// import { pushData } from '@/api/api';
import CustomLayout from '@/components/Layout';
import ManageUtil from '@/components/ManageUtil';

import useFetch from '@/hooks/useFetch';
import { HabitColumns, HabitResponse } from '@/interface';
import type { RadioChangeEvent } from 'antd';
import { Radio, Table } from 'antd';
import { useState } from 'react';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import styled from 'styled-components';

const HabitManage = () => {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(parseInt(searchParams.get('page') ?? '1'));

  const [habitType, setHabitType] = useState(1);
  const { data: habit, loading } = useFetch<HabitResponse>(
    `/schedules/categories/${habitType}?page=${page - 1}`,
    'GET'
  );
  const navigate = useNavigate();

  const onChange = (e: RadioChangeEvent) => {
    setHabitType(e.target.value);
  };

  return (
    <CustomLayout data={habit} open="/habit" title="추천습관">
      <ManageUtil />
      <PushTop>
        <Radio.Group onChange={onChange} defaultValue="1">
          <Radio.Button value="1">생활</Radio.Button>
          <Radio.Button value="2">운동</Radio.Button>
          <Radio.Button value="3">성장</Radio.Button>
          <Radio.Button value="4">생산성</Radio.Button>
          <Radio.Button value="5">식습관</Radio.Button>
          <Radio.Button value="6">기타</Radio.Button>
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
          pageSize: habit?.totalElements,
          total: habit?.totalPages,
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
        columns={HabitColumns}
        dataSource={habit?.content}
        loading={loading}
      />
    </CustomLayout>
  );
};

export default HabitManage;

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
