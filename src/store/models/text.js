export const text = {
  state: '你好',
  reducers: {
    addText(state, payload) {
      console.log(state, payload);
      return state + payload;
    }
  },
  effects: dispatch => ({
    async addTextAsync(payload, rootState) {
      await new Promise(reslove => setTimeout(reslove, 1000));
      dispatch.count.addText(payload);
    }
  })
}
