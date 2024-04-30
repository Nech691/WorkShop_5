// -> Variables and Strings 
let table;

// -> Preloading table
function preload(){
  table = loadTable('AppsUsage2W.csv', 'csv', 'header');
}

function setup() {
  createCanvas(windowWidth, windowHeight); // -> Canvas to window size
}

// -> Loop to move through data, to get adn draw data
function days(){
  //-> Move through row 1/all columns to get days
  for (x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x) //Set x as row we're using 
    let day = row.get("Days"); //Get specifically "Days" row
    // -> Bottom label for days
    text(day, 30 + x * 60, height - 50);
  }
}

function showApps(){
  // -> DVM loop
  for (x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);//set x as row we are using
    let countDVM = row.get("DVM"); //Get "DVM" rows
    rect(30 + x * 60, height - 100, 13, -countDVM * 50);
  }

  // -> Facebook loop
  for (x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);//set x as row we are using
    let countFace = row.get("Facebook"); //Get "DVM" rows
    rect(45 + x * 60, height - 100, 13, -countFace * 50);
  }

  // -> Instagram loop
  for (x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);//set x as row we are using
    let countInst = row.get("Instagram"); //Get "DVM" rows
    rect(60 + x * 60, height - 100, 13, -countInst * 50);
  }

  // -> Netflix loop
  for (x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);//set x as row we are using
    let countNet = row.get("Netflix"); //Get "DVM" rows
    rect(75 + x * 60, height - 100, 13, -countNet * 50);
  }
}

function draw() {
  background(220);
  days();
  showApps();
}
