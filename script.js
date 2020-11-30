const displayTopPosts = (posts) => {
    posts.forEach(postId => {
        let url = `https://hacker-news.firebaseio.com/v0/item/${postId}.json?print=pretty`
        fetch(url)
            .then(data => data.json())
            .then(res => {
                let topStoriesEl = $("#topStories");
                topStoriesEl.append(`<div class="card-panel"><h5>${res.title}</h5> <a class="waves-effect waves-light btn" href="${res.url}">Read</a> </div>`);
            })
    })
}

const getTopPosts = () => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
        .then(data => data.json())
        .then(res => {
            displayTopPosts(res)
        });
}

$(document).ready(function () {
    getTopPosts()
})
