import { Hono } from 'hono';
import { TidyURL } from 'tidy-url';

export function Clean(app: Hono, cacheDuration: number = 1440) {
  app.get('/clean/:url', async (c) => {
    const url = c.req.param('url');
    const urlDecoded = decodeURIComponent(url);

    const data = TidyURL.clean(urlDecoded);

    return c.json(data, 200, {
      'Cache-Control': `public, max-age=${cacheDuration}`,
    });
  });

  app.get('/validate/:url', async (c) => {
    const url = c.req.param('url');
    const urlDecoded = decodeURIComponent(url);

    const data = TidyURL.validate(urlDecoded);

    return c.json(data, 200, {
      'Cache-Control': `public, max-age=${cacheDuration}`,
    });
  });
}
