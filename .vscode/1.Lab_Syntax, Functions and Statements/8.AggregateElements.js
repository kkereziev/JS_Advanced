function Element(input) {
    let elements = input.map(Number);
    aggregate(elements, 0, (a, b) => a + b);
    aggregate(elements, 0, (a, b) => a + 1 / b);
    aggregate(elements, "", (a, b) => a + b);

    function aggregate(arr, initValue, func) {
        let val = initValue;
        for (let i = 0; i < arr.length; i++) {
            val = func(val, arr[i]);
        }
        console.log(val);
    }
}
Element([1, 2, 3]);