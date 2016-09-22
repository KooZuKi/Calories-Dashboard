Morris.Bar ({
    element: 'chart',
    data: [
      {period: 'Day 1', dataA: 0.1, dataB: 0.8, DataC: 0.3},
      {period: 'Day 2', dataA: 0.9, dataB: 0.5, DataC: 0.5},
      {period: 'Day 3', dataA: 0.3, dataB: 0.6, DataC: 0.8},
      
    ],
    xkey: 'period',
    ykeys: ['dataA', 'dataB', 'DataC'],
    labels: ['A', 'B', 'C'],
    pointSize: 2,
    hideHover: 'auto'
});
Morris.Bar ({
    element: 'weight',
    data: [
      {period: 'Day 1', dataA: 150, dataB: 150, DataC: 150},
      {period: 'Day 2', dataA: 180, dataB: 180, DataC: 180},
      {period: 'Day 3', dataA: 160, dataB: 160, DataC: 160}
    ],
    xkey: 'period',
    ykeys: ['dataA', 'dataB', 'DataC'],
    labels: ['A', 'B', 'C'],
    pointSize: 2,
    hideHover: 'auto'
});

Morris.Donut({  
  element: 'donutIn',
  colors: ["#9CC4E4", "#ffca05", "#F26C4F"],
  data: [
    {label: "Day 1", value: 1000},
    {label: "Day 2", value: 1500},
    {label: "Day 3", value: 1250}
  ]

});
Morris.Donut({
  element: 'donutOut',
  colors: ['#ffca05', '#3A89C9', '#54c2bf'],
  data: [
    {label: "Day 1", value: 800},
    {label: "Day 2", value: 900},
    {label: "Day 3", value: 1000}
  ]
});

