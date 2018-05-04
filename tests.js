QUnit.test("hello test", function(assert) {
    assert.ok(1 == "1", "Strings met enkel een getal worden automatisch omgezet naar een Number.");
});

QUnit.test("Simple regex", function(assert) {
    var re = /TODO: what regex would catch the expected string?/;
    var str = "http://www.google.com";
    var exp = "http";

    assert.ok(re.exec(str) !== null, "Execution of regexp returns something.");
    assert.equal(re.exec(str), exp, "Execution of regexp returns " + exp);
});

QUnit.test("Simple regex: . doesn't stand for dot", function(assert) {
    var re = /TODO: what happens if you naively use a dot, thinking it is a normal character?/; 
    var str = "http://www.google.com";
    var exp = "www.google.com";

    assert.ok(re.exec(str) !== null, "Execution of regexp returns something.");
    assert.equal(re.exec(str), exp, "Execution of regexp returns " + exp);

    str = "http://wwwXgoogleXcom";
    exp = "wwwXgoogleXcom";
    assert.ok(re.exec(str) !== null, "Execution of regexp should catch " + str);
    assert.equal(re.exec(str), exp, "Execution of regexp returns " + exp);
});

QUnit.test("Simple regex: \. stands for dot", function(assert) {
    var re = /TODO: How should we actually capture a string with dots?/;
    var str = "http://www.google.com";
    var exp = "www.google.com";

    assert.ok(re.exec(str) !== null, "Execution of regexp returns something.");
    assert.equal(re.exec(str), exp, "Execution of regexp returns " + exp);

    str = "http://wwwXgooglexpom";
    assert.ok(re.exec(str) === null, "Execution of regexp shouldn't catch " + str);
});

QUnit.test("Http or https", function(assert) {
    var re = /TODO: How can we differentiate between http and https (in the shortest way)?/;
    var str = "http://www.google.com";
    var exp = "http";

    assert.ok(re.exec(str) !== null, "Execution of regexp returns something.");
    assert.equal(re.exec(str), exp, "Execution of regexp returns " + exp);

    str = "https://www.google.com";
    exp = "https";

    assert.ok(re.exec(str) !== null, "Execution of regexp returns something.");
    assert.ok(re.exec(str) == exp, "Execution of regexp returns " + exp);
});

QUnit.test("Http[s]?://", function(assert) {
    var re = /TODO: Same as before but this time we want to capture the slashes too!/;
    var str = "http://www.google.com";
    var exp = "http://";

    assert.ok(re.exec(str) !== null, "Execution of regexp returns something.");
    assert.equal(re.exec(str), exp, "Execution of regexp return " + exp);

    str = "https://www.google.com";
    exp = "https://";

    assert.ok(re.exec(str) !== null, "Execution of regexp returns something.");
    assert.equal(re.exec(str), exp, "Execution of regexp return " + exp);
});

QUnit.test("Should catch Github username", function(assert) {
    var re = /TODO: We want to capture the user from a (GitHub)-URL!/;
    var str = "http://github.com/testuser";
    var exp = "http://github.com/testuser";
    var usr = "testuser";

    var resultArray = re.exec(str);

    assert.equal(resultArray[0], exp, "Execution of regexp returns " + exp);
    assert.equal(resultArray[1], usr, "Username is parsed correctly as " + usr);
});

QUnit.test("Should catch Github username containing dashs and numbers", function(assert) {
    var re = /TODO: What if the username contains dashes and numbers?/;
    var str = "http://github.com/3test-user";
    var exp = "http://github.com/3test-user";
    var usr = "3test-user";

    var resultArray = re.exec(str);

    assert.equal(resultArray[0], exp, "Execution of regexp returns " + exp);
    assert.equal(resultArray[1], usr, "Username is parsed correctly as " + usr);

    // NOTE: only single hyphens are allowed (https://github.com/regexhq/regex-username)
});

