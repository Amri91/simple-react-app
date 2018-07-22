import {lens, identity} from 'ramda';

export const defaultTo = value => lens(a => a === undefined ? value : a, identity);
