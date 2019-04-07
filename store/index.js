export const state = () => ({
  gifs: [],
  categories: [],
  results: [],
  query: '',
  next: null,
  position: '',
  response: null,
  anon_id: '',
  locale: 'es-SV'
})

export const mutations = {
  SET_GIFS(state, gifs) {
    state.gifs = gifs
  },
  SET_CATEGORIES(state, categories) {
    state.categories = categories
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
    state.position = Number(state.position) + state.next
  },
  PREVIOUS_PAGE(state) {
    state.position = Number(state.position) - state.next
  },
  RESET_POSITION(state) {
    state.position = 0
  },
  SET_NEXT(state, value) {
    state.next = value
  },
  SET_RESPONSE(state, value) {
    state.response = value
  },
  SET_ANON_ID(state, value) {
    state.anon_id = value
  }
}

export const actions = {
  async getAnonymousID({ commit }) {
    const response = await this.$axios.$get(
      `https://api.tenor.com/v1/anonid?key=${process.env.key}`
    )
    commit('SET_ANON_ID', response.anon_id)
  },
  async fetchCategories({ commit, state }) {
    const response = await this.$axios.$get(
      `https://api.tenor.com/v1/categories?key=${process.env.key}&anon_id${
        state.anon_id
      }&type=trending&locale=${state.locale}`
    )
    commit('SET_CATEGORIES', response.tags)
    commit('SET_RESPONSE', response)
  },
  async fetchByCategory({ commit }, url) {
    const response = await this.$axios.$get(url)
    commit('SET_GIFS', response.results)
    commit('SET_RESPONSE', response)
  },
  async fetchGifs({ commit, state }, limit) {
    const response = await this.$axios.$get(
      `https://api.tenor.com/v1/trending?key=${
        process.env.key
      }&media_filter=minimal&anon_id=${state.anon_id}&limit=${limit}&pos=${
        state.position
      }&locale=${state.locale}`
    )
    commit('SET_RESPONSE', response)
    commit('SET_GIFS', response.results)
    commit('SET_NEXT', Number(response.next))
  },
  async searchGifs({ commit, state }, limit) {
    const response = await this.$axios.$get(
      `https://api.tenor.com/v1/search?key=${process.env.key}&q=${
        state.query
      }&media_filter=minimal&anon_id=${state.anon_id}&locale=${state.locale}`
    )
    commit('SET_RESPONSE', response)
    commit('SET_RESULTS', response.results)
    commit('SET_NEXT', Number(response.next))
  },
  async resultsNextPage({ commit, dispatch }) {
    await commit('NEXT_PAGE')
    dispatch('searchGifs', 18)
  },
  async resultsPreviousPage({ commit, dispatch }) {
    await commit('PREVIOUS_PAGE')
    dispatch('searchGifs', 18)
  },
  async gifsNextPage({ commit, dispatch }) {
    await commit('NEXT_PAGE')
    dispatch('fetchGifs', 15)
  },
  async gifsPreviousPage({ commit, dispatch }) {
    await commit('PREVIOUS_PAGE')
    dispatch('fetchGifs', 15)
  },
  setQuery({ commit }, query) {
    commit('SET_QUERY', query)
  }
}
export const getters = {
  //
}
