interface Recipe {
  id: string;
  title: string;
  category: {
    id: string;
    title: string;
  };
  subcategory: {
    id: string;
    title: string;
  };
  desc: string;
  coverImage: string;
  yield: {
    amount: number;
    title: string;
  }[];
  steps: {
    title: string;
    durationMin: number[];
  }[];
}

const recipes: Recipe[] = [
  {
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
  },
  {
    id: "ef4e9b7a-19bc-4a09-b0d1-6e8e6c0b2d1f",
    title: "Chocolate Chip Cookies",
    category: {
      id: "4b53a7bc-9c28-4f9b-a7e1-6b75f3d2e2f1",
      title: "Baked Goods"
    },
    subcategory: {
      id: "c9a6e9e1-4b7d-496c-a25a-8d0807bfe8fc",
      title: "Cookies"
    },
    desc: "Indulge in the classic delight of homemade chocolate chip cookies. This recipe yields chewy and gooey cookies with a perfect balance of chocolate and buttery goodness. Whether you're baking for a special occasion or simply satisfying your sweet tooth, these cookies are a crowd-pleaser. Enjoy them with a glass of milk or pack them for a tasty snack on the go.",
    coverImage: "/dummy/quick-bread.jpg",
    yield: [
      {
        amount: 24,
        title: "Cookies"
      }
    ],
    steps: [
      {
        title: "Prep",
        durationMin: [15, 20]
      },
      {
        title: "Bake",
        durationMin: [10, 12]
      }
    ]
  },
  {
    id: "a6c5f9b7-8d4e-4b0d-ba22-3e8f6c5b1a9e",
    title: "Margherita Pizza",
    category: {
      id: "23a8e6f5-6c8d-4b7a-9e1a-2d1f0b0c2e3e",
      title: "Pizza"
    },
    subcategory: {
      id: "e9e1c9a6-7d4b-4c6c-b2a5-7bfe0808d0c5",
      title: "Traditional Pizza"
    },
    desc: "Experience the classic flavors of Italy with this Margherita pizza recipe. Made with fresh ingredients like ripe tomatoes, mozzarella cheese, and aromatic basil leaves, this pizza is a true delight. The thin and crispy crust adds the perfect texture to the gooey cheese and vibrant toppings. Whether you're hosting a pizza night or simply craving a slice of authentic Italian pizza, this recipe won't disappoint.",
    coverImage: "/dummy/quick-bread.jpg",
    yield: [
      {
        amount: 1,
        title: "Pizza"
      }
    ],
    steps: [
      {
        title: "Prep",
        durationMin: [20, 25]
      },
      {
        title: "Cook",
        durationMin: [12, 15]
      }
    ]
  },
  {
    id: "e9c4a8f7-5b6d-4e3f-9a2b-1c0d3e4f5a6b",
    title: "Chicken Stir-Fry",
    category: {
      id: "c8d7e6f5-4b3a-2e1d-9c8b-7a6f5e4d3c2b",
      title: "Main Course"
    },
    subcategory: {
      id: "1a2b3c4d-5e6f-7a8b-9c0d-e1f2a3b4c5d",
      title: "Asian Cuisine"
    },
    desc: "Whip up a quick and flavorful chicken stir-fry with this easy recipe. Tender chicken strips are cooked with a medley of colorful vegetables in a savory sauce, resulting in a delicious and healthy meal. Serve it over steamed rice or noodles for a satisfying dinner that the whole family will love. Customize the vegetables and spices according to your preferences for a personalized twist.",
    coverImage: "/dummy/quick-bread.jpg",
    yield: [
      {
        amount: 4,
        title: "Servings"
      }
    ],
    steps: [
      {
        title: "Prep",
        durationMin: [15, 20]
      },
      {
        title: "Cook",
        durationMin: [10, 12]
      }
    ]
  },
  {
    id: "d2e3f4a5-6b7c-8d9e-0f1a-2b3c4d5e6f7",title: "Caprese Salad",
    category: {
      id: "a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5",
      title: "Salads"
    },
    subcategory: {
      id: "p6q7r8s9-t0u1v2w3-x4y5z6a7b8",
      title: "Vegetarian"
    },
    desc: "Enjoy the refreshing flavors of Italy with this classic Caprese salad. It combines ripe tomatoes, fresh mozzarella cheese, and fragrant basil leaves drizzled with a tangy balsamic glaze. This salad is a great choice for a light lunch or a side dish for a larger meal. It's simple to prepare and showcases the beauty of fresh ingredients. Serve it as an appetizer or as a refreshing accompaniment to your favorite Italian dishes.",
    coverImage: "/dummy/quick-bread.jpg",
    yield: [
      {
        amount: 2,
        title: "Servings"
      }
    ],
    steps: [
      {
        title: "Prep",
        durationMin: [10, 15]
      },
      {
        title: "Assembly",
        durationMin: [5]
      }
    ]
  },
  {
    id: "f5e4d3c2-b1a0-9z8y7x6-w5v4u3t2s1",
    title: "Vegetable Curry",
    category: {
      id: "g1h2i3j4-k5l6m7n8o9-p0q1r2s3t4",
      title: "Main Course"
    },
    subcategory: {
      id: "u5v6w7x8-y9z0a1b2c3",
      title: "Vegetarian"
    },
    desc: "Warm up with a comforting bowl of vegetable curry. This recipe combines a variety of colorful vegetables with aromatic spices in a rich and flavorful sauce. Whether you're a vegetarian or simply looking to incorporate more vegetables into your diet, this curry is a delicious and satisfying option. Serve it over steamed rice or with freshly baked naan bread for a complete meal.",
    coverImage: "/dummy/quick-bread.jpg",
    yield: [
      {
        amount: 4,
        title: "Servings"
      }
    ],
    steps: [
      {
        title: "Prep",
        durationMin: [15, 20]
      },
      {
        title: "Cook",
        durationMin: [25, 30]
      }
    ]
  }
];

export default recipes;
