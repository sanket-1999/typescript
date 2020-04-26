var circle = {
    x: 100,
    print: function () { return document.write("Circle printed " + circle.x + "<br>"); }
};
var employee = {
    x: 110,
    print: function () { return document.write("Employee printed " + employee.x); }
};
var xyz = { printall: function (circle, employee) {
        circle.print();
        employee.print();
    }
};
xyz.printall(circle, employee);
