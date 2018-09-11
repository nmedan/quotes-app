<template>
   <form @submit.prevent="addQuote">
      <div class = "row justify-content-center">
        <label for = "title" class="col-1 col-form-label">Quote:</label>
        <div class = "col-2">
          <div class = "input-group">
             <input type = "title" v-model = "quote.title">
          </div>
        </div>		
      </div>
      <div class = "row justify-content-center">
        <label for = "author" class = "col-1 col-form-label">Author:</label>
        <div class = "col-2">
          <div class = "input-group">
             <input type ="text" v-model = "quote.author">
          </div>
        </div>		
      </div>
      <div class = "row justify-content-center">
	    <div>&nbsp</div>
        <div>
          <button name = "submit" type = "submit" class = "btn-md">Add Quote</button>
        </div>
      </div>
    </form>
</template>

<style>
   form {
		   margin-top:40px;
   }

   body {
       width:100%;
	     background:#F8F8F8;	
   }
</style>

<script>
  export default {
      props: {
         quotes:[],
      },  
      data () {
          return {
              quote:{}      
          } 
      },  
      methods: {
          addQuote() {
             if (this.quotes.length >= 10) {
                 alert('Maximum number reached, remove one to add another');
             }
             else if(!this.quote.title || !this.quote.author) {
                 alert('Quote&Author cannot be empty');
             }
             else {
                 this.$emit('quoteAdded', this.quote);        
             }
             this.quote = {};
          }
      }
  }
</script>