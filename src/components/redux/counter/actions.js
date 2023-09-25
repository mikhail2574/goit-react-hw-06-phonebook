import { ADD } from './constants';
import { REMOVE } from './constants';
import { FILTER } from './constants';

export const add = contact => ({ type: ADD, contact });
export const remove = id => ({ type: REMOVE, id });
export const filter = q => ({ type: FILTER, q });
