document.getElementById('commentForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const userImage = document.getElementById('userImage').files[0];
  const commentText = document.getElementById('commentText').value;

  if (username && userImage && commentText) {
      // Salvează comentariul în localStorage
      const newComment = {
          username: username,
          image: URL.createObjectURL(userImage),
          text: commentText
      };
      
      // Salvează comentariul
      let comments = JSON.parse(localStorage.getItem('comments')) || [];
      comments.push(newComment);
      localStorage.setItem('comments', JSON.stringify(comments));

      // Afișează comentariul
      displayComments();
      
      // Curăță formularul
      document.getElementById('commentForm').reset();
  }
});

function displayComments() {
  const commentsContainer = document.getElementById('commentsContainer');
  const comments = JSON.parse(localStorage.getItem('comments')) || [];
  commentsContainer.innerHTML = '';

  comments.forEach(comment => {
      const commentDiv = document.createElement('div');
      commentDiv.classList.add('comment');
      
      const img = document.createElement('img');
      img.src = comment.image;
      
      const contentDiv = document.createElement('div');
      contentDiv.classList.add('content');
      
      const name = document.createElement('h4');
      name.textContent = comment.username;
      
      const commentText = document.createElement('p');
      commentText.textContent = comment.text;
      
      contentDiv.appendChild(name);
      contentDiv.appendChild(commentText);
      
      commentDiv.appendChild(img);
      commentDiv.appendChild(contentDiv);
      
      commentsContainer.appendChild(commentDiv);
  });
}

// Încarcă comentariile la încărcarea paginii
window.onload = displayComments;
