import env from '~/env.js'

export const state = () => ({
  gifs: [],
  results: [],
  limit: 20,
  rating: 'g'
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
  }
}

export const actions = {
  async fetchGifs({ commit, state }) {
    const response = await this.$axios.$get(
      `https://api.giphy.com/v1/gifs/trending?api_key=${env.API_KEY}&limit=${
        state.limit
      }&rating=${state.rating}`
    )
    commit('SET_GIFS', response.data)
  },
  async searchGifs({ commit, state }, query) {
    const response = await this.$axios.$get(
      `https://api.giphy.com/v1/gifs/search?api_key=${env.API_KEY}&limit=${
        state.limit
      }&rating=${state.rating}&q=${query}`
    )
    commit('SET_RESULTS', response.data)
  }
}
