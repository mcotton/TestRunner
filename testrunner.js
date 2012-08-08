var Test = function(test_fn) {
    this.test_fn = test_fn
}

var TestRunner = function(){
    var queue = [];
    
    this.add = function(test) {
        queue.push(test)    
    }

    this.remove = function() {
        queue.shift()
    }

    this.length = function() {
            return queue.length
    }

    this.show = function() {
        for(var i = 0; i < queue.length; i++) {
            console.log(queue);
        }   
    }

    this.run = function() {
        if(queue.length > 0) { 
            console.log('Starting run() queue lenght is: ' + queue.length)
            queue[0].test_fn()
            this.remove()
            console.log('Removed that test, queue length is: ' + queue.length)
            this.run()
        } else {
            console.log('Queue is empty')
        }   
    }
    

}
   
