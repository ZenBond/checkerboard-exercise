    const body = document.body;
    console.log(body);

    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.width = '800px';
    container.style.height = '800px';

    
    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    }
    
    /*
    function gradientColor(row, col) {
        const r = Math.floor((row / 7) * 255);
        const g = Math.floor((col / 7) * 255);
        const b = 255 - r;

        return `rgb(${r},${g},${b})`;
    }
    */

    function updateTileColor(tile) {
        tile.style.backgroundColor = getRandomColor()
        setInterval(() => updateTileColor(tile), 2000);
    }


  for (let row = 0; row < 8; row++) {//for loop that creates a row
    for (let col = 0; col < 8; col++) {//for loop that crates a col
      // Create a tile
      const tile = document.createElement('div');//for each row and col create a tile
      tile.style.width = '12.5%'; 
      tile.style.height = '12.5%';
      tile.style.borderRadius = '100px';

      

  
      /*
      // Use row and column indices to alternate colors
      if ((row + col) % 2 === 0) {//if the row and the col is even
        tile.style.backgroundColor = 'teal';//background color is teal
      } else {
        tile.style.backgroundColor = 'black';//if not even background color black
      }
      */
      
      
      // Append the tile to the container
      container.appendChild(tile);//add tiles into the container
      updateTileColor(tile);
    }
  }


  body.appendChild(container);
