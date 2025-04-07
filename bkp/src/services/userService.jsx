export const getUserInfo = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ name: 'John Doe', email: 'john@example.com' });
      }, 500);
    });
  };