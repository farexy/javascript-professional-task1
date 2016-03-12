mocha.ui("bdd");

describe("Test. Appearens of buttons and div's after filling of array", function () {

    var resetButton = document.getElementById("reset");

    it("Div's with the elements of the array exist", function () {
        chai.expect(document.getElementById("div0").tagName).to.equal("DIV");
    });
    it("Reset button is visible", function () {
        chai.expect(resetButton.style.visibility).to.equal("visible");
    });
});

describe("Test. Sort of the array", function () {

    it("Array is sorted", function () {
        for (var i = 0; i < array.length - 1; i++)
            assert.isBelow(parseInt(array[i]),parseInt(array[i+1]));
    });
});
