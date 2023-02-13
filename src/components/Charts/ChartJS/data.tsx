import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

export const Linechart = {
  responsive: true,
 
};
// linechartdata
export const linechartdata = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      data: [12, 15, 18, 40, 35, 38, 32, 20, 25, 15, 25, 30],
      borderColor: "#38cab3 ",
      borderWidth: 1,
      
      tension: 0.4,
    },
    {
      data: [10, 20, 25, 55, 50, 45, 35, 30, 45, 35, 55, 40, 80],
      borderColor: "#f74f75",
      borderWidth: 1,
      
      tension: 0.4,
    },
  ],
  
};
// Bar-chart 1
export const Barchart1 = {
  
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};
export const barchart1data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",],
  datasets: [
    {
      data: [10, 24, 20, 25, 35, 50],
      backgroundColor: "#f74f75",
      borderWidth: 1,
      fill: true,
    },
    {
      data: [10, 24, 20, 25, 35, 50],
      backgroundColor: "#d462f9",
      borderWidth: 1,
      fill: true,
    },
    {
      data: [20, 30, 28, 33, 45, 65],
      backgroundColor: "#e5bcf3",
      borderWidth: 1,
      fill: true,
    },
  ],
};
//Horizontalbar
export const Horizontalbarchart:any = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
  
};
export const Horizontalbarchartdata = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      data: [10, 24, 20, 25, 35, 50],
      backgroundColor: "#f74f75",
      borderWidth: 1,
      fill: true,
    },
    {
      data: [10, 24, 20, 25, 35, 50],
      backgroundColor: "#d462f9",
      borderWidth: 1,
      fill: true,
    },
    {
      data: [20, 30, 28, 33, 45, 65],
      backgroundColor: "#e5bcf3",
      borderWidth: 1,
      fill: true,
    },
  ],
};

// Solid Color 
export const SolidColor = {
  
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};
export const SolidColordata = {
  type: "bar",
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      data: [12, 39, 20, 10, 25, 18, 80],
      backgroundColor: "#38cab3",
    },
  ],
};


// With Transparency 
export const Transparency = {
  
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};
export const Transparencydata = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      data: [12, 39, 20, 10, 25, 18],
      backgroundColor: "rgba(254, 78, 140, .5)",
    },
  ],
};

// Using Gradient Color 
export const GradientColor = {
 
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};
export const GradientColordata = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      data: [12, 39, 20, 10, 25, 18],
      backgroundColor: "#41acb5",
      hoverBackgroundColor: "#38cab3",
    },
  ],
};
export const Horizontalbarchart1:any = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "",
    },
  },
};
export const Horizontalbarchartdata1 = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [{
    label: '# of Votes',
    data: [12, 39, 20, 10, 25, 18, 80],
    backgroundColor: ['#6d26be', '#ffbd5a', '#38cab3', '#673ab7', '#ffc107', '#1a9c86']
  }]
};
export const Horizontalbarchart2:any = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {

    title: {
      display: true,
      text: "",
    },
  },
};
export const Horizontalbarchartdata2 = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      data: [12, 39, 20, 10, 25, 18],
      backgroundColor: [
        "#6d26be",
        "#ffbd5a",
        "#673ab7",
        "#ffc107",
        "#1a9c86",
        "#7571f9",
      ],
    },
    {
      data: [22, 30, 25, 30, 20, 40, 80],
      backgroundColor: "rgba(0,123,255,.5)",
    },
  ],
};


export const dchart = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      data: [20, 20, 30, 5, 25],
      backgroundColor: ["#6d26be", "#ffbd5a", "#4ec2f0", "#1a9c86", "#f74f75"],
    },
  ],
  hoverOffset: 4,
};

//  piechart
export const piechart = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      data: [20, 20, 30, 5, 25],
      backgroundColor: ["#6d26be", "#ffbd5a", "#4ec2f0", "#1a9c86", "#f74f75"],
    },
  ],
  hoverOffset: 4,
};

export const Areachart = {
  responsive: true,
  
};
//areachart
export const areachart:any = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Data 1 ",
      borderColor: "#f74f75",
      borderWidth: "1",
      //   backgroundColor: "rgba(	235, 111, 51, 0.7)",
      pointHighlightStroke: "rgba(235, 111, 51 ,1)",
      data: [16, 32, 18, 26, 42, 33, 44],
      fill: true,
      tension: 0.4,
    },
    {
      label: "Data 2",
      //   backgroundColor: "rgba(113, 76, 190, 0.5)",
      borderColor: "#38cab3",
      borderWidth: "1",
      data: [22, 44, 67, 43, 76, 45, 12],
      fill: true,
      tension: 0.4,
    },
  ],
  options: {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      x:
      {
        ticks: {
          fontColor: "#77778e",
        },
        gridLines: {
          color: "rgba(119, 119, 142, 0.2)",
        },
      },

      y:
      {
        ticks: {
          beginAtZero: true,
          fontColor: "#77778e",
        },
        gridLines: {
          color: "rgba(119, 119, 142, 0.2)",
        },
      },

    },

  },
};