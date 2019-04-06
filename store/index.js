export const state = () => ({
  gifs: [],
  results: [],
  limit: 15,
  limitResults: 15,
  rating: 'g',
  next: null,
  query: '',
  pagination: null,
  response: null
})

export const mutations = {
  SET_GIFS(state, gifs) {
    state.gifs = gifs
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
  SET_PAGINATION(state, value) {
    state.next = value
  },
  SET_RESPONSE(state, value) {
    state.response = value
  }
}

export const actions = {
  async fetchGifs({ commit }) {
    const response = await this.$axios.$get(
      `https://api.tenor.com/v1/trending?key=${
        process.env.key
      }&media_filter=minimal`
    )
    commit('SET_RESPONSE', response)
    commit('SET_GIFS', response.results)
    commit('SET_PAGINATION', response.next)
  },
  async searchGifs({ commit, state }) {
    const response = await this.$axios.$get(
      `https://api.tenor.com/v1/search?key=${process.env.key}&q=${
        state.query
      }&media_filter=minimal`
    )
    commit('SET_RESPONSE', response)
    commit('SET_RESULTS', response.results)
    commit('SET_PAGINATION', response.next)
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
  setQuery({ commit }, query) {
    commit('SET_QUERY', query)
  }
}
export const getters = {
  //
}
