import React from "react"
import ReactApexChart from "react-apexcharts";

 export class Statistics3 extends React.Component<{}, { options: any, series: any, }>{
   constructor(props:any) {
     super(props);

     this.state = {

       series: [
         {
            name: "active",
            data: [44, 42, 57, 86, 58, 55, 70, 43, 23, 54, 77, 34],
          },
          {
            name: "inactive",
            data: [-34, -22, -37, -56, -21, -35, -60, -34, -56, -78, -89, -53],
          },
       ],
       options: {
         chart: {
           stacked: true,
           type: "bar",
           toolbar: {
                    show: false,
                  },
           height: 350,
         },
         grid: {
           borderColor: "#f2f6f7",
         },
         colors: ['var(--primary-bg-color)' || "#38cab3", "#e4e7ed"],
         plotOptions: {
           bar: {
             colors: {
               ranges: [
                 {
                   from: -100,
                   to: -46,
                   color: "#ebeff5",
                 },
                 {
                   from: -45,
                   to: 0,
                   color: "#ebeff5",
                 },
               ],
             },
             columnWidth: "35%",
           },
         },
         dataLabels: {
           enabled: false,
         },
         stroke: {
           show: true,
           width: 4,
           colors: ["transparent"],
         },
         legend: {
           show: true,
           position: "top",
         },
         xaxis: {
           type: "month",
           categories: [
             "Jan",
             "Feb",
             "Mar",
             "Apr",
             "May",
             "Jun",
             "Jul",
             "Aug",
             "sep",
             "oct",
             "nov",
             "dec",
           ],
           axisBorder: {
             show: true,
             color: "rgba(119, 119, 142, 0.05)",
             offsetX: 0,
             offsetY: 0,
           },
           axisTicks: {
             show: true,
             borderType: "solid",
             color: "rgba(119, 119, 142, 0.05)",
             width: 6,
             offsetX: 0,
             offsetY: 0,
           },
           labels: {
             rotate: -90,
           },
         },
         yaxis: {
           title: {
             text: "Growth",
             style: {
               color: "#adb5be",
               fontSize: "14px",
               fontFamily: "poppins, sans-serif",
               fontWeight: 600,
               cssClass: "apexcharts-yaxis-label",
             },
           },
           labels: {
             formatter: function (y:any) {
               return y.toFixed(0) + "";
             },
           },
         },
         fill: {
           opacity: 1
         },

       },


     };
   }



   render() {
     return (
       <div id="chart">
         <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
       </div>
     )
   }
 }

 export class Viewers3 extends React.Component<{}, { options: any, series: any, }> {
   constructor(props:any) {
     super(props);
     this.state = {
       series: [
           {
             name: "Male",
             data: [44, 42, 57, 86, 58, 55, 70],
             color: "#38cab3",
           },
           {
             name: "Female",
             data: [34, 22, 47, 56, 21, 35, 60],
             color: "#ebeff5",
           },
         ],
       options: {
         chart: {
           type: "bar",
           stacked: true,
           toolbar: {
             show: false,
           },
           height: 330,
         },
         grid: {
           borderColor: "#eff2f6",
         },
         colors: ['var(--primary-bg-color)' || "#38cab3", "#e4e7ed"],
         dataLabels: {
           enabled: false,
         },
         plotOptions: {
           bar: {
             horizontal: false,
             columnWidth: "30%",
           },
         },  
         stroke: {
           show: true,
           width: 2,
           colors: ["transparent"],
         },
         legend: {
           show: true,
           position: "top",
         },
         states: {
           hover: {
             filter: {
               type: "none",
             },
           },
         },
      
       yaxis: {
           title: {
             style: {
               color: "	#adb5be",
               fontSize: "14px",
               fontFamily: "poppins, sans-serif",
               fontWeight: 600,
               cssClass: "apexcharts-yaxis-label",
             },
           },
           labels: {
             formatter: function (y:any) {
               return y.toFixed(0) + "";
             },
           },
         },
         xaxis: {
           categories: ["Mon", "Tue", "Web", "Thu", "Fri", "Sat", "Sun"],
           axisBorder: {
             show: true,
             color: "rgba(119, 119, 142, 0.05)",
             offsetX: 0,
             offsetY: 0,
           },
           axisTicks: {
             show: true,
             borderType: "solid",
             color: "rgba(119, 119, 142, 0.05)",
             width: 6,
             offsetX: 0,
             offsetY: 0,
           },
         },
         fill: {
           opacity: 1,
         },
         
     }
    }
   }

   render() {
     return (
       <div id="chart">
         <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
       </div>
     );
   }
 }

