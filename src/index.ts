export { createApi } from './api';
export * from './models';

import { all, collections, createCollection, del, findOne, get, post, startDatabase, update } from './database';

export const db = {
  all,
  createCollection,
  collections,
  del,
  get,
  findOne,
  post,
  startDatabase,
  update,
};
