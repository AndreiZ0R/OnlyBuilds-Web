export default class Post {
    constructor(title, postId, creator, body, tag, creationDate) {
        this.title = title;
        this.postId = postId;
        this.creator = creator
        this.body = body;
        this.tag = tag;
        this.creationDate = creationDate;
    }
};
