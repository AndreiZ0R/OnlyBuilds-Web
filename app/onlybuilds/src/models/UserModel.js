export default class User {
    constructor(username, email, profilePic, firstName, lastName, city, state, country, zipcode, phoneNumber, tag) {
        this.username = username;
        this.email = email;
        this.profilePic = profilePic;
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.country = country;
        this.zipcode = zipcode;
        this.phoneNumber = phoneNumber;
        this.tag = tag;
        this.state = state;
    }

    makeAvatar(firstName, lastName) {
        let avatarName = "";
        avatarName = firstName.charAt(0) + lastName.charAt(0);
        avatarName = avatarName.toUpperCase();
        return avatarName;
    }

    static defaultUser() {
        return new User(
            "unknown",
            "unk@gmail.com",
            "url...",
            "Unk",
            "Nown",
            "n",
            "o",
            "l",
            111111,
            "9999999999",
            "User"
        );
    }
}