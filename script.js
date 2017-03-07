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

var calculateInventoryWidth = function(data){
  widthArray = []
  for(i=0;i<data.length;i++){
    width = (data[i].inventory/5000)
    widthArray.push(width)
  }
  console.log(widthArray)
}

calculateInventoryWidth(data);

var createInventoryBars = function(data){
  barDiv = $('<div class="barDiv"></div>')
  for(i=0;i<data.length;i++){
    bar = $('<div class="bar"></bar>');
    bar.css('width', widthArray[i]*500);
    barDiv.append(bar);
    body = $('body');
    body.append(barDiv);
  }
}

createInventoryBars(data);

var calculateProfitWidth = function(data){
  widthProfitArray = []
  for(i=0;i<data.length;i++){
    profitWidth = (data[i].profits/200000)
    widthProfitArray.push(profitWidth)
  }
  console.log(widthProfitArray)
}


var createProfitBars = function(data){
  barDiv = $('<div class="barDiv"></div>')
  for(i=0;i<data.length;i++){
    bar = $('<div class="bar"></bar>');
    bar.css('width', widthProfitArray[i]*500);
    barDiv.append(bar);
    body = $('body');
    body.append(barDiv);
  }
}


$('.inventory').click(function(){
  barDiv.remove();
  calculateInventoryWidth(data);
  createInventoryBars(data);
})

$('.profits').click(function(){
  barDiv.remove();
  calculateProfitWidth(data);
  createProfitBars(data);
})


