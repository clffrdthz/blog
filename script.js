let reactionStates = {
    like: false,
    love: false,
    haha: false,
    wow: false,
    sad: false,
    angry: false,
};

function react(reactionType, emoji) {
    const reactionButton = document.querySelector('.reaction-btn');

    if (!reactionStates[reactionType]) {
        // Clear other reactions
        for (let key in reactionStates) {
            if (key !== reactionType) {
                reactionStates[key] = false;
            }
        }

        // Set the selected reaction
        reactionStates[reactionType] = true;

        // Set the reaction emoji to the reaction button
        reactionButton.innerHTML = emoji;
    } else {
        // Unreact
        reactionStates[reactionType] = false;

        // Set the reaction button back to default
        reactionButton.innerHTML = `<i class="fa-regular fa-thumbs-up"></i>`;
    }
}

function hideReactions() {
    const reactionEmojis = document.getElementById('reaction-emojis');
    reactionEmojis.style.display = 'none';
}

function toggleReactions() {
    const reactionEmojis = document.getElementById('reaction-emojis');
    reactionEmojis.style.display = reactionEmojis.style.display === 'none' ? 'flex' : 'none';
}

function toggleComment() {
    const commentField = document.getElementById('comment-field');
    commentField.style.display = commentField.style.display === 'none' ? 'block' : 'none';
}

function postComment() {
    const commentInput = document.getElementById('comment-input');
    const comment = commentInput.value.trim();

    if (comment !== '') {
        const commentsList = document.getElementById('comments-list');
        const newComment = document.createElement('div');
        newComment.classList.add('comment');

        const username = document.createElement('span');
        username.classList.add('username');
        username.textContent = 'You';
        
        const content = document.createElement('p');
        content.classList.add('content');
        content.textContent = comment;

        newComment.appendChild(username);
        newComment.appendChild(content);
        commentsList.appendChild(newComment);

        commentInput.value = ''; // Clear the input field after posting
    }
}

// Other necessary functions...