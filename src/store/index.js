import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    quotes: [
      { title: "I have a dream", author: "Martin Luther King" },
      { title: "To be or not to be, that is question", author: "William Shakespeare" },
      { title: "You don't understand it fully if you can't explain it simply", author: "Albert Einstein" }
    ],  

    maxQuotesNumber: 10
  },
  mutations: {
    setQuotes(state, quotes) {
      state.quotes = quotes;
    },

    setMaxQuotesNumber(state, maxQuotesNumber) {
      state.maxQuotesNumber = maxQuotesNumber;
    },

    addQuote(state, quote) {
      state.quotes.push(quote);
    },

    deleteQuote(state, quote) {
      let indexOfQuoteToRemove = state.quotes.indexOf(quote);
      state.quotes.splice(indexOfQuoteToRemove, 1);
    }
  },
  getters: {
    getQuotes(state) {
      return state.quotes;
    },

    getMaxQuotesNumber(state) {
      return state.maxQuotesNumber;
    }
  }
});
