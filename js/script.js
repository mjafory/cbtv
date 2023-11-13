// Load comments from localStorage
function loadComments() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    const commentsList = document.getElementById('commentsList');

    if (comments.length > 0) {
        commentsList.innerHTML = '';
        comments.forEach(comment => {
            commentsList.appendChild(createCommentElement(comment));
        });
    }
}

// Save comments to localStorage
function saveComments(comments) {
    localStorage.setItem('comments', JSON.stringify(comments));
}

// Create comment element
function createCommentElement(comment) {
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.textContent = comment.text;
    return commentDiv;
}

// Add a new comment
function addComment() {
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value;
    if (commentText.trim() !== '') {
        const newComment = { text: commentText };
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push(newComment);
        saveComments(comments);

        const commentsList = document.getElementById('commentsList');
        commentsList.appendChild(createCommentElement(newComment));
        commentInput.value = '';
    }
}

// Load comments when the page loads
loadComments();
