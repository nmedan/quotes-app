<template>
  <div>
    <div>
      <AddQuote :quotes = "getQuotes" @quoteAdded = "newQuote" />
    </div>
    <hr />
    <div>
      <ProgressBar :quotes = "getQuotes" />
    </div>
    <hr />
    <div style = "margin-left:20px">
      <QuoteCard v-for = "(quote, index) in getQuotes" :key = "index" @quoteDeleted = "quoteDeleted" style = "display:inline-block; margin-right:30px" :quote = "quote" />
    </div>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import AddQuote from './components/AddQuote.vue'
  import ProgressBar from './components/ProgressBar.vue'
  import QuoteCard from './components/QuoteCard.vue'

  export default {
      name: 'app', 
      components: {
          HelloWorld,
          AddQuote,
          ProgressBar,
          QuoteCard
      },
      data() {
        return {
            quotes:[{title:"I have a dream", author:"Martin Luther King"},
            {title:"To be or not to be, that is question", author:"William Shakespeare"},
            {title:"You don't understand it fully if you can't explain it simply", author:"Albert Einstein"}]
        }
      },
      methods: {
         newQuote(quote) {
             this.quotes.push(quote);
         },
     
         quoteDeleted(quote) {
             let indexOfQuoteToRemove = this.quotes.indexOf(quote);
             this.quotes.splice(indexOfQuoteToRemove, 1);
         }
      }, 
      computed: {
         getQuotes() {
            return this.quotes;
         }
      }
  }
</script>

