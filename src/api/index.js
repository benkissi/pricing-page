export const fetchPricingPlan = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          name: "Bronze",
          price: 10,
          features: ["1000 identity verification"],
          description: "Good for start-ups",
          recommended: false,
        },
        {
          id: "2",
          name: "Silver",
          price: 20,
          features: ["2000 identity verificaion", "2 factor authentication"],
          recommended: true,
          description: "Great for small businesses",
        },
        {
          id: "3",
          name: "Gold",
          price: 30,
          features: [
            "2000 identity verificaion",
            "2 factor authentication",
            "3d Scan",
          ],
          recommended: false,
          description: "Good for large scale businesses",
        },
      ]);
    }, 2000);
  });
};

export const subscribePlan = (name) => {
  console.log(name, "name");
  return new Promise(() => {
    setTimeout((resolve, reject) => {
      resolve({
        message: "success",
      });
    }, 2000);
  });
};
