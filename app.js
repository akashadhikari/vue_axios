// ADD YOUR API KEY

const vm = new Vue({
  el: '#app',
  data: {
    results: []
  }, mounted() {

  	axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=add_your_api_key")
    .then(response => {this.results = response.data.results})

  }
});