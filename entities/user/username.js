var UserName = /** @class */ (function () {
    function UserName(username) {
        this.username = username;
    }
    Object.defineProperty(UserName.prototype, "value", {
        get: function () {
            return this.username;
        },
        enumerable: false,
        configurable: true
    });
    UserName.isValidName = function (name) {
        var limit_length = 20;
        return (name.length < limit_length);
    };
    UserName.create = function (name) {
        return new UserName(name);
    };
    return UserName;
}());
var neko = UserName.create("neko");
console.log(neko.value);
