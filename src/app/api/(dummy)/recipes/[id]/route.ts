export function GET() {
  const breadRecipe = {
    title: "Classic Homemade Bread",
    category: {
      title: 'Bread'
    },
    subcategory: {
      title: 'Quick Bread'
    },
    desc: "This classic homemade bread recipe is perfect for any occasion. It yields a soft and fluffy loaf with a golden crust that is sure to impress. Whether you're a seasoned baker or a beginner, this recipe is easy to follow and will result in a delicious loaf of bread that will make your kitchen smell amazing. Enjoy it fresh out of the oven with butter or use it to make sandwiches or toast. It's a versatile bread that everyone will love.",
    coverImage: `/dummy/quick-bread.jpg`,
    yield: [
      {
        amount: 1,
        title: "Loaf"
      },
      {
        amount: 12,
        title: "Rolls"
      }
    ],
    steps: [
      {
        title: "Prep",
        durationMin: [23]
      },
      {
        title: "Bake",
        durationMin: [33, 55]
      }
    ]
  };
  return Response.json(breadRecipe)
}
