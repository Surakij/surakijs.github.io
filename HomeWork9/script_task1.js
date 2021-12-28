

function trangleChecking(a, b, c) {
    var a = a;
    var b = b;
    var c = c;
    
    var aSquared = Math.pow(a, 2)
    var bSquared = Math.pow(b, 2)
    var cSquared = Math.pow(c, 2)
    
    var resC = Math.pow(a, 2) + Math.pow(b, 2)
    var resB = Math.pow(a, 2) + Math.pow(c, 2)
    var resA = Math.pow(c, 2) + Math.pow(b, 2)
     
    if (resC == cSquared || resB == bSquared || resA == aSquared) {
        alert('rectangular triangle');
    } else {
      alert('not a rectangular triangle');
    }
    
    }
    trangleChecking (3, 4, 5);

