export class CircularBuffer {
  constructor(size) {
    if (size <= 0) {
      throw new Error("Størrelsen på bufferen skal være større end 0.");
    }
    this.arraySize = size;
    this.array = new Array(size).fill(null);
    this.head = 0;
    this.tail = 0;
    x;
    this.count = 0;
  }

  enqueue(data) {
    if (this.isFull()) {
      throw new Error("Bufferen er fuld. Kan ikke tilføje element.");
    }
    this.array[this.tail] = data;
    this.tail = (this.tail + 1) % this.arraySize;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Bufferen er tom. Kan ikke fjerne element.");
    }
    const data = this.array[this.head];
    this.array[this.head] = null;
    this.head = (this.head + 1) % this.arraySize;
    this.count--;
    return data;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.array[this.head];
  }

  size() {
    return this.count;
  }

  get(index) {
    if (index < 0 || index >= this.count) {
      throw new Error("Indeks uden for rækkevidde.");
    }
    const actualIndex = (this.head + index) % this.arraySize;
    return this.array[actualIndex];
  }

  // ********************
  //    Helper methods
  // ********************

  capacity() {
    return this.arraySize;
  }

  isEmpty() {
    return this.count === 0;
  }

  isFull() {
    return this.count === this.arraySize;
  }
}
