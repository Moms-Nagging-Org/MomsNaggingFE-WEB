import { rest } from 'msw';

const getSchedules: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      id: 2,
      seqNumber: 0,
      scheduleName: '술 마시기',
      scheduleTime: '아무때나',
      scheduleType: 'todo',
      done: true,
    }),
  );
};

export const handlers = [
  rest.get('/api/v1/Schedules', getSchedules),
  // Handles a GET /user request
  //   rest.get('/user', getMe),
];
