export default class doublyLinkedList {
    head = null;
    tail = null;

    // ========================================
    // metoder der behandler data objekter
    // ========================================

    // tilføjer et element til slutningen af listen
    addLast(data) {
        const newNode = new Node(data);
        this.addNodeLast(newNode);
    }

    // tilføjer et element til begyndelsen af listen
    addFirst(data) {
        const newNode = new Node(data);
        this.addNodeFirst(newNode);
    }

    // returnerer elementet på plads nummer index
    get(index) {}

    // finder plads nummer for det angivne element (payload)
    indexOf(data) {}

    // indsætter et nyt element efter plads nummer index
    insertAt(index, data) {}

    // indsætter et nyt element før plads nummer index
    insertBefore(index, data) {}

    // returnerer det første element i listen
    first() {}

    // returnerer det sidste element i listen
    last() {}

    // fjerner elementet fra listen (hvis det altså var der)
    remove(data) {}

    // fjerner elementet på det pågældende index
    removeIndex(index) {}

    // fjerner det første element i listen - og returnerer elementet
    removeFirst() {
        // Hvis listen er tom
        if (this.head === null) return null;

        // Gem den node, der fjernes til at returnere dens data
        const removedNode = this.head;

        // Hvis der kun er ét element i listen
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            // Fjern det første element, og opdater head
            this.head = this.head.next;
            this.head.prev = null;
        }

