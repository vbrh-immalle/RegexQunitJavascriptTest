QUnit.test("hello test", function(assert) {
    assert.ok(1 == "1", "Strings met enkel een getal worden automatisch omgezet naar een Number.");
});

QUnit.test("Simple regex", function(assert) {
    var re = /http/;
    var str = "http://www.google.com";

    assert.ok(re.exec(str) != null, "Execution of regexp returns something.");
    assert.ok(re.exec(str) == "http", "Execution of regexp return 'http'.");
});

QUnit.test("Http or https", function(assert) {
    var re = /http[s]?/;
    var str = "http://www.google.com";

    assert.ok(re.exec(str) != null, "Execution of regexp returns something.");
    assert.ok(re.exec(str) == "http", "Execution of regexp return 'http'.");

    str = "https://www.google.com";
    assert.ok(re.exec(str) == "https", "Execution of regexp return 'https'.");
});

QUnit.test("Http[s]?://", function(assert) {
    var re = /http[s]?:\/\//;
    var str = "http://www.google.com";

    assert.ok(re.exec(str) != null, "Execution of regexp returns something.");
    assert.ok(re.exec(str) == "http://", "Execution of regexp return 'http'.");
});

