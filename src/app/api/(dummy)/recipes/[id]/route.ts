export function GET() {
  const breadRecipe = {
    id: "29e2c380-0ae7-11ec-9a03-0242ac130003",
    title: "Classic Homemade Bread",
    category: {
      id: "4b53a7bc-9c28-4f9b-a7e1-6b75f3d2e2f1",
      title: 'Bread'
    },
    subcategory: {
      id: "b9c9a7f3-8d9c-4d22-9b0a-03f8a29e5abf",
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
