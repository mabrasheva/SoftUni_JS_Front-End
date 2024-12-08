function attachEvents() {

    const baseUrl = 'http://localhost:3030/jsonstore/blog';
    const loadPostsButtonElement = document.getElementById('btnLoadPosts');
    const viewPostButtonElement = document.getElementById('btnViewPost');
    const postsSelectElement = document.getElementById('posts');
    const commentsUlElement = document.getElementById('post-comments');
    const postTitleElement = document.getElementById('post-title');
    const postBodyElement = document.getElementById('post-body');
    let allPosts = {};


    function loadPosts(posts) {
        postsSelectElement.innerHTML = '';
        allPosts = Object.values(posts);
        allPosts.forEach(({ body, id, title }) => {
            const optionElement = document.createElement('option');
            optionElement.value = id;
            optionElement.textContent = title;
            postsSelectElement.appendChild(optionElement);
        });
    }

    async function getPostsHandler(e) {
        e.preventDefault();
        return fetch(`${baseUrl}/posts`)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.message);
                };
                return response.json()
            })
            .then(loadPosts)
            .catch(reason => {
                console.log(reason);
            });
    }

    function loadSelectedPostContent() {
        const selectedPostId = postsSelectElement.value;
        const selectedPost = allPosts.find(post => post.id === selectedPostId);
        postTitleElement.textContent = selectedPost.title;
        postBodyElement.textContent = selectedPost.body;
    }

    function loadSelectedPostComments(comments) {
        commentsUlElement.innerHTML = '';
        const selectedPostId = postsSelectElement.value;

        Object.values(comments).filter(({ postId }) => postId === selectedPostId)
            .forEach(({ id, text }) => {
                const liElement = document.createElement('li');
                liElement.id = id;
                liElement.textContent = text;
                commentsUlElement.appendChild(liElement);
            });
        loadSelectedPostContent();
    }

    async function getCommentsHandler(e) {
        e.preventDefault();
        return fetch(`${baseUrl}/comments`)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.message);
                };
                return response.json()
            })
            .then(loadSelectedPostComments)
            .catch(reason => {
                console.log(reason);
            });
    }

    loadPostsButtonElement.addEventListener('click', getPostsHandler);
    viewPostButtonElement.addEventListener('click', getCommentsHandler);

}

attachEvents();
