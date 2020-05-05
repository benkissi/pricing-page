const fetchPricingPlan = () => {
  return new Promise((resolve, reject) => {
    setImmeOut(() => {
      resolve([
        {
          id: "1",
          name: "Bronze",
          price: 10,
          features: ["feature 1"],
          recommended: false,
        },
        {
          id: "2",
          name: "Silver",
          price: 20,
          features: ["feature 1", "feature 2"],
          recommended: true,
        },
        {
          id: "1",
          name: "Bronze",
          price: 30,
          features: ["feature 1", "feature 2", "feature 3"],
          recommended: false,
        },
      ]);
    }, 2000);
  });
};
