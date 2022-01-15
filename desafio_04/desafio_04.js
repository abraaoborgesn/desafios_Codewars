function toCamelCase(string){
    let str = ''
    
    if (string.split(/[-_]+/g)[0].charAt(0) === string.split(/[-_]+/g)[0].charAt(0).toUpperCase()) {
      string.split(/[-_]+/g).forEach((element, i) => {
          const newElement = element.charAt(0).toUpperCase()
          str += newElement + string.split(/[-_]+/g)[i].slice(1)
      }) 
  
      console.log(str)
      return str
      
  } else {
      string.split(/[-_]+/g).splice(1).forEach((element, i) => {
          const newElement = element.charAt(0).toUpperCase()
          str += newElement + string.split(/[-_]+/g).splice(1)[i].slice(1)
      })
  
      strFinal = string.split(/[-_]+/g).splice(0, 1) + str
  
      console.log(strFinal)
      return strFinal 
  }
  }
  
  toCamelCase('um-dois--quatro' )
