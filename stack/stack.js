class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

export default class Stack {
    constructor() {
        // Referencer til sidste element i stacken
        this.tail = null;
        // Størrelsen af stacken
        this.stacksize = 0;
    }

    // Tilføjer en ny node, med reference til data-objektet, på toppen af stacken
    push(data) {
        const newNode = new Node(data); // Opretter en ny node med data-objektet
        newNode.next = this.tail; // Sætter den nye nodes next til at være den nuværende tail
        this.tail = newNode; // Sætter tail til at være den nye node
        this.stacksize++; // Øger stackens størrelse
    }

    // Fjerner den node der ligger øverst på stacken, og returnerer det referede data-objekt
    pop() {
        // Tjekker om stacken er tom
        if (this.tail === null) {
            throw new Error("Stack er tom");
        }

        const removedNode = this.tail.data; // Gemmer data-objektet fra den node der skal fjernes
        this.tail = this.tail.next; // Sætter tail til at være den næste node i stacken
        this.stacksize--; // Reducerer stackens størrel
        return removedNode; // Returnerer data-objektet fra den fjernede node
    }

    // Returnerer data-objektet der ligger øverst på køen, uden at fjerne det
    peek() {
        // Tjekker om stacken er tom
        if (this.tail === null) {
            throw new Error("Stack er tom");
        }

        return this.tail.data; // Returnerer data-objektet fra den øverste node
    }

    // Fortæller hvor mange elementer der er i stacken
    size() {
        return this.stacksize; // Returnerer stackens størrelse
    }

    // Finder og returnerer elementet på plads 'index', hvor 0 er det øverst, uden at fjerne noget
    get(index) {
        // Tjekker om index er større eller mindre end stackens størrelse
        if (index < 0 || index >= this.stacksize) {
            throw new Error("Index matcher ikke stackens størrelse");
        }

        let currentNode = this.tail; // Sætter en reference til at være den øverste node
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next; // Finder den node der matcher index
        }

        return currentNode.data; // Returnerer data-objektet fra den node der matcher index
    }
}
