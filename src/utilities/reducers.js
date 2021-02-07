export const useCountReducer = (count, {type, value}) => {
  switch (type) {
    case 'decrement':
      return count - 1;
    case 'increment':
      return count + 1;
    case 'reset':
      return 0;
    case 'set':
      return value;
    default:
      return count;
  }
};
