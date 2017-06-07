function sum(rangeTo) {
    var total = 0;
    for (var counter = 1; counter <= rangeTo; counter++) {
        total += counter;
    }
    Window.alert(total);
}