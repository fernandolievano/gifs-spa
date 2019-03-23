import env from '~/env.js'

export const state = () => ({
  gifs: [],
  stickers: [],
  results: [],
  limit: 12,
  limitResults: 6,
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
    state.offset += state.limitResults
  },
  RESET_OFFSET(state) {
    state.offset = 0
  },
  SET_PAGINATION(state, pagination) {
    state.pagination = pagination
  }
}

export const actions = {
  async fetchGifs({ commit, state }, limit) {
    const response = await this.$axios.$get(
      `https://api.giphy.com/v1/gifs/trending?api_key=${
        env.API_KEY
      }&limit=${limit}&rating=${state.rating}`
    )
    commit('SET_GIFS', response.data)
  },
  async fetchStickers({ commit, state }, limit) {
    const response = await this.$axios.$get(
      `https://api.giphy.com/v1/stickers/trending?api_key=${
        env.API_KEY
      }&limit=${limit}&rating=${state.rating}`
    )
    commit('SET_STICKERS', response.data)
  },
  async searchGifs({ commit, state }) {
    const response = await this.$axios.$get(
      `https://api.giphy.com/v1/gifs/search?api_key=${env.API_KEY}&limit=${
        state.limitResults
      }&rating=${state.rating}&q=${state.query}&offset=${state.offset}`
    )
    commit('SET_RESULTS', response.data)
    commit('SET_PAGINATION', response.pagination)
  },
  async resultsNextPage({ dispatch, commit }) {
    await commit('NEXT_PAGE')
    dispatch('searchGifs')
  },
  async resultsPreviousPage() {},
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
