import User from "./UserModel";

export default class Post {
    constructor(title, postId, creator, body, tag, creationDate) {
        this.title = title;
        this.postId = postId;
        this.creator = creator
        this.body = body;
        this.tag = tag;
        this.creationDate = creationDate;
    }


    static defaultPost() {
        return new Post('titlu', "123", User.defaultUser(), 'bodybodybodybodybody', "Invalid", "azi");
    }

};
