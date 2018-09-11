<template>
    <blockquote class = "blockquote" @click = "deleteQuote">
       <p class = "mb-0"><b>"{{quote.title}}"</b></p>
       <footer class = "blockquote-footer">{{quote.author}}</footer>
   </blockquote>
</template>


<style>
   blockquote {
	     background:#FFFFFF;
		   width:350px;
		   height:180px;
		   display:inline-block;
	 }

	 .mb-0 {
	     height:150px;
		   text-align:left;
		   padding-left:20px;
		   padding-top:20px;
	 }

	 .blockquote-footer {
	     text-align:right;
		   padding-right:20px;
		   padding-bottom:20px;
	 }
</style>

<script>
  export default {
    props: {
       quote:{}
    },
    methods: 
    {
       deleteQuote() {
          this.$emit('quoteDeleted', this.quote);     
       }
    }
  }
</script>