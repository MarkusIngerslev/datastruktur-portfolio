export class CircularBuffer {
  constructor(size) {
    if (size <= 0) {
      throw new Error("Størrelsen på bufferen skal være større end 0.");
    }
    this.arraySize = size;
    this.array = new Array(size).fill(null);
    this.head = 0; // readIndex
    this.tail = 0; // writeIndex
    this.count = 0; // Antal elementer i bufferen
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
    this.array[this.head] = null; // Valgfrit: Rydder pladsen
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

  capacity() {
    return this.arraySize;
  }

  isEmpty() {
    return this.count === 0;
  }

  isFull() {
    return this.count === this.arraySize;
  }

  get(index) {
    if (index < 0 || index >= this.count) {
      throw new Error("Indeks uden for rækkevidde.");
    }
    const actualIndex = (this.head + index) % this.arraySize;
    return this.array[actualIndex];
  }
}
