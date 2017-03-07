console.log('js loaded')

var data = [
  {
    month: 'Jan',
    profits: 100000,
    inventory: 4000
  },
  {
    month: 'Feb',
    profits: 120000,
    inventory: 4500
  },
  {
    month: 'Mar',
    profits: 150000,
    inventory: 4700
  },
  {
    month: 'Apr',
    profits: 90000,
    inventory: 3200
  },
  {
    month: 'May',
    profits: 75000,
    inventory: 3000
  },
  {
    month: 'Jun',
    profits: 87000,
    inventory: 2000
  },
  {
    month: 'Jul',
    profits: 190000,
    inventory: 500
  }
]

var calculateWidth = function(data){
  widthArray = []
  for(i=0;i<data.length;i++){
    width = (data[i].inventory/5000)
    widthArray.push(width)
  }
  console.log(widthArray)
}

calculateWidth(data);

var createBars = function(data){
  barDiv = $('<div class="barDiv"></div>')
  for(i=0;i<data.length;i++){
    bar = $('<div class="bar"></bar>');
    bar.css('width', widthArray[i]*100);
    barDiv.append(bar);
    body = $('body');
    body.append(barDiv);
  }
}

createBars(data);


