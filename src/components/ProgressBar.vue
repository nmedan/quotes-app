<template>
  <div>
    <p><b>Quotes added: {{ quotes.length }} of 10</b></p>
    <div class="progress" style="height:40px">
      <div class="progress-bar bg-info" role="progressbar" :style="{width:progressBarWidthPercent+'%'}" :aria-valuenow="maxQuotesNumber" aria-valuemin="0" aria-valuema= "10"></div>
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
      quotes: [],
      maxQuotesNumber: Number
    },
    
    computed: {
      progressBarWidthPercent() {
        return this.quotes.length*10;
      }
    }
  }
</script>