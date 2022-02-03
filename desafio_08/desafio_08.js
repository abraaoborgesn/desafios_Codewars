
// let deleteNth = [1,1,3,3,7,2,2,2,2]
// var counts = {};
// deleteNth.forEach(function (x) { 
//     counts[x] = (counts[x] || 0) + 1 

//     console.log(counts[x] <= 3)
// });

// console.log(counts)
// }

// deleteNth([1,1,3,3,7,2,2,2,2], 3)

function deleteNth(arr,x) {
    var cache = {};
    arr.filter(function(n) {
      cache[n] = (cache[n]||0) + 1;
      console.log(cache[n] <= x)
    });
  }

  deleteNth([1,1,3,3,7,2,2,2,2], 3)