import { Hono } from 'hono';
import { TidyURL } from 'tidy-url';
import { validateURL } from 'tidy-url/lib/utils.js';

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

    const data = validateURL(urlDecoded);

    return c.json({ valid: data }, 200, {
      'Cache-Control': `public, max-age=${cacheDuration}`,
    });
  });
}
