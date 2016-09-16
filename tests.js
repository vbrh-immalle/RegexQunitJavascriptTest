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

