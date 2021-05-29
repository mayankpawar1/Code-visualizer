// ye jquery vali js hai,.........
var snipp = '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta http-equiv="X-UA-Compatible" content="IE=edge">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>Document</title>\n</head>\n<body>\n</body>\n</html>';
//  var snipp = 'good '//debug
var prev = ""
 $('#code').keyup(function () {
    // console.log($('#code').val());//debug
    if($('#code').val() == 'html'){
      $('#code').val(snipp)
    }
    blocks($('#code').val())
  });

// ye simple es7  js hai,............
  function blocks(c){
    // console.log(`for testing: ${c}`);//debug
    var keywords = ['DOCTYPE', 'html', 'head', 'meta', 'title', 'body',
     'function', 'include', 'for', 'while', 'if', 'else', 'void', 'int',
      'float', 'return']
    var line = ""
    var lineno = 1
    for(let x of c){
    // console.log(`for testing in for: ${x}`);//debug
      if(x != '\n') {
        line += x
        // console.log(`for testing in if: ${line}`);//debug
      }
      else {
        // console.log(`${lineno} : ${line}`);//debug
        keywords.forEach((value) => {
          // console.log(`ahhmm: ${line.search(value)} and ${value} and ${line}`);//debug
          if(line.search(value)>=0){ console.log(`found: ${value}`) };
        })
        if(line == 'clear') {
          console.clear()
          $('#code').val("")
        }
        line = ""
        lineno+=1
      }
    }
  }
