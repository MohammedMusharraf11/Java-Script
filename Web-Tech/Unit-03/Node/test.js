// Named export for `myDate`.
function myDate() {
    return new Date();
}
module.exports.myDate = myDate;

// Default export for `add` using `module.exports` directly.
function add(a, b) {
    return a + b;
}

module.exports.default = add;
