export default class User {
    constructor(username, email, profile, profilePic, firstName, lastName, city, state, country, zipcode, phoneNumber, tag) {
        this.username = username;
        this.email = email;
        this.profile = profile;
        this.profilePic = profilePic;
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.country = country;
        this.zipcode = zipcode;
        this.phoneNumber = phoneNumber;
        this.tag = tag;
    }

    makeAvatar(firstName, lastName) {
        let avatarName = "";
        avatarName = firstName.charAt(0) + lastName.charAt(0);
        avatarName = avatarName.toUpperCase();
        return avatarName;
    }
}