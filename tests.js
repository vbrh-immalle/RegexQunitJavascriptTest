QUnit.test("hello test", function(assert) {
    assert.ok(1 == "1", "Strings met enkel een getal worden automatisch omgezet naar een Number.");
});

QUnit.test("Simple regex", function(assert) {
    var re = /http/;
    var str = "http://www.google.com";
    var exc = "http";

    assert.ok(re.exec(str) !== null, "Execution of regexp returns something.");
    assert.equal(re.exec(str), exc, "Execution of regexp returns " + exc);
});

QUnit.test("Simple regex: . doesn't stand for dot", function(assert) {
    var re = /www.google.com/;
    var str = "http://www.google.com";
    var exc = "www.google.com";

    assert.ok(re.exec(str) !== null, "Execution of regexp returns something.");
    assert.equal(re.exec(str), exc, "Execution of regexp returns " + exc);

    str = "http://wwwXgoogleXcom";
    exc = "wwwXgoogleXcom";
    assert.ok(re.exec(str) !== null, "Execution of regexp should catch " + str);
    assert.equal(re.exec(str), exc, "Execution of regexp returns " + exc);
});

QUnit.test("Simple regex: \. stands for dot", function(assert) {
    var re = /www\.google\.com/;
    var str = "http://www.google.com";
    var exc = "www.google.com";

    assert.ok(re.exec(str) !== null, "Execution of regexp returns something.");
    assert.equal(re.exec(str), exc, "Execution of regexp returns " + exc);

    str = "http://wwwXgoogleXcom";
    assert.ok(re.exec(str) === null, "Execution of regexp shouldn't catch " + str);
});

QUnit.test("Http or https", function(assert) {
    var re = /http[s]?/;
    var str = "http://www.google.com";
    var exc = "http";

    assert.ok(re.exec(str) !== null, "Execution of regexp returns something.");
    assert.equal(re.exec(str), exc, "Execution of regexp returns " + exc);

    str = "https://www.google.com";
    exc = "https";

    assert.ok(re.exec(str) !== null, "Execution of regexp returns something.");
    assert.ok(re.exec(str) == exc, "Execution of regexp returns " + exc);
});

QUnit.test("Http[s]?://", function(assert) {
    var re = /http[s]?:\/\//;
    var str = "http://www.google.com";
    var exc = "http://";

    assert.ok(re.exec(str) !== null, "Execution of regexp returns something.");
    assert.equal(re.exec(str), exc, "Execution of regexp return " + exc);

    str = "https://www.google.com";
    exc = "https://";

    assert.ok(re.exec(str) !== null, "Execution of regexp returns something.");
    assert.equal(re.exec(str), exc, "Execution of regexp return " + exc);
});

QUnit.test("Should catch Github username", function(assert) {
    var re = /http[s]?:\/\/github\.com\/(\w+)/;
    var str = "http://github.com/testuser";
    var exc = "http://github.com/testuser";
    var usr = "testuser";

    var resultArray = re.exec(str);

    assert.equal(resultArray[0], exc, "Execution of regexp returns " + exc);
    assert.equal(resultArray[1], usr, "Username is parsed correctly as " + usr);
});

QUnit.test("Should catch Github username containing dashs and numbers", function(assert) {
    var re = /http[s]?:\/\/github\.com\/([\w-]+)/;
    var str = "http://github.com/3test-user";
    var exc = "http://github.com/3test-user";
    var usr = "3test-user";

    var resultArray = re.exec(str);

    assert.equal(resultArray[0], exc, "Execution of regexp returns " + exc);
    assert.equal(resultArray[1], usr, "Username is parsed correctly as " + usr);

    // NOTE: only single hyphens are allowed (https://github.com/regexhq/regex-username)
});

