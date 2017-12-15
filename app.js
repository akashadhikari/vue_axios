// ADD YOUR API KEY

// const vm = new Vue({
//   el: '#app',
//   data: {
//     results: [
//       {title: "the very first post", abstract: "lorem ipsum some test dimpsum"},
//       {title: "and the second", abstract: "lorem ipsum some test dimsum"},
//       {title: "third time's a charm", abstract: "lorem ipsum some test dimsum"},
//       {title: "four the last time", abstract: "lorem ipsum some test dimsum"}
//     ]
//   }
// });

const vm = new Vue({
  el: '#app',
  data: {
    results: []
  },
  mounted() {
    axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=b2ed2bd00e3742b0b7358a14358a5efc")
    .then(response => {this.results = response.data.results})
  }
});