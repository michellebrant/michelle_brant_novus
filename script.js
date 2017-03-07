console.log('js loaded')
data = [
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

var width = $('.bargraph').css('width')
var width = width.slice(0, -1)
var width = width.slice(0, -1)
var width1 = parseInt(width)
var width2 = $('.months').css('width')
var width2 = width2.slice(0, -1)
var width2 = width2.slice(0, -1)
var width3 = parseInt(width2)
var widthToUse = width1 - width3
var widthToUse2 = widthToUse/width

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
  barDiv = $('<div class="barDiv"></div>');
  barDiv.css('width', widthToUse2*100 + '%')
  for(i=0;i<data.length;i++){
    bar = $('<div class="bar"></bar>');
    bar.css('width', widthArray[i]*100 + '%');
    barDiv.append(bar);
    $('.bargraph').append(barDiv);
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
  barDiv = $('<div class="barDiv"></div>');
  barDiv.css('width', widthToUse2*100 + '%')
  for(i=0;i<data.length;i++){
    bar = $('<div class="bar"></bar>');
    bar.css('width', widthProfitArray[i]*100 + '%');
    barDiv.append(bar);
    $('.bargraph').prepend(barDiv);
  }
}


$('.inventory').click(function(){
  barDiv.remove();
  calculateInventoryWidth(data);
  createInventoryBars(data);
  $('.header').text('Inventory by Month')
})

$('.profits').click(function(){
  barDiv.remove();
  calculateProfitWidth(data);
  createProfitBars(data);
  $('.header').text('Profits by Month')
})


