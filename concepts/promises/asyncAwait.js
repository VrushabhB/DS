async function getPosts() {
  let data = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  let response = await data.json();
  console.log(response);
}

getPosts();
console.log("Gloabale");
