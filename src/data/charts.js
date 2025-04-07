export const weeklyActivityData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Weekly Activity",
        data: [300, 500, 400, 600, 700, 500, 650],
        borderColor: "#6366f1",
        backgroundColor: "rgba(99,102,241,0.2)",
        tension: 0.4,
      },
    ],
  };
  
  export const doughnutData = {
    labels: ["Food", "Transport", "Shopping", "Bills", "Others"],
    datasets: [
      {
        label: "Expenses",
        data: [500, 300, 400, 200, 150],
        backgroundColor: [
          "#6366f1",
          "#10b981",
          "#f59e0b",
          "#ef4444",
          "#8b5cf6",
        ],
      },
    ],
  };
  
  export const balanceHistoryData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Balance History",
        data: [10000, 12000, 15000, 14000, 18000, 20000],
        borderColor: "#10b981",
        backgroundColor: "rgba(16,185,129,0.2)",
        tension: 0.3,
      },
    ],
  };
  