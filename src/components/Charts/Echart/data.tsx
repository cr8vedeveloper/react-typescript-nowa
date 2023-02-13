//echart1
export const echart1 = {
  option: {
    valueAxis: {
      axisLine: {
        lineStyle: {
          color: "rgba(171, 167, 167,0.2)",
        },
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ["rgba(171, 167, 167,0.2)"],
        },
      },
      splitLine: {
        lineStyle: {
          color: ["rgba(171, 167, 167,0.2)"],
        },
      },
    },
    grid: {
      top: "6",
      right: "0",
      bottom: "17",
      left: "25",
    },
    xAxis: {
      data: ["2014", "2015", "2016", "2017", "2018", "2019"],
      axisLine: {
        lineStyle: {
          color: "rgba(171, 167, 167,0.2)",
        },
      },
      splitLine: {
        lineStyle: {
          color: "rgba(171, 167, 167,0.2)",
        },
      },
      axisLabel: {
        fontSize: 10,
        color: "#5f6d7a",
      },
    },
    tooltip: {
      trigger: "axis",
      position: ["35%", "32%"],
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: "rgba(171, 167, 167,0.2)",
        },
      },
      axisLine: {
        lineStyle: {
          color: "rgba(171, 167, 167,0.2)",
        },
      },
      axisLabel: {
        fontSize: 10,
        color: "#5f6d7a",
      },
    },
    series: [
      {
        name: "sales",
        type: "bar",
        barMaxWidth: 20,
        data: [10, 15, 9, 18, 10, 15],
        color: "#38cab3",
      },
      {
        name: "growth",
        type: "bar",
        barMaxWidth: 20,
        data: [10, 14, 10, 15, 9, 25],
        color: "#f74f75",
      },
    ],
  },
};
//echart2
export const echart2 = {
  option: {
    grid: {
      top: "6",
      right: "0",
      bottom: "17",
      left: "25",
    },
    xAxis: {
      data: ["2014", "2015", "2016", "2017", "2018", "2019"],
      splitLine: {
        lineStyle: {
          color: "rgba(171, 167, 167,0.2)",
        },
      },
      axisLine: {
        lineStyle: {
          color: "rgba(171, 167, 167,0.2)",
        },
      },
      axisLabel: {
        fontSize: 10,
        color: "#5f6d7a",
      },
    },
    tooltip: {
      trigger: "axis",
      position: ["35%", "32%"],
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: "rgba(171, 167, 167,0.2)",
        },
      },
      axisLine: {
        lineStyle: {
          color: "rgba(171, 167, 167,0.2)",
        },
      },
      axisLabel: {
        fontSize: 10,
        color: "#5f6d7a",
      },
    },
    color: ["#38cab3", "#f74f75"],
    series: [
      {
        name: "sales",
        type: "line",
        smooth: true,
        data: [10, 15, 9, 18, 10, 15],
        color: ["#38cab3"],
      },
      {
        name: "Profit",
        type: "line",
        smooth: true,
        size: 10,
        data: [10, 14, 10, 15, 9, 25],
        color: ["#f74f75"],
      },
    ],
  },
};
//echart3
export const echart3 = {
  option: {
    grid: {
      left: "6%",
      right: "3%",
      bottom: "8%",
      top: "3%",
    },

    xAxis: [
      {
        type: "value",
        axisTick: {
          alignWithLabel: true,
        },
        // prettier-ignore
      },
    ],
    yAxis: [
      {
        type: "category",
        data: ["2014", "2015", "2016", "2017", "2018", "2019"],
      },
      {
        type: "value",
      },
      {
        type: "value",
      },
    ],
    color: ["#38cab3", "#f74f75"],
    series: [
      {
        name: "sales",
        type: "bar",
        barMaxWidth: 20,
        data: [10, 15, 9, 18, 10, 15],
      },
      {
        name: "growth",
        type: "bar",
        barMaxWidth: 20,
        data: [10, 14, 10, 15, 9, 25],
      },
    ],
  },
};
//echart4
export const echart4 = {
  option: {
    legend: {},
    grid: {
      top: 10,
      bottom: 30,
    },
    xAxis: [
      {
        type: "value",
      },
    ],
    yAxis: [
      {
        type: "category",
        data: ["2014", "2015", "2016", "2017", "2018", "2019"],
      },
    ],
    color: ["#38cab3", "#f74f75"],
    series: [
      {
        name: "sales",
        type: "line",
        smooth: true,
        data: [10, 15, 9, 18, 10, 15],
        color: ["#38cab3"],
      },
      {
        name: "Profit",
        type: "line",
        smooth: true,
        size: 10,
        data: [10, 14, 10, 15, 9, 25],
        color: ["#f74f75"],
      },
    ],
  },
};
//echart5
export const echart5 = {
  option: {
    grid: {
      top: "6",
      right: "0",
      bottom: "17",
      left: "25",
    },
    xAxis: {
      data: ["2013", "2014", "2015", "2016", "2017", "2018"],
      axisLine: {
        lineStyle: {
          color: "rgba(171, 167, 167,0.2)",
        },
      },
      axisLabel: {
        fontSize: 10,
        color: "#5f6d7a",
      },
    },
    tooltip: {
      trigger: "axis",
      position: ["35%", "32%"],
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: "rgba(171, 167, 167,0.2)",
        },
      },
      axisLine: {
        lineStyle: {
          color: "rgba(171, 167, 167,0.2)",
        },
      },
      axisLabel: {
        fontSize: 10,
        color: "#5f6d7a",
      },
    },
    color: ["#f74f75", "#38cab3"],
    series: [
      {
        name: "sales",
        type: "bar",
        barMaxWidth: 20,
        stack: "Stack",
        data: [10, 15, 9, 18, 10, 15],
      },
      {
        name: "Profit",
        type: "bar",
        stack: "Stack",
        barMaxWidth: 20,
        data: [10, 14, 10, 15, 9, 25],
      },
    ],
  },
};
//echart6
export const echart6 = {
  option: {
    grid: {
      top: "6",
      right: "10",
      bottom: "17",
      left: "32",
    },
    xAxis: {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "rgba(171, 167, 167,0.2)",
        },
      },
      axisLabel: {
        fontSize: 10,
        color: "#5f6d7a",
      },
      splitLine: {
        lineStyle: {
          color: "rgba(171, 167, 167,0.2)",
        },
      },
    },
    tooltip: {
      trigger: "axis",
      position: ["35%", "32%"],
    },
    yAxis: {
      type: "category",
      data: ["2013", "2014", "2015", "2016", "2017", "2018", "2019"],
      splitLine: {
        lineStyle: {
          color: "rgba(171, 167, 167,0.2)",
        },
      },
      axisLine: {
        lineStyle: {
          color: "rgba(171, 167, 167,0.2)",
        },
      },
      axisLabel: {
        fontSize: 10,
        color: "#5f6d7a",
      },
    },
    series: [
      {
        type: "bar",
        stack: "total",
        data: [15, 17, 19, 13, 28, 22, 36, 15, 25],
        color: "#f74f75",
      },
      {
        type: "bar",
        stack: "total",
        data: [25, 32, 35, 64, 52, 45, 35, 34, 54],
        color: "#38cab3",
      },
    ],
  },
};
//echart7
export const echart7 = {
  option: {
    grid: {
      top: "6",
      right: "0",
      bottom: "17",
      left: "25",
    },
    xAxis: {
      data: ["2013", "2014", "2015", "2016", "2017", "2018"],
      axisLine: {
        lineStyle: {
          color: "rgba(171, 167, 167,0.2)",
        },
      },
      axisLabel: {
        fontSize: 10,
        color: "#5f6d7a",
      },
    },
    tooltip: {
      trigger: "axis",
      position: ["35%", "32%"],
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: "rgba(171, 167, 167,0.2)",
        },
      },
      axisLine: {
        lineStyle: {
          color: "rgba(171, 167, 167,0.2)",
        },
      },
      axisLabel: {
        fontSize: 10,
        color: "#5f6d7a",
      },
    },
    series: [
      {
        name: "data",
        type: "line",
        data: [5, 15, 9, 18, 10, 15],
        color: "#f74f75",
      },
    ],
  },
};
//echart8
export const echart8 = {
  option: {
    grid: {
      top: "6",
      right: "0",
      bottom: "17",
      left: "25",
    },
    xAxis: {
      data: ["2013", "2014", "2015", "2016", "2017", "2018"],
      axisLine: {
        lineStyle: {
          color: "rgba(171, 167, 167,0.2)",
        },
      },
      axisLabel: {
        fontSize: 10,
        color: "#5f6d7a",
      },
    },
    tooltip: {
      trigger: "axis",
      position: ["35%", "32%"],
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: "rgba(171, 167, 167,0.2)",
        },
      },
      axisLine: {
        lineStyle: {
          color: "rgba(171, 167, 167,0.2)",
        },
      },
      axisLabel: {
        fontSize: 10,
        color: "#5f6d7a",
      },
    },
    series: [
      {
        name: "data",
        type: "line",
        smooth: true,
        data: [5, 15, 9, 18, 10, 15],
        color: "#38cab3",
      },
    ],
  },
};

