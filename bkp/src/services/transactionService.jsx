export const getTransactions = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { title: 'Groceries', amount: 2500, date: '2025-04-01' },
        { title: 'Electricity Bill', amount: 1800, date: '2025-04-02' },
        { title: 'Internet', amount: 1200, date: '2025-04-03' }
      ]);
    }, 500);
  });
};
