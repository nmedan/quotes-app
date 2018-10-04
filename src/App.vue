<template>
  <div>
    <div>
      <add-quote
        :quotes="quotes" @quoteAdded="newQuote" 
      />
    </div>
    <hr />
    <div>
      <progress-bar
        :quotes="quotes" :maxQuotesNumber="maxQuotesNumber"
      />
    </div>
    <hr />
    <div style="margin-left:20px">
      <quote-card
        v-for="(quote, index) in quotes" :key="index" @quoteDeleted="quoteDeleted" style="display:inline-block; margin-right:30px" :quote="quote" 
      />
    </div>
  </div>
</template>

<script>
  import AddQuote from './components/AddQuote.vue'
  import ProgressBar from './components/ProgressBar.vue'
  import QuoteCard from './components/QuoteCard.vue'
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'app', 
    
    components: {
      AddQuote,
      ProgressBar,
      QuoteCard
    },
    
    methods: {
      ...mapMutations({
        newQuote: 'addQuote',
        quoteDeleted: 'deleteQuote'
      })
    }, 
    
    computed: {
      ...mapGetters({
        quotes: 'getQuotes',
        maxQuotesNumber: 'getMaxQuotesNumber'
      })
    }
  }
</script>

