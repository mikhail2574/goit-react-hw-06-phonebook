import { createAction } from '@reduxjs/toolkit';
import { ADD, REMOVE, FILTER } from './constants';

export const add = createAction(ADD);
export const remove = createAction(REMOVE);
export const filter = createAction(FILTER);
