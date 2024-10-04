class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

export default class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Tilføjer en ny node, med reference til data-objektet, bagest i køen
    enqueue(data) {
        // Opret en ny node med givne data
        const newNode = new Node(data);

        // Hvis køen er tom, så er både head og tail den nye node
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Hvis køen ikke er tom, så sættes den nye node bagest i køen
            this.tail.next = newNode;
            this.tail = newNode;
        }
        // Opdater længden af køen
        this.length++;
    }

    // Fjerner den node der ligger forrest i køen, og returnerer det referede data-objekt
    dequeue() {
        // Hvis køen er tom, returneres null
        if (!this.head) {
            return null;
        }

        // Gem referencen til den node der skal fjernes
        const removedNode = this.head;

        // Opdater head til at pege på den næste node i køen
        this.head = this.head.next;

        // Hvis den fjernede node var den eneste i køen, så er tail også null
        if (!this.head) {
            this.tail = null;
        }

        // Opdater længden af køen
        this.length--;

        // Returner data-objektet fra den fjernede node
        return removedNode.data;
    }

    // Returnerer data-objektet der lgger forrest i køen, uden at fjerne det
    peek() {
        // Tjekker på om køen er tom, og returnerer data-objektet fra den node der ligger forrest i køen
        // Hvis køen er tom, returneres null i stedet
        return this.head ? this.head.data : null;
    }

    // fortæller hvor mange elementer der er i køen
    size() {
        return this.length;
    }

    // Finder og returnerer elementet på plads 'index', hvor 0 er det forreste, uden at fjerne noget
    get(index) {
        // Tjek om index er gyldigt
        // Hvis index er udenfor køens længde, returneres null
        if (index < 0 || index >= this.length) {
            return null;
        }

        // Sætter en reference til den første node i køen
        let currentNode = this.head;

        // Går igennem køen indtil den ønskede node er fundet
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }

        // Returnerer data-objektet fra den ønskede node
        return currentNode.data;
    }

    // Iterator-metode, der returnerer en generator, som kan bruges til at loope igennem køen (for-of loop)
    [Symbol.iterator]() {
        // Sætter en reference til den første node i køen
        let currentNode = this.head;

        // Returnerer en generator
        return {
            next() {
                // Tjekker om der er flere elementer i køen
                if (currentNode) {
                    // Hvis der er flere elementer, returneres data-objektet fra den nuværende node
                    const value = currentNode.data;

                    // Opdaterer currentNode til at pege på den næste node i køen
                    currentNode = currentNode.next;

                    // Returnerer data-objektet og at iterationen ikke er færdig
                    return { value, done: false };
                } else {
                    // Hvis der ikke er flere elementer, køres følgende for at signalerer afslutningen på iterationen
                    return { done: true };
                }
            },
        };
    }
}