        // Returner data fra den fjernede node
        return removedNode.data;
    }

    // fjerner det sidste element i listen - og returnerer elementet
    removeLast() {
        // Hvis listen er tom
        if (this.tail === null) return null;

        // Gem den node, der fjernes til at returnere dens data
        const removedNode = this.tail;

        // Hvis der kun er ét element i listen
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            // Fjern det sidste element, og opdater tail
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        // Returner data fra den fjernede node
        return removedNode.data;
    }

    // ========================================
    // metoder til at operere direkte på nodes
    // ========================================

    // tilføjer en ny node til slutningen af listen
    addNodeLast(newNode) {
        if (this.tail === null) {
            // Hvis listen er tom
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Tilføj til slutningen af listen
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // tilføjer en ny node i starten af listen
    addNodeFirst(newNode) {
        if (this.head === null) {
            // Hvis listen er tom
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Tilføj til starten af listen
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    // indsætter en ny node efter en eksisterende
    insertAfterNode(newNode, existingNode) {
        if (existingNode === null) {
            // Kan ikke indsætte efter en ikke-eksisterende node
            return;
        }

        // Hvis eksisterende node er den sidste node
        if (existingNode === this.tail) {
            this.addNodeLast(newNode); // Brug addNodeLast, da det er samme situation
        } else {
            // Indsæt ny node mellem existingNode og existingNode.next
            newNode.next = existingNode.next;
            newNode.prev = existingNode;

            existingNode.next.prev = newNode; // Forbind den næste node til newNode
            existingNode.next = newNode; // Forbind existingNode til newNode
        }
    }

    // indsætter en ny node før en eksisterende
    insertBeforeNode(newNode, existingNode) {
        if (existingNode === null) {
            // Kan ikke indsætte før en ikke-eksisterende node
            return;
        }

        // Hvis eksisterende node er den første node
        if (existingNode === this.head) {
            this.addNodeFirst(newNode); // Brug addNodeFirst, da det er samme situation
        } else {
            // Indsæt ny node mellem existingNode.prev og existingNode
            newNode.next = existingNode;
            newNode.prev = existingNode.prev;

            existingNode.prev.next = newNode; // Forbind den forrige node til newNode
            existingNode.prev = newNode; // Forbind existingNode til newNode
        }
    }

    // fjerner en node fra listen
    removeNode(existingNode) {
        if (existingNode === null || this.head === null) {
            // Hvis noden eller listen er tom, gør ingenting
            return null;
        }

        // Hvis det er den eneste node i listen
        if (this.head === this.tail && this.head === existingNode) {
            this.head = null;
            this.tail = null;
        }
        // Hvis det er den første node
        else if (existingNode === this.head) {
            this.head = this.head.next;
            this.head.prev = null; // Fjern referencen til den gamle head
        }
        // Hvis det er den sidste node
        else if (existingNode === this.tail) {
            this.tail = this.tail.prev;
            this.tail.next = null; // Fjern referencen til den gamle tail
        }
        // Hvis det er en node i midten
        else {
            existingNode.prev.next = existingNode.next;
            existingNode.next.prev = existingNode.prev;
        }

        // Til sidst, fjern referencerne til listen fra den fjernede node
        existingNode.next = null;
        existingNode.prev = null;

        // Returnér dataen fra den fjernede node
        return existingNode.data;
    }

    // returnerer noden på plads nummer index
    nodeAt(index) {
        let current = this.head;
        let count = 0;
        while (current !== null) {
            if (count === index) {
                return current;
            }
            count++;
            current = current.next;
        }
        return null
    }

    // bytter om på to nodes pladser i listen
    swapNodes(node1, node2) {
        if (node1 === node2 || node1 === null || node2 === null) {
            return;  // Hvis de er den samme node eller en af dem er null, gør ingenting
        }
    
        // Gem referencerne til node1 og node2's forrige og næste noder
        const prev1 = node1.prev;
        const next1 = node1.next;
        const prev2 = node2.prev;
        const next2 = node2.next;
    
        // Hvis node1 er lige før node2 (de er naboer)
        if (next1 === node2) {
            // Byt om ved at opdatere noderne
            node1.next = next2;
            node1.prev = node2;
            node2.next = node1;
            node2.prev = prev1;
    
            // Opdater den næste node efter node2 (hvis den findes)
            if (next2) {
                next2.prev = node1;
            }
    
            // Opdater den forrige node før node1 (hvis den findes)
            if (prev1) {
                prev1.next = node2;
            }
        }
        // Hvis node2 er lige før node1 (de er naboer, men i omvendt rækkefølge)
        else if (next2 === node1) {
            // Byt om ved at opdatere noderne
            node2.next = next1;
            node2.prev = node1;
            node1.next = node2;
            node1.prev = prev2;
    
            // Opdater den næste node efter node1 (hvis den findes)
            if (next1) {
                next1.prev = node2;
            }
    
            // Opdater den forrige node før node2 (hvis den findes)
            if (prev2) {
                prev2.next = node1;
            }
        }
        // Hvis node1 og node2 ikke er naboer
        else {
            // Opdater node1's nabonoder til at pege på node2
            if (prev1) {
                prev1.next = node2;
            }
            if (next1) {
                next1.prev = node2;
            }
    
            // Opdater node2's nabonoder til at pege på node1
            if (prev2) {
                prev2.next = node1;
            }
            if (next2) {
                next2.prev = node1;
            }
    
            // Byt node1 og node2's next og prev referencer
            node1.next = next2;
            node1.prev = prev2;
            node2.next = next1;
            node2.prev = prev1;
        }
    
        // Hvis node1 eller node2 var head eller tail, skal vi opdatere listen
        if (this.head === node1) {
            this.head = node2;
        } else if (this.head === node2) {
            this.head = node1;
        }
    
        if (this.tail === node1) {
            this.tail = node2;
        } else if (this.tail === node2) {
            this.tail = node1;
        }
    }
    

    // ========================================
    // metoder der omhandler hele listen
    // ========================================

    // der fjerner alle nodes fra listen, og sørger for at den er tom
    clear() {
        this.head = null;
        this.tail = null;
    }

    // der returnerer antallet af nodes i listen
    size() {
        let count = 0;
        let current = this.head;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }

    // ========================================
    // Udvikling, testing og debugging
    // ========================================

    // der console.log'er alle data-elementer i listen
    dumpList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
