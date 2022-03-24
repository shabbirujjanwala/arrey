var marks = [30,40,45,35];

function averageMarks(){
  var sum=0; 
  for(var i=0; i<marks.length;i++ ){
    sum=sum+marks[i]

  }
  console.log(sum);
  var avg=sum/marks.length;
  console.log(avg)
}
function setup() {
  createCanvas(400, 400);
averageMarks();
}

function draw() {
  background(150);
}