export const echart9 = {
  
  option: {
    tooltip: {
      trigger: "axis",
      position: ["35%", "32%"],
    },
    toolbox: {
      show: false,
    },
    calculable: false,
    categoryAxis: {
      axisLine: {
        lineStyle: {
          color: "#888180",
        },
      },
      splitLine: {
        lineStyle: {
          color: ["rgba(171, 167, 167,0.2)"],
        },
      },
    },
    grid: {
      x: 40,
      y: 20,
      x2: 40,
      y2: 20,
    },
    valueAxis: {
      axisLine: {
        lineStyle: {
          color: "#888180",
        },
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ["rgba(255,255,255,0.1)"],
        },
      },
      splitLine: {
        lineStyle: {
          color: ["rgba(171, 167, 167,0.2)"],
        },
      },
    },
    xAxis: [
      {
        type: "category",
        data: [
          "Jan",
          "Feb",
          "March",
          "April",
          "May",
          "June",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        axisLine: {
          lineStyle: {
            color: "rgba(171, 167, 167,0.2)",
          },
        },
        axisLabel: {
          fontSize: 10,
          color: "#5f6d7a",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        splitLine: {
          lineStyle: {
            color: "rgba(171, 167, 167,0.2)",
          },
        },
        axisLine: {
          lineStyle: {
            color: "rgba(171, 167, 167,0.2)",
          },
        },
        axisLabel: {
          fontSize: 10,
          color: "#5f6d7a",
        },
      },
    ],
    color: ["#38cab3", "#f74f75"],
    series: [
      {
        name: "View Price",
        type: "bar",
        data: [
          2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
        ],
        markPoint: {
          data: [
            {
              type: "max",
              name: "",
            },
            {
              type: "min",
              name: "",
            },
          ],
        },
        markLine: {
          data: [
            {
              type: "average",
              name: "",
            },
          ],
        },
      },
      {
        name: " Purchased Price",
        type: "bar",
        data: [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
        ],
        markPoint: {
          data: [
            {
              name: "Purchased Price",
              value: 182.2,
              xAxis: 7,
              yAxis: 183,
            },
            {
              name: "Purchased Price",
              value: 2.3,
              xAxis: 11,
              yAxis: 3,
            },
          ],
        },
        markLine: {
          data: [
            {
              type: "average",
              name: "",
            },
          ],
        },
      },
    ],
  },
};