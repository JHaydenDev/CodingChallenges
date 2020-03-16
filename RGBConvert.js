function rgb(r, g, b){
    ​
    ​
      function divide (letter){
        if (letter > 255){letter = 255}
        let first = letter/16;
        let second = Math.round(letter%16);
        first = Math.floor(first);
        return [first, second]
      }
    ​
      let newR = divide(r);
      let newG = divide(g);
      let newB = divide(b);
      const arr = [];
      let colors = newR.concat(newG);
      colors = colors.concat(newB);
    ​
      colors.forEach((color, i) => {
        if(color === 10){colors[i] = 'A'}
        else if(color === 11){colors[i] = 'B'}
        else if(color === 12){colors[i] = 'C'}
        else if(color === 13){colors[i] = 'D'}
        else if(color === 14){colors[i] = 'E'}
        else if(color >= 15){colors[i] = 'F'}
      })
    ​
      
      return `#${colors.join("")}`
      
    }