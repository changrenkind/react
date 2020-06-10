export const count = {
  state: 0,
  reducers: {
    increment(state, payload) {
      console.log(state, payload);
      return state + payload;
    }
  },
  effects: dispatch => ({
    async incrementAsync(payload) {
      await new Promise(reslove => setTimeout(reslove, 1000));
      dispatch.count.increment(payload);
    }
  })
};
