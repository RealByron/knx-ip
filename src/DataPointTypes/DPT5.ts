import { BufferLengthError } from '../errors/BufferLengthError';
import { InvalidValueError } from '../errors/InvalidValueError';
import {DPT} from './definitions';
/**
 * @typedef {Object} SUBDPT5
 * @property {Object} ids
 * @property {string} percentage
 * @property {string} angle
 * @property {string} percentagescaling
 * @property {string} ratio
 * @property {string} tariff
 * @property {string} pulsecounter
 */
export const DPT5: DPT = {
    id: '5',
    subtypes: {
        ids: {
            '001': 'percentage',
            '003': 'angle',
            '004': 'percentagescaling',
            '005': 'ratio',
            '006': 'tariff',
            '010': 'pulsecounter'
        },
        'percentage': '001',
        'angle': '003',
        'percentagescaling': '004',
        'ratio': '005',
        'tariff': '006',
        'pulsecounter': '010'
    },
    decoder: (buffer: Buffer): number => {
        if (buffer.length !== 1) {
            throw new BufferLengthError(`Invalid buffer length ${buffer.length} for DPT5.  Expected 1.`);
        }
        const val = buffer.readUInt8(0);
        return val;
    },
    encoder: (value: number): Buffer => {
        if (value < 0 || value > 0xFF) {
            throw new InvalidValueError(`Invalid value ${value} for DPT5.`);
        }
        const buf = Buffer.alloc(1);
        buf.writeUInt8(value, 0);
        return buf;
    }
};
