export const getChartData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { month: 'Jan', value: 4000 },
        { month: 'Feb', value: 6000 },
        { month: 'Mar', value: 3000 },
        { month: 'Apr', value: 5000 }
      ]);
    }, 500);
  });
};