const api = {
  get() {
    return Promise.resolve({
      data: [
        {id: 1, title: 'Movie 1'},
        {id: 2, title: 'Movie 2'},
      ],
    });
  },
  post(_url, body) {
    return Promise.resolve({
      data: {
        ...body,
        id: 3,
      },
    });
  },
};

export default api;
