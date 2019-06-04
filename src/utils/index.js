import random from './random';
import wait from './wait';
import object from './object';

const utils = {
    ...random,
    ...object,
    ...wait,
};

export default utils;
