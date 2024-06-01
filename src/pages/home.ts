import { Hono } from 'hono';

export function Home(app: Hono, cacheDuration: number = 1440) {
  app.get('/', async (c) => {
    const response = {
      routes: [
        {
          name: 'clean',
          description: 'Cleans provided URL.',
          path: '/clean/:url',
        },
        {
          name: 'validate',
          description: 'Validates the provided URL.',
          path: '/validate/:url',
        },
      ],
    };

    return c.json(response, 200, {
      'Cache-Control': `public, max-age=${cacheDuration}`,
    });
  });
}
