// MIP = Making it Pretty 

// -> Variables and Strings 
let table;
let title;
let subtitle;
let lableUsage;
let labelDay;
let labelSource;
let legenda;
let DVM;
let Inst;
let Face;
let Net;

// -> Preloading table
function preload(){
  table = loadTable('AppsUsage2W.csv', 'csv', 'header');
  DVM = loadImage('Images/DVM.png');
  Inst = loadImage('Images/Inst.png');
  Face = loadImage('Images/Face.png');
  Net = loadImage('Images/Net.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight); // -> Canvas to window size
  pixelDensity(1);
}

// -> Loop to move through data, to get adn draw data
function days(){
  //-> Move through row 1/all columns to get days
  for (x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x) //Set x as row we're using 
    let day = row.get("Days"); //Get specifically "Days" row
    // -> Bottom label for days
    fill("#553945"); // - MIP
    textStyle(BOLD); // - MIP
    textFont('Bell MT'); // - MIIP
    text(day, 30 + x * 60, height - 30);
  }
}

function showApps(){
  // -> DVM loop
  for (x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);//set x as row we are using
    let countDVM = row.get("DVM"); //Get "DVM" rows
    fill("#ED0563") // - MIP
    rect(30 + x * 60, height - 60, 13, -countDVM * 50, 5);
  }

  // -> Facebook loop
  for (x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);//set x as row we are using
    let countFace = row.get("Facebook"); //Get "DVM" rows
    fill("#B1245D"); // - MIP
    rect(45 + x * 60, height - 60, 13, -countFace * 50, 5);
  }

  // -> Instagram loop
  for (x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);//set x as row we are using
    let countInst = row.get("Instagram"); //Get "DVM" rows
    fill("#7A2849"); // - MIP
    rect(60 + x * 60, height - 60, 13, -countInst * 50, 5);
  }

  // -> Netflix loop
  for (x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);//set x as row we are using
    let countNet = row.get("Netflix"); //Get "DVM" rows
    fill("#592339"); // - MIP
    rect(75 + x * 60, height - 60, 13, -countNet * 50, 5);
  }
}

function squares(){
  fill("#592339");
  rect(940, 580, 40, 10, 20); // - Netflix sq

  fill("#7A2849");
  rect(940, 440, 40, 10, 20); // - Instagram sq
  
  fill("#B1245D");
  rect(940, 300, 40, 10, 20); // - Facebook sq

  fill("#ED0563");
  rect(940, 150, 40, 10, 20); // - DVM sq
}

function draw() {
  background("#D8CFD3");
  days();
  showApps();
  squares();

  // - Rounded line
  fill("#571532");
  rect(880, 20, 4, 680, 20); // - Making side line


  // - Title
  title = createElement('h1', 'My Time Online')
  title.position(1/4 * width, 0); // - MIP
  title.style('color', '#3E0D23'); // - MIP
  title.style('font-size', '25px'); // - MIP
  title.style('font-family', 'Bell MT'); // - MIP

  // - Subtitle
  subtitle = createElement('i', 'Time spent on the apps "Design Ville Merge", "Facebook", "Instagram" & "Netflix"')
  subtitle.position(1/4 * width - 120, 50); // - MIP
  subtitle.style('color', '#611E3C'); // - MIP
  subtitle.style('font-size', '18px'); // - MIP
  subtitle.style('font-family', 'Bell MT'); // - MIP

  // - Labels 
    // - Usage
    lableUsage = createElement('i', 'Usage')
    lableUsage.position(20, 1/3 * height); // - MIP
    lableUsage.style('color', '#9A3A64'); // - MIP
    lableUsage.style('font-size', '14px'); // - MIP
    lableUsage.style('font-family', 'Bell MT'); // - MIP

    // - Days 
    labelDay = createElement('i', 'Days')
    labelDay.position(1/4 * width, height - 15); // - MIP
    labelDay.style('color', '#9A3A64'); // - MIP
    labelDay.style('font-size', '14px'); // - MIP
    labelDay.style('font-family', 'Bell MT'); // - MIP

    // - Source 
    labelSource = createElement('i', 'Source: Personal "Samsung Digital Wellbeing" data')
    labelSource.position(600, height - 15); // - MIP
    labelSource.style('color', '#AF7D93'); // - MIP
    labelSource.style('font-size', '14px'); // - MIP
    labelSource.style('font-family', 'Bell MT'); // - MIP

    // - Legenda 
    legenda = createElement('t', 'Legend')
    legenda.position(910, 20); // - MIP
    legenda.style('color', '#9A3A64'); // - MIP
    legenda.style('font-size', '18px'); // - MIP
    legenda.style('font-family', 'Bell MT'); // - MIP

      text('Design Ville Merge', 910, 180);
      image(DVM, 920, 60, 80, 80);
      text('Facebook', 935, 330);
      image(Face, 920, 210, 80, 80);
      text('Instagram', 935, 470);
      image(Inst, 920, 350, 80, 80);
      text('Netflix', 940, 610);
      image(Net, 920, 490, 80, 80); 
      textAlign('left');
  
  noStroke();     
}
