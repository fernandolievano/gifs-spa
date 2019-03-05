import env from '~/env.js'

export const state = () => ({
  gifs: []
})

export const mutations = {
  SET_GIFS(state, gifs) {
    state.gifs = gifs
  }
}

export const actions = {
  async fetchGifs({ commit }) {
    const response = await this.$axios.$get(
      `https://api.giphy.com/v1/gifs/trending?api_key=${
        env.API_KEY
      }&limit=6&rating=R`
    )
    commit('SET_GIFS', response.data)
  }
}
