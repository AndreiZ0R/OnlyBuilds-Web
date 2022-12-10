import User from "./UserModel";
export default class Builder extends User {
    constructor(username, email, profile, profilePic, firstName,
        lastName, city, state, country, zipcode, phoneNumber, tag, description, rating) {

        super(username, email, profile, profilePic, firstName, lastName, city, state, country, zipcode, phoneNumber, tag);
        this.description = description;
        this.rating = rating;
    }
}