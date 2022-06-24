const p = 3.14;
class circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diametr() {
    return this.radius * 2;
  }

  set diametr(diametr) {
    return diametr;
  }
  get circleLength() {return p * (this.radius*this.radius)};
  get circleArea() {return p * this.diametr};

}

const circleRadius = new circle(15);
console.log(circleRadius);

