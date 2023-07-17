function fetchPost() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => renderPosts(json))
}

function renderPosts(posts) {
  var contentHtml = ''
  posts.forEach(post => {
    contentHtml += '<div class="post">';
    contentHtml += '<strong>Post #' + post.id + ': ' + post.title + '</strong>';
    contentHtml += '<p>' + post.body + '</p>';
    contentHtml += '</div>';
  })
  console.log(contentHtml);
  document.getElementById('posts').innerHTML = contentHtml
}