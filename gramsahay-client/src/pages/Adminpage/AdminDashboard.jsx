import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar, Pie } from "react-chartjs-2";

const AdminDashboard = () => {
//   /* //Dyanmically set the state based on data received from server.
//     const [complaintData, setComplaintData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");

//     useEffect(() => {
//       const fetchComplaintData = async () => {
//         try {
//           setLoading(true);
//           const response = await axios.get("YOUR_API_ENDPOINT_HERE");
//           setComplaintData(response.data);
//           setLoading(false);
//           setError("");
//         } catch (error) {
//           setError("Failed to fetch complaint data. Please try again.");
//           setLoading(false);
//         }
//       };

//       fetchComplaintData();
//     }, []);

//     // Calculate counts for different complaint statuses
//     const newCount = complaintData.filter(
//       (complaint) => complaint.status === "new"
//     ).length;
//     const inProcessCount = complaintData.filter(
//       (complaint) => complaint.status === "in-process"
//     ).length;
//     const completedCount = complaintData.filter(
//       (complaint) => complaint.status === "completed"
//     ).length;

//     // Data for bar chart
//     const barChartData = {
//       labels: ["New", "In Process", "Completed"],
//       datasets: [
//         {
//           label: "Complaint Count",
//           backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
//           borderColor: "rgba(0,0,0,1)",
//           borderWidth: 2,
//           data: [newCount, inProcessCount, completedCount]
//         }
//       ]
//     };

//     // Data for pie chart
//     const pieChartData = {
//       labels: ["New", "In Process", "Completed"],
//       datasets: [
//         {
//           data: [newCount, inProcessCount, completedCount],
//           backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
//           hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
//         }
//       ]
//     };

//   return (
//     Dynamically fetching data from the server instead of hardcoding it.
//     <div>
//       <h2>Admin Dashboard</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>Error: {error}</p>
//       ) : (
//         <div>
//           <div>
//             <h3>Complaint Count</h3>
//             <p>New: {newCount}</p>
//             <p>In Process: {inProcessCount}</p>
//             <p>Completed: {completedCount}</p>
//           </div>
//           <div style={{ width: "50%", margin: "20px auto" }}>
//             <h3>Complaints Bar Chart</h3>
//             <Bar
//               data={barChartData}
//               options={{
//                 scales: {
//                   yAxes: [{ ticks: { beginAtZero: true } }]
//                 }
//               }}
//             />
//           </div>
//           <div style={{ width: "50%", margin: "20px auto" }}>
//             <h3>Complaints Pie Chart</h3>
//             <Pie data={pieChartData} />
//           </div>
//         </div>
//       )}
//     </div>
//   );*/

//   // Hardcoded complaint counts
//   const newCount = 10;
//   const inProcessCount = 20;
//   const completedCount = 15;

//   // Data for bar chart
//   const barChartData = {
//     labels: ["New", "In Process", "Completed"],
//     datasets: [
//       {
//         label: "Complaint Count",
//         backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
//         borderColor: "rgba(0,0,0,1)",
//         borderWidth: 2,
//         data: [newCount, inProcessCount, completedCount]
//       }
//     ]
//   };

//   // Data for pie chart
//   const pieChartData = {
//     labels: ["New", "In Process", "Completed"],
//     datasets: [
//       {
//         data: [newCount, inProcessCount, completedCount],
//         backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
//         hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
//       }
//     ]
//   };

//   return (
//     <div>
//       <h2>Admin Dashboard</h2>
//       <div>
//         <h3>Complaint Count</h3>
//         <p>New: {newCount}</p>
//         <p>In Process: {inProcessCount}</p>
//         <p>Completed: {completedCount}</p>
//       </div>
//       <div style={{ width: "50%", margin: "20px auto" }}>
//         <h3>Complaints Bar Chart</h3>
//         <Bar
//           data={barChartData}
//           options={{
//             scales: {
//               yAxes: [{ ticks: { beginAtZero: true } }]
//             }
//           }}
//         />
//       </div>
//       <div style={{ width: "50%", margin: "20px auto" }}>
//         <h3>Complaints Pie Chart</h3>
//         <Pie data={pieChartData} />
//       </div>
//     </div>
    //   );
    
    
};

export default AdminDashboard;
