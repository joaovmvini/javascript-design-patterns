class WoodenDoor {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
}

const DoorFactory = {
  makeDoor(width, height) {
    return new WoodenDoor(width, height);
  },
};

console.log("Making a new door with 1.5m height and 0.8m width");
const door1 = DoorFactory.makeDoor(0.8, 1.5);
console.log(door1);
