import range from 'lodash/range';

const SpaceUnit = 4;

export default range(80).map((i) => `${i * SpaceUnit}px`);
