import React from 'react'

const UserMetrics = () => {
  return (
    <div>UserMetrics</div>
  )
}

export default UserMetrics

// import React, { useEffect, useState } from 'react';
// import { getUserMetrics } from '../services/api';

// function UserMetrics() {
//   const [metrics, setMetrics] = useState({
//     totalUsers: 3212,
//     monthlyActiveUsers: 1236,
//     retentionRate: 69
//   });

//   useEffect(() => {
//     getUserMetrics()
//       .then(response => setMetrics(response.data))
//       .catch(error => console.error("Error fetching user metrics", error));
//   }, []);

//   return (
//     <div className="user-metrics">
//       <h2>User Metrics</h2>
//       {metrics ? (
//         <>
//           <p>Total Users: {metrics.totalUsers}</p>
//           <p>Monthly Active Users: {metrics.monthlyActiveUsers}</p>
//           <p>User Retention Rate: {metrics.retentionRate}%</p>
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default UserMetrics;
