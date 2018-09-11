<template>
  <div>
      <p><b>Quotes added: {{quotes.length}} of 10</b></p>
      <div class = "progress" style = "height:40px">
          <div class = "progress-bar bg-info" role = "progressbar" :style = "{width:quotes.length*10 + '%'}" :aria-valuenow = "quotes.length" aria-valuemin = "0" aria-valuemax = "10"></div>
  	  </div>
	</div>
</template>

<style>
  p {
	    font-size: 20px;
	    text-align:center;
	}
  
	.progress {
	    width:70%;
		  margin:auto;
	}
  
</style>

<script>
  export default {
      props: {
         quotes:[]
      }
  }
</script>