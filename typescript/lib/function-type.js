"use strict";
function sum(x, y) {
    return x + y;
}
var mySum = function (x, y) {
    return x + y;
};
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}
var tomcat = buildName('Tom', 'Cat');
var tomSimple = buildName('Tom');
function buildName1(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Cat'; }
    return firstName + " " + lastName;
}
var tomcat1 = buildName('Tom', 'Cat');
var tomSimple1 = buildName1('Tom');
function buildName2(firstName, lastName) {
    if (firstName === void 0) { firstName = 'Tom'; }
    return firstName + " " + lastName;
}
var tomcat2 = buildName2('Tom', 'Cat');
var tomDefault = buildName2(undefined, 'Cat');
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var a = [];
push(a, 1, 2, 3);
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else {
        return x.split('').reverse().join('');
    }
}
