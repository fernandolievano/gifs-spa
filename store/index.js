export const state = () => ({
  gifs: [],
  stickers: [],
  results: [],
  limit: 15,
  limitResults: 15,
  rating: 'g',
  query: '',
  offset: 0,
  pagination: null
})

export const mutations = {
  SET_GIFS(state, gifs) {
    state.gifs = gifs
  },
  SET_STICKERS(state, stickers) {
    state.stickers = stickers
  },
  SET_RESULTS(state, results) {
    state.results = results
  },
  CLEAN_RESULTS(state) {
    state.results = []
  },
  SET_QUERY(state, query) {
    state.query = query
  },
  NEXT_PAGE(state) {
    state.offset += state.limit
  },
  PREVIOUS_PAGE(state) {
    state.offset -= state.limit
  },
  RESET_OFFSET(state) {
    state.offset = 0
  },
  SET_PAGINATION(state, pagination) {
    state.pagination = pagination
  }
}

export const actions = {
  async fetchGifs({ commit, state }) {
    const response = await this.$axios.$get(
      `https://api.giphy.com/v1/gifs/trending?api_key=${
        process.env.API_KEY
      }&limit=${state.limit}&rating=${state.rating}&offset=${state.offset}`
    )
    commit('SET_GIFS', response.data)
    commit('SET_PAGINATION', response.pagination)
  },
  async fetchStickers({ commit, state }) {
    const response = await this.$axios.$get(
      `https://api.giphy.com/v1/stickers/trending?api_key=${
        process.env.API_KEY
      }&limit=${state.limit}&rating=${state.rating}&offset=${state.offset}`
    )
    commit('SET_STICKERS', response.data)
    commit('SET_PAGINATION', response.pagination)
  },
  async searchGifs({ commit, state }) {
    const response = await this.$axios.$get(
      `https://api.giphy.com/v1/gifs/search?api_key=${
        process.env.API_KEY
      }&limit=${state.limit}&rating=${state.rating}&q=${state.query}&offset=${
        state.offset
      }`
    )
    commit('SET_RESULTS', response.data)
    commit('SET_PAGINATION', response.pagination)
  },
  async resultsNextPage({ commit, dispatch }) {
    await commit('NEXT_PAGE')
    dispatch('searchGifs')
  },
  async resultsPreviousPage({ commit, dispatch }) {
    await commit('PREVIOUS_PAGE')
    dispatch('searchGifs')
  },
  async gifsNextPage({ commit, dispatch }) {
    await commit('NEXT_PAGE')
    dispatch('fetchGifs')
  },
  async gifsPreviousPage({ commit, dispatch }) {
    await commit('PREVIOUS_PAGE')
    dispatch('fetchGifs')
  },
  async stickersNextPage({ commit, dispatch }) {
    await commit('NEXT_PAGE')
    dispatch('fetchStickers')
  },
  async stickersPreviousPage({ commit, dispatch }) {
    await commit('PREVIOUS_PAGE')
    dispatch('fetchStickers')
  },
  resetOffset({ commit }) {
    commit('RESET_OFFSET')
  },
  setQuery({ commit }, query) {
    commit('SET_QUERY', query)
  }
}
export const getters = {
  //
}
