import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('*/api/v1/courses', () => {
    return HttpResponse.json([{ id: '1', langue_enseignee: 'Anglais' }]);
  }),
];
