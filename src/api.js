
const BlogAPI = {
    Posts: [
        {
            post_id: 1,
            title: "Marcus Aurelius"
        },
        {
            post_id: 2,
            title: "Didius Julianus"
        },
        {
            post_id: 3,
            title: "Avidius Cassius"
        },
        {
            post_id: 4,
            title: "Clodius Pulcher"
        },
        {
            post_id: 5,
            title: "Claudius Gothicus"
        },
    ],
    all: function() {
        return this.Posts;
    },
    get: function(post_id) {
        return this.Posts.find(p=>p.post_id===post_id);
    }
};

export default BlogAPI
