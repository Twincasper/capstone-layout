const quill = new Quill('#editor', {
  theme: 'snow'
});

// This works, just need to have this actually stored somewhere so it sticks to the page on refresh, and test other text editor features such as bolding text, highlighting text, etc.

document.getElementById('savePost').addEventListener('click', function() {
  const postTitle = document.getElementById('postTitle').value;
  const postContent = document.getElementById('editor').textContent;

  if (postTitle && postContent) {
    const newCard = document.createElement('div');
    newCard.className = 'col-12 mt-3';
    newCard.innerHTML = `
      <div class="card" style="width: 100%; background-color: #f8f9fa; border: 1px solid #ddd;">
        <div class="d-flex align-items-center">
          <span class="icon fa-solid fa-comment" style="color: #6c757d; font-size: 2rem; margin-right: 10px;"></span>
          <div>
            <h5 class="card-title mb-1">${postTitle}</h5>
            <p class="card-text">${postContent}</p>
          </div>
        </div>
        <div class="card-body d-flex justify-content-between">
          <span class="text-muted">Just now</span>
          <div class="interaction-icons">
            <i class="bi bi-chat-heart" style="margin-right: 5px;"></i> 0
            <i class="bi bi-hearts" style="margin-left: 10px;"></i> 0
          </div>`

    document.getElementById('postsContainer').appendChild(newCard);

    document.getElementById('postTitle').value = '';
    document.getElementById('editor').textContent = '';

    const postModal = new bootstrap.Modal(document.getElementById('postModal'));
    postModal.hide();
  }
});

let search = document.querySelector('.input-group > input');
function searchPosts() {
  let searchInput = search.value.toLowerCase();
  const posts = document.querySelectorAll('.card');

  posts.forEach(post => {
    if (post.textContent.toLowerCase().includes(searchInput)) {
      post.style.display = '';
    } else {
      post.style.display = 'none';
    }
  });
}

document.querySelector('.input-group > input').addEventListener('keyup', searchPosts);


// document.querySelector('.dark-mode-toggle').addEventListener('click', function() {
//   const body = document.querySelector('section.layout');
//   const toggleIcon = this.querySelector('i');

//   body.classList.toggle('dark-mode');

//   if (body.classList.contains('dark-mode')) {
//     toggleIcon.classList.remove('fa-toggle-off');
//     toggleIcon.classList.add('fa-toggle-on');
//     document.documentElement.setAttribute('data-bs-theme', 'dark');
//   } else {
//     toggleIcon.classList.remove('fa-toggle-on');
//     toggleIcon.classList.add('fa-toggle-off');
//     document.documentElement.removeAttribute('data-bs-theme');
//   }
// });
