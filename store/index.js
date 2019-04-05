import env from '~/env'

export const state = () => ({
  gifs: [],
  stickers: [],
  results: [],
  limit: 15,
  limitResults: 15,
  rating: 'g',
  query: '',
  pagination: null
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
  SET_PAGINATION(state, pagination) {
    state.pagination = pagination
  }
}

export const actions = {
  async fetchGifs({ commit }) {
    const response = await this.$axios.$get(
      `https://api.tenor.com/v1/trending?key=${
        env.API_KEY
      }&media_filter=minimal`
    )
    commit('SET_GIFS', response.results)
    // commit('SET_PAGINATION', response.pagination)
  },
  async searchGifs({ commit, state }) {
    const response = await this.$axios.$get(
      `https://api.tenor.com/v1/search?key=${env.API_KEY}&q=${
        state.query
      }&media_filter=minimal`
    )
    commit('SET_RESULTS', response.results)
    // commit('SET_PAGINATION', response.pagination)
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
