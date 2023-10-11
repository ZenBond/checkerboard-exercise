    const body = document.body;
    console.log(body)

    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.width = '800px';
    container.style.height = '800px';
/*
  const tile = document.createElement('div');
  tile.style.width = '12.5%';
  tile.style.height = '12.5%';
  tile.style.backgroundColor = 'teal';

  const tile2 = document.createElement('div');
  tile2.style.width = '12.5%';
  tile2.style.height = '12.5%';
  tile2.style.backgroundColor = 'black';


  container.appendChild(tile);
  container.appendChild(tile2);
  */

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      // Create a tile
      const tile = document.createElement('div');
      tile.style.width = '12.5%';
      tile.style.height = '12.5%';
  
      // Use row and column indices to alternate colors
      if ((row + col) % 2 === 0) {
        tile.style.backgroundColor = 'teal';
      } else {
        tile.style.backgroundColor = 'black';
      }
  
      // Append the tile to the container
      container.appendChild(tile);
    }
  }


  body.appendChild(container);