export const COLUMNS:any = [
  {
    Header: "Purchase Date",
    accessor: "PurchaseDate",
    className: "text-center ",
  },
  {
    Header: "Client Name",
    accessor: "ClientName",
    className: "text-center ",
  },
  {
    Header: "Product ID",
    accessor: "ProductID",
    className: "text-center ",
  },
  {
    Header: "Product",
    accessor: "Product",
    className: "text-center ",
  },
  {
    Header: "Product Cost",
    accessor: "ProductCost",
    className: "text-center ",
  },
  {
    Header: "Payment Mode",
    accessor: "PaymentMode",
    className: "text-center ",
  },
  {
    Header: "Status",
    accessor: "Status",
    className: "text-center ",
  },
];

export const DATATABLE = [
  {
    PurchaseDate: "#01",
    ClientName: "Tiger Nixon",
    ProductID: "PRO12345",
    Product: "Mi LED Smart TV 4A 80",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-success">Delivered</span>,
    ProductCost: "$320,800",
    color: "badge badge-success",
  },
  {
    PurchaseDate: "#02",
    ClientName: "Garrett Winters",
    ProductID: "PRO8765",
    Product: "Thomson R9 122cm (48 inch) Full HD LED TV",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-primary">Add Cart</span>,
    ProductCost: "$170,750",
  },
  {
    PurchaseDate: "#03",
    ClientName: "Ashton Cox",
    ProductID: "PRO54321",
    Product: "Vu 80cm (32 inch) HD Ready LED TV",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-orange">Pending</span>,
    ProductCost: "$86,000",
  },
  {
    PurchaseDate: "#04",
    ClientName: "Cedric Kelly",
    ProductID: "PRO97654",
    Product: "Micromax 81cm (32 inch) HD Ready LED TV",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-secondary">Delivering</span>,
    ProductCost: "$433,060",
  },
  {
    PurchaseDate: "#05",
    ClientName: "Airi Satou",
    ProductID: "PRO4532",
    Product: "HP 200 Mouse &amp; Wireless Laptop Keyboard",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-danger">Shipped</span>,
    ProductCost: "$162,700",
  },
  {
    PurchaseDate: "#06",
    ClientName: "Brielle Williamson",
    ProductID: "PRO6789",
    Product: "Digisol DG-HR3400 Router ",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-secondary">Delivering</span>,
    ProductCost: "$372,000",
  },
  {
    PurchaseDate: "#07",
    ClientName: "Herrod Chandler",
    ProductID: "PRO4567",
    Product: "Dell WM118 Wireless Optical Mouse",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-info">Add to Cart</span>,
    ProductCost: "$137,500",
  },
  {
    PurchaseDate: "#08",
    ClientName: "Rhona Davidson",
    ProductID: "PRO32156",
    Product: "Dell 16 inch Laptop Backpack ",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-pink">Delivered</span>,
    ProductCost: "$327,900",
  },
  {
    PurchaseDate: "#09",
    ClientName: "Colleen Hurst",
    ProductID: "PRO35785",
    Product: "Mi LED Smart TV 4A 80",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-danger">Shipped</span>,
    ProductCost: "$205,500",
  },
  {
    PurchaseDate: "#10",
    ClientName: "Sonya Frost",
    ProductID: "PRO23409",
    Product: "Vu 80cm (32 inch) HD Ready LED TV",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-secondary">Delivering</span>,
    ProductCost: "$103,600",
  },
  {
    PurchaseDate: "#11",
    ClientName: "Jena Gaines",
    ProductID: "PRO12345",
    Product: "Digisol DG-HR3400 Router",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-success">Delivered</span>,
    ProductCost: "$90,560",
  },
  {
    PurchaseDate: "#12",
    ClientName: "Quinn Flynn",
    ProductID: "PRO64326",
    Product: "Dell 16 inch Laptop Backpack",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-info">Add to Cart</span>,
    ProductCost: "$342,000",
  },
  {
    PurchaseDate: "#13",
    ClientName: "Charde Marshall",
    ProductID: "PRO87563",
    Product: "Thomson R9 122cm (48 inch) Full HD LED TV",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-orange">Pending</span>,
    ProductCost: "$470,600",
  },
  {
    PurchaseDate: "#14",
    ClientName: "Haley Kennedy",
    ProductID: "PRO65439",
    Product: "Mi LED Smart TV 4A 80",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-orange">Pending</span>,
    ProductCost: "$313,500",
  },
  {
    PurchaseDate: "#15",
    ClientName: "Tatyana Fitzpatrick",
    ProductID: "PRO097254",
    Product: "Thomson R9 122cm (48 inch) Full HD LED TV",
    PaymentMode: "Cash on delivered ",
    Status: <span className="badge badge-info">Add to Cart</span>,
    ProductCost: "$385,750",
  },
  {
    PurchaseDate: "#16",
    ClientName: "Michael Silva",
    ProductID: "PRO45312",
    Product: "Mi LED Smart TV 4A 80",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-danger">Shipped</span>,
    ProductCost: "$198,500",
  },
  {
    PurchaseDate: "#17",
    ClientName: "Paul Byrd",
    ProductID: "PRO45674",
    Product: "Digisol DG-HR3400 Router",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-info">Add to Cart</span>,
    ProductCost: "$725,000",
  },
  {
    PurchaseDate: "#18",
    ClientName: "Gloria Little",
    ProductID: "PRO34653",
    Product: "Dell WM118 Wireless Optical Mouse",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-orange">Pending</span>,
    ProductCost: "$237,500",
  },
  {
    PurchaseDate: "#19",
    ClientName: "Bradley Greer",
    ProductID: "PRO24467",
    Product: "Dell 16 inch Laptop Backpack ",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-orange">Pending</span>,
    ProductCost: "$132,000",
  },
  {
    PurchaseDate: "#20",
    ClientName: "Dai Rios",
    ProductID: "PRO35323",
    Product: "Vu 80cm (32 inch) HD Ready LED TV",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-info">Add to Cart</span>,
    ProductCost: "$217,500",
  },
  {
    PurchaseDate: "#21",
    ClientName: "Jenette Caldwell",
    ProductID: "PRO56793",
    Product: "HP 200 Mouse &amp; Wireless Laptop Keyboard",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-success">Delivered</span>,
    ProductCost: "$345,000",
  },
  {
    PurchaseDate: "#22",
    ClientName: "Yuri Berry",
    ProductID: "PRO32156",
    Product: "Dell 16 inch Laptop Backpack ",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-info">Add to Cart</span>,
    ProductCost: "$675,000",
  },
  {
    PurchaseDate: "#23",
    ClientName: "Caesar Vance",
    ProductID: "PRO4567",
    Product: "Thomson R9 122cm (48 inch) Full HD LED TV ",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-orange">Pending</span>,
    ProductCost: "$106,450",
  },
  {
    PurchaseDate: "#24",
    ClientName: "Doris Wilder",
    ProductID: "PRO6789",
    Product: "Dell WM118 Wireless Optical Mouse",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-danger">Shipped</span>,
    ProductCost: "$85,600",
  },
  {
    PurchaseDate: "#25",
    ClientName: "Angelica Ramos",
    ProductID: "PRO4532",
    Product: "Digisol DG-HR3400 Router ",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-success">Delivered</span>,
    ProductCost: "$1,200,000",
  },
  {
    PurchaseDate: "#26",
    ClientName: "Gavin Joyce",
    ProductID: "PRO97654",
    Product: "Dell WM118 Wireless Optical Mouse",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-success">Delivered</span>,
    ProductCost: "$92,575",
  },
  {
    PurchaseDate: "#27",
    ClientName: "Jennifer Chang",
    ProductID: "PRO45412",
    Product: "Thomson R9 122cm (48 inch) Full HD LED TV ",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-danger">Shipped</span>,
    ProductCost: "$357,650",
  },
  {
    PurchaseDate: "#28",
    ClientName: "Brenden Wagner",
    ProductID: "PRO12345",
    Product: "Dell 16 inch Laptop Backpack",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-info">Add to Cart</span>,
    ProductCost: "$206,850",
  },
  {
    PurchaseDate: "#29",
    ClientName: "Fiona Green",
    ProductID: "PRO8765",
    Product: "Digisol DG-HR3400 Router ",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-orange">Pending</span>,
    ProductCost: "$850,000",
  },
  {
    PurchaseDate: "#30",
    ClientName: "Shou Itou",
    ProductID: "PRO54321",
    Product: "Dell WM118 Wireless Optical Mouse",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-success">Delivered</span>,
    ProductCost: "$163,000",
  },
];
export const GlobalFilter = ({ filter, setFilter }:any) => {
  return (
    <span className="d-flex ms-auto">
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        className="form-control mb-4"
        placeholder="Search..."
      />
    </span>
  );
};