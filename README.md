# WorkShop_5
WS5 Project - Apps Usage Graph 

**Link = https://nech691.github.io/WorkShop_5/**

# Workshop Tasks 

- Produce a "data self-portrait" in a p5.js sketch by making a visualization that shows something about yourself from a data set 
- Experiment with different ways to present the data (e.g., using text, images, shapes, or colors)

## Project 

> **Goal:**
>> A visualization of my time on certain apps over two weeks
>> Netflix, merge, Instagram, Facebook
>>  - Images for each
>> Using multicoloured curved rect
>>   - bar

- Surprisingly, there were no issues except for misspelling 

## WS Notes 

**Creating a CSV file** 

- A CSV (Comma Separated Values) file is a spreadsheet that can be created on MS Excel 
- The first line is usually seen as a header row 
- To use a CSV file on a p5.js file, we use tables 
  - You can add and removed rows through code 

One way that you can work with CSV files is:
1. Create a variable to store the data for the table 
   E.g., "let table"
2. Preload the table before the function setup inside a function preload 
   E.g., "table = loadTable('fruits.csv', 'csv', 'header');"  
3. Then, inside function draw you can call specific rows to be displayed on the canvas
   E.g., "let rows = table.getRowCount();
        text('Total number of rows in the table = ' + rows, 20, 100);"
   - You can also access individual rows as well [remember the count starts at 0]
   E.g., "let row = table.getRow(0);
        let week = row.get("Week");
        text(week, 20, 200);
        let apples = row.get("Apples");
        text(apples, 20, 300);"

Another way you can work with CSV files is:
1. Create a variable to store the data for the table 
   E.g., "let table"
2. Preload the table before the function setup inside a function preload 
   E.g., "table = loadTable('fruits.csv', 'csv', 'header');"  
3. Create a looping function to get and draw rows and columns 
   E.g., "function weekLabels(){
      for (x = 0; x < table.getRowCount(); x++){
      let row = table.getRow(x);
      let week = row.get("Week");
      text(week, 30 + x * 60, 350);
      }
      }"
4. Then, call this function inside the draw loop 
   E.g., "weekLabels();"
5. You can then create another function for another column 
   - You can also use a different text color to make it easier to visualize it 
   E.g., "function showApples(){
      for (x = 0; x < table.getRowCount(); x++){
      let row = table.getRow(x);
      let apples = row.get("Apples");
      fill("#E98604");
      text(apples, 30 + x * 60, 320);
      }
      }"
6. You can also use the data from the CSV file to determine other things, for example, the size of a rectangle (creating kind of a bar chart plot)
   - You can do this by changing the "text()" line inside the looping function to create a rectangle 
   E.g. " rect(30 + x *60, 320, 30, -countApples * 100); // - Show apples as rect "
   - The " - " in front of "countApples" is so that the bars are drawn in the right direction [up]

**Important!**
- Note that you can load a table from a local file or from a remote location {loading a URL, for example - Web-scraping}

Another way that you can use CSV files is adding images to your visualization:
1. Add a variable for your image 
   E.g., "let apple;"
2. Load your image inside the function preload
3. Inside the function setup, alter the mode of the image to be centralized 
4. Then, within the function showApples part, set up multiple drawings for a given column by using another loop [nested loop] using the countApples variables as the exit condition
   i.e.,  for (y = 0; y < countApples; y++){}
   - Inside the "{}" we then add the image function
   i.e., image(apple, 30 + x * 60 [equation to move sideways across weeks, 300 - y * 50 [equation to move up as value increases]])
5. Add a label to the end of your function draw section 
   E.g., "text('Week', width/2, 380);"

Another way you can use CSV files is by using long lists 
1. Set up your images variables
2. Preload your images 
3. Set image mode to center
4. Then, create a new function for the list (drawing all values from CSV file as a list)
   E.g., "function allMyFruit(){
      }"
   - To do this we can add one fruit first, and then add the others once we figure out how to make the first list work {skateboard version}
   - First, we need to not allow gaps in our lists when the value of that row/column combination is 0, and add a system to track x while we move through the data.
   - We can do this by copying most of the showApples function in the previous code.
   E.g., "let xPos = 30; [where the list will begin on the canvas]
      for (x = 0; x <table.getRowCount(); x++){
      let row = table.getRow(x)
      let countApples = row.get("Apples")
      if (countApples > 0){
         for (y = 0; y < countApples; y++){
         Image(apple, xPos, 50, 40, 40)
         }
            }
      }"
   - Then we can use "xPos += 20" [itself + 20] to add a gap between images 
   - You can then call your function in the draw section 
      i.e. "allMyFruit()"
5. Now you can add the other fruits by adding the same loop from the "let countApples" part [modified for other images] inside the first for loop of your function allMyFruit
6. To make the list wrap around the canvas [move images to next line when there is no more space] we must add a variable to store the images' y coordinates - then change y [and x] coordinate when x reaches a certain value
   - To do this, we must add a local variable ("let yPos = 50") after the "xPos" variable
   - Next, change the y value of your fruit loops to "yPos"
   - Then, you can add an if loop inside each fruit loop to if x reaches the width of the canvas, wrap around and move down
   i.e., " if (xPos > width){
         xPos = 30; // secondary x position 
         yPos += 50; // secondary y position 
        }"
