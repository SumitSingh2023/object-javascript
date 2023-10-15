/*Rectangle Object

Create a rectangle object with length and width properties
Create two methods area and perimeter, that will return the area and perimeter of the rectangle*/

let rectangle={
    length:10,
    width:20,

    area: function (){
        console.log(this.length*this.width)
    },
    perimeter: function (){
        console.log(2*(this.length+this.width))
    }
}
rectangle.area()
rectangle.perimeter()