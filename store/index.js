import env from '~/env.js'

export const state = () => ({
  gifs: [],
  limit: 30,
  rating: 'G'
})

export const mutations = {
  SET_GIFS(state, gifs) {
    state.gifs = gifs
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
  }
}
