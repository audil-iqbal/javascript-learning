class Node{
    constructor(key, value, next=null, prev=null){
        this.key = key;
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class LRU{
    constructor(limit = 10){
        this.size = 0;
        this.limit = limit;
        this.head = null;
        this.tail = null;
        this.cacheMap = {};
    }

    write(key,value){
        const existnode = this.cacheMap[key];
        //if node exists then move to head
        if(existnode){
            this.detach(existnode);
            this.size--;
        }else if(this.size==this.limit){ //if limit is breached
            delete this.cacheMap[this.tail.key];
            this.detach(this.tail);
            this.size--;
        }

        //write head to LL
        if(!this.head){ //head doesnt exist
            this.head = this.tail = new Node(key,value);
        }else{ // change head to current node
            const node = new Node(key,value,this.head);
            this.head.prev = node;
            this.head = node;
        }

        this.cacheMap[key] = this.head;
        this.size++;
    }

    read(key){
        const existnode = this.cacheMap[key];
        if(existnode){ //node exists in cache
            const value = existnode.value;
            if(this.head != existnode){ //make the node as new head if not already
                this.write(key,value); //write will remove node from its position and make it head
            }
            return value;
        }
        console.log(`Item not available in cache for key ${key}`);
    }

    //detach node from its position and attach it to head
    detach(node){
        if(node.prev != null){
            node.prev.next = node.next;
        }else{
            this.head = node.next;
        }

        if(node.next != null){
            node.next.prev = node.prev;
        }else{
            this.tail = node.prev;
        }
    }

    //can write a clear cache also
}

const lru = new LRU(3);
lru.write('a',123);
lru.write('b',456);
lru.write('c',789);
console.log(lru.read('a'));

lru.write('d',0);
console.log(lru);
