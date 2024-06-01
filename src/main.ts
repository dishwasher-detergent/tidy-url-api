import { Hono } from 'hono';
import { cors } from 'hono/cors';

import { requestFromContext, responseForContext } from './lib/utils.js';
import { Clean } from './pages/clean.js';
import { Home } from './pages/home.js';
import { KeepWarm } from './pages/keepWarm.js';
import { Context } from './types/types.js';

const cache = 1440; //24 hours in seconds

const app = new Hono();

app.use('*', cors());

// Error Handling
app.onError((err, c) => {
  return c.json(err, 500);
});

// Post requests
KeepWarm(app);

// API Routes
Home(app, cache);
Clean(app, 0);

export default async (context: Context) => {
  const request = requestFromContext(context);
  const response = await app.request(request);

  return await responseForContext(context, response);
};
