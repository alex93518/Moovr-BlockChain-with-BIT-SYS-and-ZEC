/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

import apiRoutes from '../API/routes';
import renderHTML from './helpers/render_html';

const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : '';

// Setup Route Bindings
exports = module.exports;
module.exports = (app) => {
  // You can use "app" here like you would in Express

  apiRoutes(app);

  app.use((req, res) => {
    res.send(renderHTML(assetUrl));
  });

  // Error middleware
  app.use((error, req, res) => {
    res.status(error.status).send(error);
  });
};
