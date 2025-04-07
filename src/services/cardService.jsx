export const getCardData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ balance: 12000, spent: 8500, target: 15000 });
    }, 500);
  });
};
