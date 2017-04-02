var universities= ["NED", "KU", "Iqra Uni"];
document.write("<br  /> <h4>Push</h4>");
document.write(universities);
universities.push("sir syed uni");
document.write("<br/>")

// splice
var fruits =["apple", "banana", "mango", "cherry"];
document.write("<br <h4>Fruits Name</h4>");
document.write("<br> Fruits Name:" + fruits);
fruits.splice(2,3);
document.write("<br>Remove Fruits:" + fruits);

// slice

var fruits =["apple", "banana", "mango", "cherry"];
document.write("<br <h4>Fruits Name</h4>");
document.write("<br> Fruits Name:" + fruits);
var newFruits= fruits.slice(1,3);
document.write("<br>Copy Fruits:" + newFruits);

// for loops

var count= 1;
for (var count= 1; count <=9; count++){
    document.write(count + "<br>");
}

// table
var num= 1;
for (var num= 1; num <=10; num++){
    document.write("2 *" +num + "=" + 2*num +"<br>");
}

// 17 table
var num= 1;
for (var num= 1; num <=10; num++){
    document.write("17 *" +num + "=" + 17*num +"<br>");
}