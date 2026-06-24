/* The Huntress Cookbook - recipe data */
var HUNTRESS_COOKBOOK = {
    "version":  "1.0",
    "project":  "The Huntress Cookbook",
    "dietaryGuide":  {
                         "glutenSensitive":  true,
                         "ibsConscious":  true,
                         "avoid":  [
                                       "Onions",
                                       "Broccoli",
                                       "Artificial Sweeteners",
                                       "Soy Products",
                                       "Plant-Based Meats",
                                       "Overripe Bananas",
                                       "Wine",
                                       "Very Oily Foods"
                                   ],
                         "limit":  [
                                       "Gluten",
                                       "Soft Drinks",
                                       "Caffeine"
                                   ],
                         "preferredSweeteners":  [
                                                     "Honey",
                                                     "Sugar"
                                                 ]
                     },
    "futureRecipes":  [
                          "Gluten-Free Lasagne",
                          "Gluten-Free Pizza",
                          "Gluten-Free Chicken Pie",
                          "Gluten-Free Brownies",
                          "Gluten-Free Cheesecake",
                          "Gluten-Free Lemon Meringue",
                          "Gluten-Free Chocolate Cake"
                      ],
    "categories":  [
                       {
                           "id":  "breakfast",
                           "name":  "Breakfast",
                           "recipeSlugs":  [
                                               "cheese-herb-omelette",
                                               "mushroom-spinach-omelette",
                                               "bacon-avocado-eggs",
                                               "shakshuka-onion-free",
                                               "overnight-oats",
                                               "berry-smoothie-bowl",
                                               "chia-pudding",
                                               "yogurt-honey-breakfast-bowl",
                                               "creamy-cinnamon-oats",
                                               "sweet-potato-breakfast-hash",
                                               "gluten-free-pancakes",
                                               "french-toast-gf-bread"
                                           ]
                       },
                       {
                           "id":  "lunch",
                           "name":  "Lunch",
                           "recipeSlugs":  [
                                               "chicken-avocado-salad",
                                               "greek-salad-onion-free",
                                               "tuna-stuffed-peppers",
                                               "egg-salad-bowl",
                                               "chicken-rice-bowl",
                                               "butternut-soup",
                                               "tomato-basil-soup",
                                               "carrot-ginger-soup",
                                               "chicken-skewers",
                                               "mini-frittatas",
                                               "savoury-gf-muffins",
                                               "cheese-board-lunch",
                                               "rice-paper-rolls",
                                               "sweet-potato-chicken-bowl",
                                               "beef-meatballs-rice"
                                           ]
                       },
                       {
                           "id":  "dinner",
                           "name":  "Dinner",
                           "recipeSlugs":  [
                                               "garlic-butter-chicken",
                                               "lemon-herb-chicken",
                                               "creamy-mushroom-chicken",
                                               "tuscan-chicken",
                                               "chicken-rice-bake",
                                               "cottage-pie",
                                               "steak-sweet-potato",
                                               "beef-meatballs",
                                               "slow-cooked-beef-stew",
                                               "beef-potjie",
                                               "lemon-garlic-hake",
                                               "garlic-butter-salmon",
                                               "tuna-patties",
                                               "prawn-rice-bowl",
                                               "bobotie-gf",
                                               "butternut-bacon-bake",
                                               "chicken-soup",
                                               "loaded-sweet-potatoes",
                                               "shepherds-pie"
                                           ]
                       },
                       {
                           "id":  "braai",
                           "name":  "Braai",
                           "recipeSlugs":  [
                                               "garlic-butter-chicken-braai",
                                               "lemon-herb-chicken-sosaties",
                                               "steak-over-the-coals",
                                               "lamb-chops",
                                               "huntress-safe-boerewors",
                                               "sweet-potato-wedges",
                                               "braaied-corn",
                                               "greek-salad",
                                               "beetroot-salad",
                                               "potato-salad-onion-free",
                                               "foil-potatoes",
                                               "stuffed-mushrooms",
                                               "braaied-peaches",
                                               "cinnamon-braai-apples"
                                           ]
                       },
                       {
                           "id":  "soups",
                           "name":  "Soups \u0026 Comfort Foods",
                           "recipeSlugs":  [
                                               "creamy-butternut-soup",
                                               "tomato-basil-soup",
                                               "carrot-ginger-soup",
                                               "chicken-vegetable-soup",
                                               "roasted-red-pepper-soup",
                                               "cottage-pie",
                                               "shepherds-pie",
                                               "bobotie-gf",
                                               "beef-stew",
                                               "potjie",
                                               "butternut-bacon-bake",
                                               "loaded-sweet-potatoes",
                                               "chicken-rice-bake",
                                               "simple-chicken-rice",
                                               "soft-scrambled-eggs",
                                               "honey-yogurt-bowl"
                                           ]
                       },
                       {
                           "id":  "desserts",
                           "name":  "Desserts",
                           "recipeSlugs":  [
                                               "malva-pudding-gf",
                                               "peppermint-crisp-tart-gf",
                                               "milk-tart",
                                               "chocolate-mousse",
                                               "chocolate-covered-strawberries",
                                               "hot-chocolate-mug",
                                               "honey-roasted-peaches",
                                               "cinnamon-apples",
                                               "berry-cream-cups",
                                               "strawberry-cheesecake-cups",
                                               "blueberry-cheesecake-cups",
                                               "berry-frozen-yogurt",
                                               "mango-sorbet",
                                               "rice-pudding",
                                               "vanilla-custard"
                                           ]
                       },
                       {
                           "id":  "snacks",
                           "name":  "Snacks \u0026 Picnic Foods",
                           "recipeSlugs":  [
                                               "cheese-rice-crackers",
                                               "boiled-eggs-fruit",
                                               "chicken-snack-box",
                                               "chia-berry-cups",
                                               "yogurt-honey-pot",
                                               "trail-mix-huntress-safe",
                                               "rice-cakes-peanut-butter",
                                               "mini-frittatas",
                                               "picnic-cheese-board",
                                               "chicken-skewers"
                                           ]
                       }
                   ],
    "chapters":  {
                     "breakfast":  [
                                       {
                                           "title":  "Egg Based Breakfasts",
                                           "icon":  "egg",
                                           "desc":  "Protein-rich starts to fuel your morning adventures.",
                                           "names":  [
                                                         "Cheese \u0026 Herb Omelette",
                                                         "Mushroom \u0026 Spinach Omelette",
                                                         "Bacon \u0026 Avocado Eggs",
                                                         "Shakshuka (Onion-Free)"
                                                     ]
                                       },
                                       {
                                           "title":  "Smoothies \u0026 Bowls",
                                           "icon":  "bowl",
                                           "desc":  "Light, refreshing, and easy on the stomach.",
                                           "names":  [
                                                         "Berry Smoothie Bowl",
                                                         "Chia Pudding",
                                                         "Yogurt \u0026 Honey Bowl"
                                                     ]
                                       },
                                       {
                                           "title":  "Warm \u0026 Comforting",
                                           "icon":  "warm",
                                           "desc":  "Cozy mornings that feel like a hug.",
                                           "names":  [
                                                         "Creamy Cinnamon Oats",
                                                         "Sweet Potato Breakfast Hash",
                                                         "Gluten-Free Pancakes",
                                                         "French Toast (GF Bread)"
                                                     ]
                                       },
                                       {
                                           "title":  "Quick \u0026 On-The-Go",
                                           "icon":  "clock",
                                           "desc":  "For mornings when adventure calls early.",
                                           "names":  [
                                                         "Overnight Oats"
                                                     ]
                                       }
                                   ],
                     "lunch":  [
                                   {
                                       "title":  "Salads \u0026 Bowls",
                                       "icon":  "salad",
                                       "desc":  "Fresh midday meals that travel well.",
                                       "names":  [
                                                     "Chicken \u0026 Avocado Salad",
                                                     "Greek Salad (Onion-Free)",
                                                     "Egg Salad Bowl",
                                                     "Chicken \u0026 Rice Bowl",
                                                     "Sweet Potato \u0026 Chicken Bowl"
                                                 ]
                                   },
                                   {
                                       "title":  "Soups",
                                       "icon":  "soup",
                                       "desc":  "Warm bowls for lighter lunch days.",
                                       "names":  [
                                                     "Butternut Soup",
                                                     "Tomato \u0026 Basil Soup",
                                                     "Carrot \u0026 Ginger Soup"
                                                 ]
                                   },
                                   {
                                       "title":  "Bites \u0026 Skewers",
                                       "icon":  "skewer",
                                       "desc":  "Handheld lunches and picnic-friendly plates.",
                                       "names":  [
                                                     "Tuna Stuffed Peppers",
                                                     "Chicken Skewers",
                                                     "Mini Frittatas",
                                                     "Savoury GF Muffins",
                                                     "Cheese Board Lunch",
                                                     "Rice Paper Rolls",
                                                     "Beef Meatballs \u0026 Rice"
                                                 ]
                                   }
                               ],
                     "dinner":  [
                                    {
                                        "title":  "Chicken",
                                        "icon":  "chicken",
                                        "desc":  "Simple proteins with herbs and butter.",
                                        "names":  [
                                                      "Garlic Butter Chicken",
                                                      "Lemon Herb Chicken",
                                                      "Creamy Mushroom Chicken",
                                                      "Tuscan Chicken",
                                                      "Chicken \u0026 Rice Bake"
                                                  ]
                                    },
                                    {
                                        "title":  "Beef \u0026 Lamb",
                                        "icon":  "beef",
                                        "desc":  "Hearty classics for cold evenings.",
                                        "names":  [
                                                      "Cottage Pie",
                                                      "Steak \u0026 Sweet Potato",
                                                      "Beef Meatballs",
                                                      "Slow Cooked Beef Stew",
                                                      "Beef Potjie",
                                                      "Shepherd\u0027s Pie"
                                                  ]
                                    },
                                    {
                                        "title":  "Fish \u0026 Seafood",
                                        "icon":  "fish",
                                        "desc":  "Light suppers from the sea.",
                                        "names":  [
                                                      "Lemon Garlic Hake",
                                                      "Garlic Butter Salmon",
                                                      "Tuna Patties",
                                                      "Prawn \u0026 Rice Bowl"
                                                  ]
                                    },
                                    {
                                        "title":  "South African Favourites",
                                        "icon":  "sa",
                                        "desc":  "Beloved classics, adapted for the Huntress.",
                                        "names":  [
                                                      "Bobotie (GF Version)",
                                                      "Butternut \u0026 Bacon Bake",
                                                      "Chicken Soup",
                                                      "Loaded Sweet Potatoes"
                                                  ]
                                    }
                                ],
                     "braai":  [
                                   {
                                       "title":  "Over The Coals",
                                       "icon":  "fire",
                                       "desc":  "Main braai proteins and stars.",
                                       "names":  [
                                                     "Garlic Butter Chicken Braai",
                                                     "Lemon Herb Chicken Sosaties",
                                                     "Steak Over The Coals",
                                                     "Lamb Chops",
                                                     "Huntress-Safe Boerewors"
                                                 ]
                                   },
                                   {
                                       "title":  "Sides \u0026 Salads",
                                       "icon":  "potato",
                                       "desc":  "Everything that rounds out the plate.",
                                       "names":  [
                                                     "Sweet Potato Wedges",
                                                     "Braaied Corn",
                                                     "Greek Salad",
                                                     "Beetroot Salad",
                                                     "Potato Salad (Onion-Free)",
                                                     "Foil Potatoes",
                                                     "Stuffed Mushrooms"
                                                 ]
                                   },
                                   {
                                       "title":  "Dessert On The Fire",
                                       "icon":  "peach",
                                       "desc":  "Sweet endings from the coals.",
                                       "names":  [
                                                     "Braaied Peaches",
                                                     "Cinnamon Braai Apples"
                                                 ]
                                   }
                               ],
                     "soups":  [
                                   {
                                       "title":  "Soups",
                                       "icon":  "soup",
                                       "desc":  "Gentle, warming bowls.",
                                       "names":  [
                                                     "Creamy Butternut Soup",
                                                     "Tomato \u0026 Basil Soup",
                                                     "Carrot \u0026 Ginger Soup",
                                                     "Chicken \u0026 Vegetable Soup",
                                                     "Roasted Red Pepper Soup"
                                                 ]
                                   },
                                   {
                                       "title":  "Comfort Classics",
                                       "icon":  "home",
                                       "desc":  "Familiar favourites for slow evenings.",
                                       "names":  [
                                                     "Cottage Pie",
                                                     "Shepherd\u0027s Pie",
                                                     "Bobotie",
                                                     "Beef Stew",
                                                     "Potjie",
                                                     "Butternut \u0026 Bacon Bake",
                                                     "Loaded Sweet Potatoes",
                                                     "Chicken \u0026 Rice Bake",
                                                     "Simple Chicken \u0026 Rice",
                                                     "Soft Scrambled Eggs",
                                                     "Honey Yogurt Bowl"
                                                 ]
                                   }
                               ],
                     "desserts":  [
                                      {
                                          "title":  "South African Classics",
                                          "icon":  "sa",
                                          "desc":  "Iconic desserts, lovingly adapted.",
                                          "names":  [
                                                        "Malva Pudding (GF)",
                                                        "Peppermint Crisp Tart (GF)",
                                                        "Milk Tart (GF)"
                                                    ]
                                      },
                                      {
                                          "title":  "Chocolate \u0026 Warm",
                                          "icon":  "chocolate",
                                          "desc":  "Indulgent treats when the mood strikes.",
                                          "names":  [
                                                        "Chocolate Mousse",
                                                        "Chocolate Covered Strawberries",
                                                        "Hot Chocolate Mug",
                                                        "Honey Roasted Peaches",
                                                        "Cinnamon Apples"
                                                    ]
                                      },
                                      {
                                          "title":  "Cups \u0026 Frozen",
                                          "icon":  "ice",
                                          "desc":  "Chilled desserts and creamy cups.",
                                          "names":  [
                                                        "Berry \u0026 Cream Cups",
                                                        "Strawberry Cheesecake Cups",
                                                        "Blueberry Cheesecake Cups",
                                                        "Berry Frozen Yogurt",
                                                        "Mango Sorbet",
                                                        "Rice Pudding",
                                                        "Vanilla Custard"
                                                    ]
                                      }
                                  ],
                     "snacks":  [
                                    {
                                        "title":  "Snack Boxes",
                                        "icon":  "box",
                                        "desc":  "Packed bites for adventures.",
                                        "names":  [
                                                      "Cheese \u0026 Rice Crackers",
                                                      "Boiled Eggs \u0026 Fruit",
                                                      "Chicken Snack Box",
                                                      "Chia Berry Cups",
                                                      "Yogurt \u0026 Honey Pot"
                                                  ]
                                    },
                                    {
                                        "title":  "Picnic Favourites",
                                        "icon":  "picnic",
                                        "desc":  "Easy shares for outdoor days.",
                                        "names":  [
                                                      "Trail Mix (Huntress Safe)",
                                                      "Rice Cakes \u0026 Peanut Butter",
                                                      "Mini Frittatas",
                                                      "Picnic Cheese Board",
                                                      "Chicken Skewers"
                                                  ]
                                    }
                                ]
                 },
    "recipes":  {
                    "cheese-herb-omelette":  {
                                                 "id":  "breakfast-cheese-herb-omelette",
                                                 "slug":  "cheese-herb-omelette",
                                                 "name":  "Cheese \u0026 Herb Omelette",
                                                 "categoryId":  "breakfast",
                                                 "category":  "Breakfast",
                                                 "status":  "untested",
                                                 "description":  "Simple, high-protein breakfast that is gluten-free and onion-free.",
                                                 "difficulty":  "Easy",
                                                 "prepTime":  5,
                                                 "cookTime":  10,
                                                 "servings":  1,
                                                 "tags":  [
                                                              "Gluten Free",
                                                              "Onion Free",
                                                              "High Protein"
                                                          ],
                                                 "ingredients":  [
                                                                     "3 eggs",
                                                                     "30g cheddar cheese",
                                                                     "1 tsp parsley",
                                                                     "1 tsp butter",
                                                                     "Salt and pepper"
                                                                 ],
                                                 "instructions":  [
                                                                      "Beat eggs with seasoning.",
                                                                      "Melt butter in pan.",
                                                                      "Cook eggs until almost set.",
                                                                      "Add cheese and parsley.",
                                                                      "Fold and serve."
                                                                  ],
                                                 "huntressNotes":  "GF. Onion-Free. IBS Friendly",
                                                 "foxNotes":  "Add Fox Notes after the first cook.",
                                                 "image":  "cheese-herb-omelette.jpg"
                                             },
                    "mushroom-spinach-omelette":  {
                                                      "id":  "breakfast-mushroom-spinach-omelette",
                                                      "slug":  "mushroom-spinach-omelette",
                                                      "name":  "Mushroom \u0026 Spinach Omelette",
                                                      "categoryId":  "breakfast",
                                                      "category":  "Breakfast",
                                                      "status":  "untested",
                                                      "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                      "difficulty":  "TBD",
                                                      "prepTime":  0,
                                                      "cookTime":  0,
                                                      "servings":  0,
                                                      "tags":  [
                                                                   "Gluten Free",
                                                                   "Onion Free"
                                                               ],
                                                      "ingredients":  "Ingredients to be confirmed after testing.",
                                                      "instructions":  "Method to be added once this recipe has been tested.",
                                                      "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                      "foxNotes":  "Add Fox Notes after the first cook.",
                                                      "image":  "mushroom-spinach-omelette.jpg"
                                                  },
                    "bacon-avocado-eggs":  {
                                               "id":  "breakfast-bacon-avocado-eggs",
                                               "slug":  "bacon-avocado-eggs",
                                               "name":  "Bacon \u0026 Avocado Eggs",
                                               "categoryId":  "breakfast",
                                               "category":  "Breakfast",
                                               "status":  "untested",
                                               "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                               "difficulty":  "TBD",
                                               "prepTime":  0,
                                               "cookTime":  0,
                                               "servings":  0,
                                               "tags":  [
                                                            "Gluten Free",
                                                            "Onion Free"
                                                        ],
                                               "ingredients":  "Ingredients to be confirmed after testing.",
                                               "instructions":  "Method to be added once this recipe has been tested.",
                                               "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                               "foxNotes":  "Add Fox Notes after the first cook.",
                                               "image":  "bacon-avocado-eggs.jpg"
                                           },
                    "shakshuka-onion-free":  {
                                                 "id":  "breakfast-shakshuka-onion-free",
                                                 "slug":  "shakshuka-onion-free",
                                                 "name":  "Shakshuka (Onion-Free)",
                                                 "categoryId":  "breakfast",
                                                 "category":  "Breakfast",
                                                 "status":  "untested",
                                                 "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                 "difficulty":  "TBD",
                                                 "prepTime":  0,
                                                 "cookTime":  0,
                                                 "servings":  0,
                                                 "tags":  [
                                                              "Gluten Free",
                                                              "Onion Free"
                                                          ],
                                                 "ingredients":  "Ingredients to be confirmed after testing.",
                                                 "instructions":  "Method to be added once this recipe has been tested.",
                                                 "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                 "foxNotes":  "Add Fox Notes after the first cook.",
                                                 "image":  "shakshuka-onion-free.jpg"
                                             },
                    "overnight-oats":  {
                                           "id":  "breakfast-overnight-oats",
                                           "slug":  "overnight-oats",
                                           "name":  "Overnight Oats",
                                           "categoryId":  "breakfast",
                                           "category":  "Breakfast",
                                           "status":  "untested",
                                           "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                           "difficulty":  "TBD",
                                           "prepTime":  0,
                                           "cookTime":  0,
                                           "servings":  0,
                                           "tags":  [
                                                        "Gluten Free",
                                                        "Onion Free"
                                                    ],
                                           "ingredients":  "Ingredients to be confirmed after testing.",
                                           "instructions":  "Method to be added once this recipe has been tested.",
                                           "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                           "foxNotes":  "Add Fox Notes after the first cook.",
                                           "image":  "overnight-oats.jpg"
                                       },
                    "berry-smoothie-bowl":  {
                                                "id":  "breakfast-berry-smoothie-bowl",
                                                "slug":  "berry-smoothie-bowl",
                                                "name":  "Berry Smoothie Bowl",
                                                "categoryId":  "breakfast",
                                                "category":  "Breakfast",
                                                "status":  "untested",
                                                "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                "difficulty":  "TBD",
                                                "prepTime":  0,
                                                "cookTime":  0,
                                                "servings":  0,
                                                "tags":  [
                                                             "Gluten Free",
                                                             "Onion Free"
                                                         ],
                                                "ingredients":  "Ingredients to be confirmed after testing.",
                                                "instructions":  "Method to be added once this recipe has been tested.",
                                                "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                "foxNotes":  "Add Fox Notes after the first cook.",
                                                "image":  "berry-smoothie-bowl.jpg"
                                            },
                    "chia-pudding":  {
                                         "id":  "breakfast-chia-pudding",
                                         "slug":  "chia-pudding",
                                         "name":  "Chia Pudding",
                                         "categoryId":  "breakfast",
                                         "category":  "Breakfast",
                                         "status":  "untested",
                                         "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                         "difficulty":  "TBD",
                                         "prepTime":  0,
                                         "cookTime":  0,
                                         "servings":  0,
                                         "tags":  [
                                                      "Gluten Free",
                                                      "Onion Free"
                                                  ],
                                         "ingredients":  "Ingredients to be confirmed after testing.",
                                         "instructions":  "Method to be added once this recipe has been tested.",
                                         "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                         "foxNotes":  "Add Fox Notes after the first cook.",
                                         "image":  "chia-pudding.jpg"
                                     },
                    "yogurt-honey-breakfast-bowl":  {
                                                        "id":  "breakfast-yogurt-honey-breakfast-bowl",
                                                        "slug":  "yogurt-honey-breakfast-bowl",
                                                        "name":  "Yogurt \u0026 Honey Bowl",
                                                        "categoryId":  "breakfast",
                                                        "category":  "Breakfast",
                                                        "status":  "untested",
                                                        "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                        "difficulty":  "TBD",
                                                        "prepTime":  0,
                                                        "cookTime":  0,
                                                        "servings":  0,
                                                        "tags":  [
                                                                     "Gluten Free",
                                                                     "Onion Free"
                                                                 ],
                                                        "ingredients":  "Ingredients to be confirmed after testing.",
                                                        "instructions":  "Method to be added once this recipe has been tested.",
                                                        "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                        "foxNotes":  "Add Fox Notes after the first cook.",
                                                        "image":  "yogurt-honey-breakfast-bowl.jpg"
                                                    },
                    "creamy-cinnamon-oats":  {
                                                 "id":  "breakfast-creamy-cinnamon-oats",
                                                 "slug":  "creamy-cinnamon-oats",
                                                 "name":  "Creamy Cinnamon Oats",
                                                 "categoryId":  "breakfast",
                                                 "category":  "Breakfast",
                                                 "status":  "untested",
                                                 "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                 "difficulty":  "TBD",
                                                 "prepTime":  0,
                                                 "cookTime":  0,
                                                 "servings":  0,
                                                 "tags":  [
                                                              "Gluten Free",
                                                              "Onion Free"
                                                          ],
                                                 "ingredients":  "Ingredients to be confirmed after testing.",
                                                 "instructions":  "Method to be added once this recipe has been tested.",
                                                 "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                 "foxNotes":  "Add Fox Notes after the first cook.",
                                                 "image":  "creamy-cinnamon-oats.jpg"
                                             },
                    "sweet-potato-breakfast-hash":  {
                                                        "id":  "breakfast-sweet-potato-breakfast-hash",
                                                        "slug":  "sweet-potato-breakfast-hash",
                                                        "name":  "Sweet Potato Breakfast Hash",
                                                        "categoryId":  "breakfast",
                                                        "category":  "Breakfast",
                                                        "status":  "untested",
                                                        "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                        "difficulty":  "TBD",
                                                        "prepTime":  0,
                                                        "cookTime":  0,
                                                        "servings":  0,
                                                        "tags":  [
                                                                     "Gluten Free",
                                                                     "Onion Free"
                                                                 ],
                                                        "ingredients":  "Ingredients to be confirmed after testing.",
                                                        "instructions":  "Method to be added once this recipe has been tested.",
                                                        "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                        "foxNotes":  "Add Fox Notes after the first cook.",
                                                        "image":  "sweet-potato-breakfast-hash.jpg"
                                                    },
                    "gluten-free-pancakes":  {
                                                 "id":  "breakfast-gluten-free-pancakes",
                                                 "slug":  "gluten-free-pancakes",
                                                 "name":  "Gluten-Free Pancakes",
                                                 "categoryId":  "breakfast",
                                                 "category":  "Breakfast",
                                                 "status":  "untested",
                                                 "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                 "difficulty":  "TBD",
                                                 "prepTime":  0,
                                                 "cookTime":  0,
                                                 "servings":  0,
                                                 "tags":  [
                                                              "Gluten Free",
                                                              "Onion Free"
                                                          ],
                                                 "ingredients":  "Ingredients to be confirmed after testing.",
                                                 "instructions":  "Method to be added once this recipe has been tested.",
                                                 "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                 "foxNotes":  "Add Fox Notes after the first cook.",
                                                 "image":  "gluten-free-pancakes.jpg"
                                             },
                    "french-toast-gf-bread":  {
                                                  "id":  "breakfast-french-toast-gf-bread",
                                                  "slug":  "french-toast-gf-bread",
                                                  "name":  "French Toast (GF Bread)",
                                                  "categoryId":  "breakfast",
                                                  "category":  "Breakfast",
                                                  "status":  "untested",
                                                  "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                  "difficulty":  "TBD",
                                                  "prepTime":  0,
                                                  "cookTime":  0,
                                                  "servings":  0,
                                                  "tags":  [
                                                               "Gluten Free",
                                                               "Onion Free"
                                                           ],
                                                  "ingredients":  "Ingredients to be confirmed after testing.",
                                                  "instructions":  "Method to be added once this recipe has been tested.",
                                                  "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                  "foxNotes":  "Add Fox Notes after the first cook.",
                                                  "image":  "french-toast-gf-bread.jpg"
                                              },
                    "chicken-avocado-salad":  {
                                                  "id":  "lunch-chicken-avocado-salad",
                                                  "slug":  "chicken-avocado-salad",
                                                  "name":  "Chicken \u0026 Avocado Salad",
                                                  "categoryId":  "lunch",
                                                  "category":  "Lunch",
                                                  "status":  "untested",
                                                  "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                  "difficulty":  "TBD",
                                                  "prepTime":  0,
                                                  "cookTime":  0,
                                                  "servings":  0,
                                                  "tags":  [
                                                               "Gluten Free",
                                                               "Onion Free"
                                                           ],
                                                  "ingredients":  "Ingredients to be confirmed after testing.",
                                                  "instructions":  "Method to be added once this recipe has been tested.",
                                                  "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                  "foxNotes":  "Add Fox Notes after the first cook.",
                                                  "image":  "chicken-avocado-salad.jpg"
                                              },
                    "greek-salad-onion-free":  {
                                                   "id":  "lunch-greek-salad-onion-free",
                                                   "slug":  "greek-salad-onion-free",
                                                   "name":  "Greek Salad (Onion-Free)",
                                                   "categoryId":  "lunch",
                                                   "category":  "Lunch",
                                                   "status":  "untested",
                                                   "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                   "difficulty":  "TBD",
                                                   "prepTime":  0,
                                                   "cookTime":  0,
                                                   "servings":  0,
                                                   "tags":  [
                                                                "Gluten Free",
                                                                "Onion Free"
                                                            ],
                                                   "ingredients":  "Ingredients to be confirmed after testing.",
                                                   "instructions":  "Method to be added once this recipe has been tested.",
                                                   "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                   "foxNotes":  "Add Fox Notes after the first cook.",
                                                   "image":  "greek-salad-onion-free.jpg"
                                               },
                    "tuna-stuffed-peppers":  {
                                                 "id":  "lunch-tuna-stuffed-peppers",
                                                 "slug":  "tuna-stuffed-peppers",
                                                 "name":  "Tuna Stuffed Peppers",
                                                 "categoryId":  "lunch",
                                                 "category":  "Lunch",
                                                 "status":  "untested",
                                                 "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                 "difficulty":  "TBD",
                                                 "prepTime":  0,
                                                 "cookTime":  0,
                                                 "servings":  0,
                                                 "tags":  [
                                                              "Gluten Free",
                                                              "Onion Free"
                                                          ],
                                                 "ingredients":  "Ingredients to be confirmed after testing.",
                                                 "instructions":  "Method to be added once this recipe has been tested.",
                                                 "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                 "foxNotes":  "Add Fox Notes after the first cook.",
                                                 "image":  "tuna-stuffed-peppers.jpg"
                                             },
                    "egg-salad-bowl":  {
                                           "id":  "lunch-egg-salad-bowl",
                                           "slug":  "egg-salad-bowl",
                                           "name":  "Egg Salad Bowl",
                                           "categoryId":  "lunch",
                                           "category":  "Lunch",
                                           "status":  "untested",
                                           "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                           "difficulty":  "TBD",
                                           "prepTime":  0,
                                           "cookTime":  0,
                                           "servings":  0,
                                           "tags":  [
                                                        "Gluten Free",
                                                        "Onion Free"
                                                    ],
                                           "ingredients":  "Ingredients to be confirmed after testing.",
                                           "instructions":  "Method to be added once this recipe has been tested.",
                                           "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                           "foxNotes":  "Add Fox Notes after the first cook.",
                                           "image":  "egg-salad-bowl.jpg"
                                       },
                    "chicken-rice-bowl":  {
                                              "id":  "lunch-chicken-rice-bowl",
                                              "slug":  "chicken-rice-bowl",
                                              "name":  "Chicken \u0026 Rice Bowl",
                                              "categoryId":  "lunch",
                                              "category":  "Lunch",
                                              "status":  "untested",
                                              "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                              "difficulty":  "TBD",
                                              "prepTime":  0,
                                              "cookTime":  0,
                                              "servings":  0,
                                              "tags":  [
                                                           "Gluten Free",
                                                           "Onion Free"
                                                       ],
                                              "ingredients":  "Ingredients to be confirmed after testing.",
                                              "instructions":  "Method to be added once this recipe has been tested.",
                                              "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                              "foxNotes":  "Add Fox Notes after the first cook.",
                                              "image":  "chicken-rice-bowl.jpg"
                                          },
                    "butternut-soup":  {
                                           "id":  "lunch-butternut-soup",
                                           "slug":  "butternut-soup",
                                           "name":  "Butternut Soup",
                                           "categoryId":  "lunch",
                                           "category":  "Lunch",
                                           "status":  "untested",
                                           "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                           "difficulty":  "TBD",
                                           "prepTime":  0,
                                           "cookTime":  0,
                                           "servings":  0,
                                           "tags":  [
                                                        "Gluten Free",
                                                        "Onion Free"
                                                    ],
                                           "ingredients":  "Ingredients to be confirmed after testing.",
                                           "instructions":  "Method to be added once this recipe has been tested.",
                                           "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                           "foxNotes":  "Add Fox Notes after the first cook.",
                                           "image":  "butternut-soup.jpg"
                                       },
                    "tomato-basil-soup":  {
                                              "id":  "soups-tomato-basil-soup",
                                              "slug":  "tomato-basil-soup",
                                              "name":  "Tomato \u0026 Basil Soup",
                                              "categoryId":  "lunch",
                                              "category":  "Lunch",
                                              "status":  "untested",
                                              "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                              "difficulty":  "TBD",
                                              "prepTime":  0,
                                              "cookTime":  0,
                                              "servings":  0,
                                              "tags":  [
                                                           "Gluten Free",
                                                           "Onion Free"
                                                       ],
                                              "ingredients":  "Ingredients to be confirmed after testing.",
                                              "instructions":  "Method to be added once this recipe has been tested.",
                                              "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                              "foxNotes":  "Add Fox Notes after the first cook.",
                                              "image":  "tomato-basil-soup.jpg"
                                          },
                    "carrot-ginger-soup":  {
                                               "id":  "soups-carrot-ginger-soup",
                                               "slug":  "carrot-ginger-soup",
                                               "name":  "Carrot \u0026 Ginger Soup",
                                               "categoryId":  "lunch",
                                               "category":  "Lunch",
                                               "status":  "untested",
                                               "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                               "difficulty":  "TBD",
                                               "prepTime":  0,
                                               "cookTime":  0,
                                               "servings":  0,
                                               "tags":  [
                                                            "Gluten Free",
                                                            "Onion Free"
                                                        ],
                                               "ingredients":  "Ingredients to be confirmed after testing.",
                                               "instructions":  "Method to be added once this recipe has been tested.",
                                               "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                               "foxNotes":  "Add Fox Notes after the first cook.",
                                               "image":  "carrot-ginger-soup.jpg"
                                           },
                    "chicken-skewers":  {
                                            "id":  "snacks-chicken-skewers",
                                            "slug":  "chicken-skewers",
                                            "name":  "Chicken Skewers",
                                            "categoryId":  "lunch",
                                            "category":  "Lunch",
                                            "status":  "untested",
                                            "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                            "difficulty":  "TBD",
                                            "prepTime":  0,
                                            "cookTime":  0,
                                            "servings":  0,
                                            "tags":  [
                                                         "Gluten Free",
                                                         "Onion Free"
                                                     ],
                                            "ingredients":  "Ingredients to be confirmed after testing.",
                                            "instructions":  "Method to be added once this recipe has been tested.",
                                            "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                            "foxNotes":  "Add Fox Notes after the first cook.",
                                            "image":  "chicken-skewers.jpg"
                                        },
                    "mini-frittatas":  {
                                           "id":  "snacks-mini-frittatas",
                                           "slug":  "mini-frittatas",
                                           "name":  "Mini Frittatas",
                                           "categoryId":  "lunch",
                                           "category":  "Lunch",
                                           "status":  "untested",
                                           "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                           "difficulty":  "TBD",
                                           "prepTime":  0,
                                           "cookTime":  0,
                                           "servings":  0,
                                           "tags":  [
                                                        "Gluten Free",
                                                        "Onion Free"
                                                    ],
                                           "ingredients":  "Ingredients to be confirmed after testing.",
                                           "instructions":  "Method to be added once this recipe has been tested.",
                                           "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                           "foxNotes":  "Add Fox Notes after the first cook.",
                                           "image":  "mini-frittatas.jpg"
                                       },
                    "savoury-gf-muffins":  {
                                               "id":  "lunch-savoury-gf-muffins",
                                               "slug":  "savoury-gf-muffins",
                                               "name":  "Savoury GF Muffins",
                                               "categoryId":  "lunch",
                                               "category":  "Lunch",
                                               "status":  "untested",
                                               "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                               "difficulty":  "TBD",
                                               "prepTime":  0,
                                               "cookTime":  0,
                                               "servings":  0,
                                               "tags":  [
                                                            "Gluten Free",
                                                            "Onion Free"
                                                        ],
                                               "ingredients":  "Ingredients to be confirmed after testing.",
                                               "instructions":  "Method to be added once this recipe has been tested.",
                                               "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                               "foxNotes":  "Add Fox Notes after the first cook.",
                                               "image":  "savoury-gf-muffins.jpg"
                                           },
                    "cheese-board-lunch":  {
                                               "id":  "lunch-cheese-board-lunch",
                                               "slug":  "cheese-board-lunch",
                                               "name":  "Cheese Board Lunch",
                                               "categoryId":  "lunch",
                                               "category":  "Lunch",
                                               "status":  "untested",
                                               "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                               "difficulty":  "TBD",
                                               "prepTime":  0,
                                               "cookTime":  0,
                                               "servings":  0,
                                               "tags":  [
                                                            "Gluten Free",
                                                            "Onion Free"
                                                        ],
                                               "ingredients":  "Ingredients to be confirmed after testing.",
                                               "instructions":  "Method to be added once this recipe has been tested.",
                                               "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                               "foxNotes":  "Add Fox Notes after the first cook.",
                                               "image":  "cheese-board-lunch.jpg"
                                           },
                    "rice-paper-rolls":  {
                                             "id":  "lunch-rice-paper-rolls",
                                             "slug":  "rice-paper-rolls",
                                             "name":  "Rice Paper Rolls",
                                             "categoryId":  "lunch",
                                             "category":  "Lunch",
                                             "status":  "untested",
                                             "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                             "difficulty":  "TBD",
                                             "prepTime":  0,
                                             "cookTime":  0,
                                             "servings":  0,
                                             "tags":  [
                                                          "Gluten Free",
                                                          "Onion Free"
                                                      ],
                                             "ingredients":  "Ingredients to be confirmed after testing.",
                                             "instructions":  "Method to be added once this recipe has been tested.",
                                             "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                             "foxNotes":  "Add Fox Notes after the first cook.",
                                             "image":  "rice-paper-rolls.jpg"
                                         },
                    "sweet-potato-chicken-bowl":  {
                                                      "id":  "lunch-sweet-potato-chicken-bowl",
                                                      "slug":  "sweet-potato-chicken-bowl",
                                                      "name":  "Sweet Potato \u0026 Chicken Bowl",
                                                      "categoryId":  "lunch",
                                                      "category":  "Lunch",
                                                      "status":  "untested",
                                                      "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                      "difficulty":  "TBD",
                                                      "prepTime":  0,
                                                      "cookTime":  0,
                                                      "servings":  0,
                                                      "tags":  [
                                                                   "Gluten Free",
                                                                   "Onion Free"
                                                               ],
                                                      "ingredients":  "Ingredients to be confirmed after testing.",
                                                      "instructions":  "Method to be added once this recipe has been tested.",
                                                      "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                      "foxNotes":  "Add Fox Notes after the first cook.",
                                                      "image":  "sweet-potato-chicken-bowl.jpg"
                                                  },
                    "beef-meatballs-rice":  {
                                                "id":  "lunch-beef-meatballs-rice",
                                                "slug":  "beef-meatballs-rice",
                                                "name":  "Beef Meatballs \u0026 Rice",
                                                "categoryId":  "lunch",
                                                "category":  "Lunch",
                                                "status":  "untested",
                                                "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                "difficulty":  "TBD",
                                                "prepTime":  0,
                                                "cookTime":  0,
                                                "servings":  0,
                                                "tags":  [
                                                             "Gluten Free",
                                                             "Onion Free"
                                                         ],
                                                "ingredients":  "Ingredients to be confirmed after testing.",
                                                "instructions":  "Method to be added once this recipe has been tested.",
                                                "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                "foxNotes":  "Add Fox Notes after the first cook.",
                                                "image":  "beef-meatballs-rice.jpg"
                                            },
                    "garlic-butter-chicken":  {
                                                  "id":  "dinner-garlic-butter-chicken",
                                                  "slug":  "garlic-butter-chicken",
                                                  "name":  "Garlic Butter Chicken",
                                                  "categoryId":  "dinner",
                                                  "category":  "Dinner",
                                                  "status":  "untested",
                                                  "description":  "Juicy chicken cooked in garlic butter and herbs.",
                                                  "difficulty":  "Easy",
                                                  "prepTime":  15,
                                                  "cookTime":  25,
                                                  "servings":  4,
                                                  "tags":  [
                                                               "Gluten Free",
                                                               "Onion Free",
                                                               "Dinner"
                                                           ],
                                                  "ingredients":  [
                                                                      "4 chicken breasts",
                                                                      "3 tbsp butter",
                                                                      "4 garlic cloves",
                                                                      "Rosemary",
                                                                      "Salt",
                                                                      "Pepper"
                                                                  ],
                                                  "instructions":  [
                                                                       "Season chicken.",
                                                                       "Sear chicken in butter.",
                                                                       "Add garlic and herbs.",
                                                                       "Cook until done.",
                                                                       "Serve with potatoes or vegetables."
                                                                   ],
                                                  "huntressNotes":  "GF. Onion-Free",
                                                  "foxNotes":  "Add Fox Notes after the first cook.",
                                                  "image":  "garlic-butter-chicken.jpg"
                                              },
                    "lemon-herb-chicken":  {
                                               "id":  "dinner-lemon-herb-chicken",
                                               "slug":  "lemon-herb-chicken",
                                               "name":  "Lemon Herb Chicken",
                                               "categoryId":  "dinner",
                                               "category":  "Dinner",
                                               "status":  "untested",
                                               "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                               "difficulty":  "TBD",
                                               "prepTime":  0,
                                               "cookTime":  0,
                                               "servings":  0,
                                               "tags":  [
                                                            "Gluten Free",
                                                            "Onion Free"
                                                        ],
                                               "ingredients":  "Ingredients to be confirmed after testing.",
                                               "instructions":  "Method to be added once this recipe has been tested.",
                                               "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                               "foxNotes":  "Add Fox Notes after the first cook.",
                                               "image":  "lemon-herb-chicken.jpg"
                                           },
                    "creamy-mushroom-chicken":  {
                                                    "id":  "dinner-creamy-mushroom-chicken",
                                                    "slug":  "creamy-mushroom-chicken",
                                                    "name":  "Creamy Mushroom Chicken",
                                                    "categoryId":  "dinner",
                                                    "category":  "Dinner",
                                                    "status":  "untested",
                                                    "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                    "difficulty":  "TBD",
                                                    "prepTime":  0,
                                                    "cookTime":  0,
                                                    "servings":  0,
                                                    "tags":  [
                                                                 "Gluten Free",
                                                                 "Onion Free"
                                                             ],
                                                    "ingredients":  "Ingredients to be confirmed after testing.",
                                                    "instructions":  "Method to be added once this recipe has been tested.",
                                                    "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                    "foxNotes":  "Add Fox Notes after the first cook.",
                                                    "image":  "creamy-mushroom-chicken.jpg"
                                                },
                    "tuscan-chicken":  {
                                           "id":  "dinner-tuscan-chicken",
                                           "slug":  "tuscan-chicken",
                                           "name":  "Tuscan Chicken",
                                           "categoryId":  "dinner",
                                           "category":  "Dinner",
                                           "status":  "untested",
                                           "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                           "difficulty":  "TBD",
                                           "prepTime":  0,
                                           "cookTime":  0,
                                           "servings":  0,
                                           "tags":  [
                                                        "Gluten Free",
                                                        "Onion Free"
                                                    ],
                                           "ingredients":  "Ingredients to be confirmed after testing.",
                                           "instructions":  "Method to be added once this recipe has been tested.",
                                           "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                           "foxNotes":  "Add Fox Notes after the first cook.",
                                           "image":  "tuscan-chicken.jpg"
                                       },
                    "chicken-rice-bake":  {
                                              "id":  "soups-chicken-rice-bake",
                                              "slug":  "chicken-rice-bake",
                                              "name":  "Chicken \u0026 Rice Bake",
                                              "categoryId":  "dinner",
                                              "category":  "Dinner",
                                              "status":  "untested",
                                              "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                              "difficulty":  "TBD",
                                              "prepTime":  0,
                                              "cookTime":  0,
                                              "servings":  0,
                                              "tags":  [
                                                           "Gluten Free",
                                                           "Onion Free"
                                                       ],
                                              "ingredients":  "Ingredients to be confirmed after testing.",
                                              "instructions":  "Method to be added once this recipe has been tested.",
                                              "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                              "foxNotes":  "Add Fox Notes after the first cook.",
                                              "image":  "chicken-rice-bake.jpg"
                                          },
                    "cottage-pie":  {
                                        "id":  "soups-cottage-pie",
                                        "slug":  "cottage-pie",
                                        "name":  "Cottage Pie",
                                        "categoryId":  "dinner",
                                        "category":  "Dinner",
                                        "status":  "untested",
                                        "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                        "difficulty":  "TBD",
                                        "prepTime":  0,
                                        "cookTime":  0,
                                        "servings":  0,
                                        "tags":  [
                                                     "Gluten Free",
                                                     "Onion Free"
                                                 ],
                                        "ingredients":  "Ingredients to be confirmed after testing.",
                                        "instructions":  "Method to be added once this recipe has been tested.",
                                        "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                        "foxNotes":  "Add Fox Notes after the first cook.",
                                        "image":  "cottage-pie.jpg"
                                    },
                    "steak-sweet-potato":  {
                                               "id":  "dinner-steak-sweet-potato",
                                               "slug":  "steak-sweet-potato",
                                               "name":  "Steak \u0026 Sweet Potato",
                                               "categoryId":  "dinner",
                                               "category":  "Dinner",
                                               "status":  "untested",
                                               "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                               "difficulty":  "TBD",
                                               "prepTime":  0,
                                               "cookTime":  0,
                                               "servings":  0,
                                               "tags":  [
                                                            "Gluten Free",
                                                            "Onion Free"
                                                        ],
                                               "ingredients":  "Ingredients to be confirmed after testing.",
                                               "instructions":  "Method to be added once this recipe has been tested.",
                                               "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                               "foxNotes":  "Add Fox Notes after the first cook.",
                                               "image":  "steak-sweet-potato.jpg"
                                           },
                    "beef-meatballs":  {
                                           "id":  "dinner-beef-meatballs",
                                           "slug":  "beef-meatballs",
                                           "name":  "Beef Meatballs",
                                           "categoryId":  "dinner",
                                           "category":  "Dinner",
                                           "status":  "untested",
                                           "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                           "difficulty":  "TBD",
                                           "prepTime":  0,
                                           "cookTime":  0,
                                           "servings":  0,
                                           "tags":  [
                                                        "Gluten Free",
                                                        "Onion Free"
                                                    ],
                                           "ingredients":  "Ingredients to be confirmed after testing.",
                                           "instructions":  "Method to be added once this recipe has been tested.",
                                           "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                           "foxNotes":  "Add Fox Notes after the first cook.",
                                           "image":  "beef-meatballs.jpg"
                                       },
                    "slow-cooked-beef-stew":  {
                                                  "id":  "dinner-slow-cooked-beef-stew",
                                                  "slug":  "slow-cooked-beef-stew",
                                                  "name":  "Slow Cooked Beef Stew",
                                                  "categoryId":  "dinner",
                                                  "category":  "Dinner",
                                                  "status":  "untested",
                                                  "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                  "difficulty":  "TBD",
                                                  "prepTime":  0,
                                                  "cookTime":  0,
                                                  "servings":  0,
                                                  "tags":  [
                                                               "Gluten Free",
                                                               "Onion Free"
                                                           ],
                                                  "ingredients":  "Ingredients to be confirmed after testing.",
                                                  "instructions":  "Method to be added once this recipe has been tested.",
                                                  "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                  "foxNotes":  "Add Fox Notes after the first cook.",
                                                  "image":  "slow-cooked-beef-stew.jpg"
                                              },
                    "beef-potjie":  {
                                        "id":  "dinner-beef-potjie",
                                        "slug":  "beef-potjie",
                                        "name":  "Beef Potjie",
                                        "categoryId":  "dinner",
                                        "category":  "Dinner",
                                        "status":  "untested",
                                        "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                        "difficulty":  "TBD",
                                        "prepTime":  0,
                                        "cookTime":  0,
                                        "servings":  0,
                                        "tags":  [
                                                     "Gluten Free",
                                                     "Onion Free"
                                                 ],
                                        "ingredients":  "Ingredients to be confirmed after testing.",
                                        "instructions":  "Method to be added once this recipe has been tested.",
                                        "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                        "foxNotes":  "Add Fox Notes after the first cook.",
                                        "image":  "beef-potjie.jpg"
                                    },
                    "lemon-garlic-hake":  {
                                              "id":  "dinner-lemon-garlic-hake",
                                              "slug":  "lemon-garlic-hake",
                                              "name":  "Lemon Garlic Hake",
                                              "categoryId":  "dinner",
                                              "category":  "Dinner",
                                              "status":  "untested",
                                              "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                              "difficulty":  "TBD",
                                              "prepTime":  0,
                                              "cookTime":  0,
                                              "servings":  0,
                                              "tags":  [
                                                           "Gluten Free",
                                                           "Onion Free"
                                                       ],
                                              "ingredients":  "Ingredients to be confirmed after testing.",
                                              "instructions":  "Method to be added once this recipe has been tested.",
                                              "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                              "foxNotes":  "Add Fox Notes after the first cook.",
                                              "image":  "lemon-garlic-hake.jpg"
                                          },
                    "garlic-butter-salmon":  {
                                                 "id":  "dinner-garlic-butter-salmon",
                                                 "slug":  "garlic-butter-salmon",
                                                 "name":  "Garlic Butter Salmon",
                                                 "categoryId":  "dinner",
                                                 "category":  "Dinner",
                                                 "status":  "untested",
                                                 "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                 "difficulty":  "TBD",
                                                 "prepTime":  0,
                                                 "cookTime":  0,
                                                 "servings":  0,
                                                 "tags":  [
                                                              "Gluten Free",
                                                              "Onion Free"
                                                          ],
                                                 "ingredients":  "Ingredients to be confirmed after testing.",
                                                 "instructions":  "Method to be added once this recipe has been tested.",
                                                 "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                 "foxNotes":  "Add Fox Notes after the first cook.",
                                                 "image":  "garlic-butter-salmon.jpg"
                                             },
                    "tuna-patties":  {
                                         "id":  "dinner-tuna-patties",
                                         "slug":  "tuna-patties",
                                         "name":  "Tuna Patties",
                                         "categoryId":  "dinner",
                                         "category":  "Dinner",
                                         "status":  "untested",
                                         "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                         "difficulty":  "TBD",
                                         "prepTime":  0,
                                         "cookTime":  0,
                                         "servings":  0,
                                         "tags":  [
                                                      "Gluten Free",
                                                      "Onion Free"
                                                  ],
                                         "ingredients":  "Ingredients to be confirmed after testing.",
                                         "instructions":  "Method to be added once this recipe has been tested.",
                                         "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                         "foxNotes":  "Add Fox Notes after the first cook.",
                                         "image":  "tuna-patties.jpg"
                                     },
                    "prawn-rice-bowl":  {
                                            "id":  "dinner-prawn-rice-bowl",
                                            "slug":  "prawn-rice-bowl",
                                            "name":  "Prawn \u0026 Rice Bowl",
                                            "categoryId":  "dinner",
                                            "category":  "Dinner",
                                            "status":  "untested",
                                            "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                            "difficulty":  "TBD",
                                            "prepTime":  0,
                                            "cookTime":  0,
                                            "servings":  0,
                                            "tags":  [
                                                         "Gluten Free",
                                                         "Onion Free"
                                                     ],
                                            "ingredients":  "Ingredients to be confirmed after testing.",
                                            "instructions":  "Method to be added once this recipe has been tested.",
                                            "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                            "foxNotes":  "Add Fox Notes after the first cook.",
                                            "image":  "prawn-rice-bowl.jpg"
                                        },
                    "bobotie-gf":  {
                                       "id":  "soups-bobotie-gf",
                                       "slug":  "bobotie-gf",
                                       "name":  "Bobotie (GF Version)",
                                       "categoryId":  "dinner",
                                       "category":  "Dinner",
                                       "status":  "untested",
                                       "description":  "Traditional South African bobotie adapted to be gluten-free and onion-free.",
                                       "difficulty":  "Medium",
                                       "prepTime":  20,
                                       "cookTime":  45,
                                       "servings":  6,
                                       "tags":  [
                                                    "South African",
                                                    "Gluten Free",
                                                    "Comfort Food"
                                                ],
                                       "ingredients":  [
                                                           "500g beef mince",
                                                           "2 slices GF bread",
                                                           "1 egg",
                                                           "Milk",
                                                           "Curry powder",
                                                           "Turmeric"
                                                       ],
                                       "instructions":  [
                                                            "Prepare mince mixture.",
                                                            "Add soaked GF bread.",
                                                            "Transfer to baking dish.",
                                                            "Top with egg custard.",
                                                            "Bake until golden."
                                                        ],
                                       "huntressNotes":  "GF. Traditional Favourite",
                                       "foxNotes":  "Add Fox Notes after the first cook.",
                                       "image":  "bobotie-gf.jpg"
                                   },
                    "butternut-bacon-bake":  {
                                                 "id":  "soups-butternut-bacon-bake",
                                                 "slug":  "butternut-bacon-bake",
                                                 "name":  "Butternut \u0026 Bacon Bake",
                                                 "categoryId":  "dinner",
                                                 "category":  "Dinner",
                                                 "status":  "untested",
                                                 "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                 "difficulty":  "TBD",
                                                 "prepTime":  0,
                                                 "cookTime":  0,
                                                 "servings":  0,
                                                 "tags":  [
                                                              "Gluten Free",
                                                              "Onion Free"
                                                          ],
                                                 "ingredients":  "Ingredients to be confirmed after testing.",
                                                 "instructions":  "Method to be added once this recipe has been tested.",
                                                 "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                 "foxNotes":  "Add Fox Notes after the first cook.",
                                                 "image":  "butternut-bacon-bake.jpg"
                                             },
                    "chicken-soup":  {
                                         "id":  "dinner-chicken-soup",
                                         "slug":  "chicken-soup",
                                         "name":  "Chicken Soup",
                                         "categoryId":  "dinner",
                                         "category":  "Dinner",
                                         "status":  "untested",
                                         "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                         "difficulty":  "TBD",
                                         "prepTime":  0,
                                         "cookTime":  0,
                                         "servings":  0,
                                         "tags":  [
                                                      "Gluten Free",
                                                      "Onion Free"
                                                  ],
                                         "ingredients":  "Ingredients to be confirmed after testing.",
                                         "instructions":  "Method to be added once this recipe has been tested.",
                                         "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                         "foxNotes":  "Add Fox Notes after the first cook.",
                                         "image":  "chicken-soup.jpg"
                                     },
                    "loaded-sweet-potatoes":  {
                                                  "id":  "soups-loaded-sweet-potatoes",
                                                  "slug":  "loaded-sweet-potatoes",
                                                  "name":  "Loaded Sweet Potatoes",
                                                  "categoryId":  "dinner",
                                                  "category":  "Dinner",
                                                  "status":  "untested",
                                                  "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                  "difficulty":  "TBD",
                                                  "prepTime":  0,
                                                  "cookTime":  0,
                                                  "servings":  0,
                                                  "tags":  [
                                                               "Gluten Free",
                                                               "Onion Free"
                                                           ],
                                                  "ingredients":  "Ingredients to be confirmed after testing.",
                                                  "instructions":  "Method to be added once this recipe has been tested.",
                                                  "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                  "foxNotes":  "Add Fox Notes after the first cook.",
                                                  "image":  "loaded-sweet-potatoes.jpg"
                                              },
                    "shepherds-pie":  {
                                          "id":  "soups-shepherds-pie",
                                          "slug":  "shepherds-pie",
                                          "name":  "Shepherd\u0027s Pie",
                                          "categoryId":  "dinner",
                                          "category":  "Dinner",
                                          "status":  "untested",
                                          "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                          "difficulty":  "TBD",
                                          "prepTime":  0,
                                          "cookTime":  0,
                                          "servings":  0,
                                          "tags":  [
                                                       "Gluten Free",
                                                       "Onion Free"
                                                   ],
                                          "ingredients":  "Ingredients to be confirmed after testing.",
                                          "instructions":  "Method to be added once this recipe has been tested.",
                                          "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                          "foxNotes":  "Add Fox Notes after the first cook.",
                                          "image":  "shepherds-pie.jpg"
                                      },
                    "garlic-butter-chicken-braai":  {
                                                        "id":  "braai-garlic-butter-chicken-braai",
                                                        "slug":  "garlic-butter-chicken-braai",
                                                        "name":  "Garlic Butter Chicken Braai",
                                                        "categoryId":  "braai",
                                                        "category":  "Braai",
                                                        "status":  "untested",
                                                        "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                        "difficulty":  "TBD",
                                                        "prepTime":  0,
                                                        "cookTime":  0,
                                                        "servings":  0,
                                                        "tags":  [
                                                                     "Gluten Free",
                                                                     "Onion Free"
                                                                 ],
                                                        "ingredients":  "Ingredients to be confirmed after testing.",
                                                        "instructions":  "Method to be added once this recipe has been tested.",
                                                        "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                        "foxNotes":  "Add Fox Notes after the first cook.",
                                                        "image":  "garlic-butter-chicken-braai.jpg"
                                                    },
                    "lemon-herb-chicken-sosaties":  {
                                                        "id":  "braai-lemon-herb-chicken-sosaties",
                                                        "slug":  "lemon-herb-chicken-sosaties",
                                                        "name":  "Lemon Herb Chicken Sosaties",
                                                        "categoryId":  "braai",
                                                        "category":  "Braai",
                                                        "status":  "untested",
                                                        "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                        "difficulty":  "TBD",
                                                        "prepTime":  0,
                                                        "cookTime":  0,
                                                        "servings":  0,
                                                        "tags":  [
                                                                     "Gluten Free",
                                                                     "Onion Free"
                                                                 ],
                                                        "ingredients":  "Ingredients to be confirmed after testing.",
                                                        "instructions":  "Method to be added once this recipe has been tested.",
                                                        "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                        "foxNotes":  "Add Fox Notes after the first cook.",
                                                        "image":  "lemon-herb-chicken-sosaties.jpg"
                                                    },
                    "steak-over-the-coals":  {
                                                 "id":  "braai-steak-over-the-coals",
                                                 "slug":  "steak-over-the-coals",
                                                 "name":  "Steak Over The Coals",
                                                 "categoryId":  "braai",
                                                 "category":  "Braai",
                                                 "status":  "untested",
                                                 "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                 "difficulty":  "TBD",
                                                 "prepTime":  0,
                                                 "cookTime":  0,
                                                 "servings":  0,
                                                 "tags":  [
                                                              "Gluten Free",
                                                              "Onion Free"
                                                          ],
                                                 "ingredients":  "Ingredients to be confirmed after testing.",
                                                 "instructions":  "Method to be added once this recipe has been tested.",
                                                 "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                 "foxNotes":  "Add Fox Notes after the first cook.",
                                                 "image":  "steak-over-the-coals.jpg"
                                             },
                    "lamb-chops":  {
                                       "id":  "braai-lamb-chops",
                                       "slug":  "lamb-chops",
                                       "name":  "Lamb Chops",
                                       "categoryId":  "braai",
                                       "category":  "Braai",
                                       "status":  "untested",
                                       "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                       "difficulty":  "TBD",
                                       "prepTime":  0,
                                       "cookTime":  0,
                                       "servings":  0,
                                       "tags":  [
                                                    "Gluten Free",
                                                    "Onion Free"
                                                ],
                                       "ingredients":  "Ingredients to be confirmed after testing.",
                                       "instructions":  "Method to be added once this recipe has been tested.",
                                       "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                       "foxNotes":  "Add Fox Notes after the first cook.",
                                       "image":  "lamb-chops.jpg"
                                   },
                    "huntress-safe-boerewors":  {
                                                    "id":  "braai-huntress-safe-boerewors",
                                                    "slug":  "huntress-safe-boerewors",
                                                    "name":  "Huntress-Safe Boerewors",
                                                    "categoryId":  "braai",
                                                    "category":  "Braai",
                                                    "status":  "untested",
                                                    "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                    "difficulty":  "TBD",
                                                    "prepTime":  0,
                                                    "cookTime":  0,
                                                    "servings":  0,
                                                    "tags":  [
                                                                 "Gluten Free",
                                                                 "Onion Free"
                                                             ],
                                                    "ingredients":  "Ingredients to be confirmed after testing.",
                                                    "instructions":  "Method to be added once this recipe has been tested.",
                                                    "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                    "foxNotes":  "Add Fox Notes after the first cook.",
                                                    "image":  "huntress-safe-boerewors.jpg"
                                                },
                    "sweet-potato-wedges":  {
                                                "id":  "braai-sweet-potato-wedges",
                                                "slug":  "sweet-potato-wedges",
                                                "name":  "Sweet Potato Wedges",
                                                "categoryId":  "braai",
                                                "category":  "Braai",
                                                "status":  "untested",
                                                "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                "difficulty":  "TBD",
                                                "prepTime":  0,
                                                "cookTime":  0,
                                                "servings":  0,
                                                "tags":  [
                                                             "Gluten Free",
                                                             "Onion Free"
                                                         ],
                                                "ingredients":  "Ingredients to be confirmed after testing.",
                                                "instructions":  "Method to be added once this recipe has been tested.",
                                                "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                "foxNotes":  "Add Fox Notes after the first cook.",
                                                "image":  "sweet-potato-wedges.jpg"
                                            },
                    "braaied-corn":  {
                                         "id":  "braai-braaied-corn",
                                         "slug":  "braaied-corn",
                                         "name":  "Braaied Corn",
                                         "categoryId":  "braai",
                                         "category":  "Braai",
                                         "status":  "untested",
                                         "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                         "difficulty":  "TBD",
                                         "prepTime":  0,
                                         "cookTime":  0,
                                         "servings":  0,
                                         "tags":  [
                                                      "Gluten Free",
                                                      "Onion Free"
                                                  ],
                                         "ingredients":  "Ingredients to be confirmed after testing.",
                                         "instructions":  "Method to be added once this recipe has been tested.",
                                         "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                         "foxNotes":  "Add Fox Notes after the first cook.",
                                         "image":  "braaied-corn.jpg"
                                     },
                    "greek-salad":  {
                                        "id":  "braai-greek-salad",
                                        "slug":  "greek-salad",
                                        "name":  "Greek Salad",
                                        "categoryId":  "braai",
                                        "category":  "Braai",
                                        "status":  "untested",
                                        "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                        "difficulty":  "TBD",
                                        "prepTime":  0,
                                        "cookTime":  0,
                                        "servings":  0,
                                        "tags":  [
                                                     "Gluten Free",
                                                     "Onion Free"
                                                 ],
                                        "ingredients":  "Ingredients to be confirmed after testing.",
                                        "instructions":  "Method to be added once this recipe has been tested.",
                                        "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                        "foxNotes":  "Add Fox Notes after the first cook.",
                                        "image":  "greek-salad.jpg"
                                    },
                    "beetroot-salad":  {
                                           "id":  "braai-beetroot-salad",
                                           "slug":  "beetroot-salad",
                                           "name":  "Beetroot Salad",
                                           "categoryId":  "braai",
                                           "category":  "Braai",
                                           "status":  "untested",
                                           "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                           "difficulty":  "TBD",
                                           "prepTime":  0,
                                           "cookTime":  0,
                                           "servings":  0,
                                           "tags":  [
                                                        "Gluten Free",
                                                        "Onion Free"
                                                    ],
                                           "ingredients":  "Ingredients to be confirmed after testing.",
                                           "instructions":  "Method to be added once this recipe has been tested.",
                                           "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                           "foxNotes":  "Add Fox Notes after the first cook.",
                                           "image":  "beetroot-salad.jpg"
                                       },
                    "potato-salad-onion-free":  {
                                                    "id":  "braai-potato-salad-onion-free",
                                                    "slug":  "potato-salad-onion-free",
                                                    "name":  "Potato Salad (Onion-Free)",
                                                    "categoryId":  "braai",
                                                    "category":  "Braai",
                                                    "status":  "untested",
                                                    "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                    "difficulty":  "TBD",
                                                    "prepTime":  0,
                                                    "cookTime":  0,
                                                    "servings":  0,
                                                    "tags":  [
                                                                 "Gluten Free",
                                                                 "Onion Free"
                                                             ],
                                                    "ingredients":  "Ingredients to be confirmed after testing.",
                                                    "instructions":  "Method to be added once this recipe has been tested.",
                                                    "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                    "foxNotes":  "Add Fox Notes after the first cook.",
                                                    "image":  "potato-salad-onion-free.jpg"
                                                },
                    "foil-potatoes":  {
                                          "id":  "braai-foil-potatoes",
                                          "slug":  "foil-potatoes",
                                          "name":  "Foil Potatoes",
                                          "categoryId":  "braai",
                                          "category":  "Braai",
                                          "status":  "untested",
                                          "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                          "difficulty":  "TBD",
                                          "prepTime":  0,
                                          "cookTime":  0,
                                          "servings":  0,
                                          "tags":  [
                                                       "Gluten Free",
                                                       "Onion Free"
                                                   ],
                                          "ingredients":  "Ingredients to be confirmed after testing.",
                                          "instructions":  "Method to be added once this recipe has been tested.",
                                          "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                          "foxNotes":  "Add Fox Notes after the first cook.",
                                          "image":  "foil-potatoes.jpg"
                                      },
                    "stuffed-mushrooms":  {
                                              "id":  "braai-stuffed-mushrooms",
                                              "slug":  "stuffed-mushrooms",
                                              "name":  "Stuffed Mushrooms",
                                              "categoryId":  "braai",
                                              "category":  "Braai",
                                              "status":  "untested",
                                              "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                              "difficulty":  "TBD",
                                              "prepTime":  0,
                                              "cookTime":  0,
                                              "servings":  0,
                                              "tags":  [
                                                           "Gluten Free",
                                                           "Onion Free"
                                                       ],
                                              "ingredients":  "Ingredients to be confirmed after testing.",
                                              "instructions":  "Method to be added once this recipe has been tested.",
                                              "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                              "foxNotes":  "Add Fox Notes after the first cook.",
                                              "image":  "stuffed-mushrooms.jpg"
                                          },
                    "braaied-peaches":  {
                                            "id":  "braai-braaied-peaches",
                                            "slug":  "braaied-peaches",
                                            "name":  "Braaied Peaches",
                                            "categoryId":  "braai",
                                            "category":  "Braai",
                                            "status":  "untested",
                                            "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                            "difficulty":  "TBD",
                                            "prepTime":  0,
                                            "cookTime":  0,
                                            "servings":  0,
                                            "tags":  [
                                                         "Gluten Free",
                                                         "Onion Free"
                                                     ],
                                            "ingredients":  "Ingredients to be confirmed after testing.",
                                            "instructions":  "Method to be added once this recipe has been tested.",
                                            "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                            "foxNotes":  "Add Fox Notes after the first cook.",
                                            "image":  "braaied-peaches.jpg"
                                        },
                    "cinnamon-braai-apples":  {
                                                  "id":  "braai-cinnamon-braai-apples",
                                                  "slug":  "cinnamon-braai-apples",
                                                  "name":  "Cinnamon Braai Apples",
                                                  "categoryId":  "braai",
                                                  "category":  "Braai",
                                                  "status":  "untested",
                                                  "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                  "difficulty":  "TBD",
                                                  "prepTime":  0,
                                                  "cookTime":  0,
                                                  "servings":  0,
                                                  "tags":  [
                                                               "Gluten Free",
                                                               "Onion Free"
                                                           ],
                                                  "ingredients":  "Ingredients to be confirmed after testing.",
                                                  "instructions":  "Method to be added once this recipe has been tested.",
                                                  "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                  "foxNotes":  "Add Fox Notes after the first cook.",
                                                  "image":  "cinnamon-braai-apples.jpg"
                                              },
                    "creamy-butternut-soup":  {
                                                  "id":  "soups-creamy-butternut-soup",
                                                  "slug":  "creamy-butternut-soup",
                                                  "name":  "Creamy Butternut Soup",
                                                  "categoryId":  "soups",
                                                  "category":  "Soups \u0026 Comfort Foods",
                                                  "status":  "untested",
                                                  "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                  "difficulty":  "TBD",
                                                  "prepTime":  0,
                                                  "cookTime":  0,
                                                  "servings":  0,
                                                  "tags":  [
                                                               "Gluten Free",
                                                               "Onion Free"
                                                           ],
                                                  "ingredients":  "Ingredients to be confirmed after testing.",
                                                  "instructions":  "Method to be added once this recipe has been tested.",
                                                  "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                  "foxNotes":  "Add Fox Notes after the first cook.",
                                                  "image":  "creamy-butternut-soup.jpg"
                                              },
                    "chicken-vegetable-soup":  {
                                                   "id":  "soups-chicken-vegetable-soup",
                                                   "slug":  "chicken-vegetable-soup",
                                                   "name":  "Chicken \u0026 Vegetable Soup",
                                                   "categoryId":  "soups",
                                                   "category":  "Soups \u0026 Comfort Foods",
                                                   "status":  "untested",
                                                   "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                   "difficulty":  "TBD",
                                                   "prepTime":  0,
                                                   "cookTime":  0,
                                                   "servings":  0,
                                                   "tags":  [
                                                                "Gluten Free",
                                                                "Onion Free"
                                                            ],
                                                   "ingredients":  "Ingredients to be confirmed after testing.",
                                                   "instructions":  "Method to be added once this recipe has been tested.",
                                                   "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                   "foxNotes":  "Add Fox Notes after the first cook.",
                                                   "image":  "chicken-vegetable-soup.jpg"
                                               },
                    "roasted-red-pepper-soup":  {
                                                    "id":  "soups-roasted-red-pepper-soup",
                                                    "slug":  "roasted-red-pepper-soup",
                                                    "name":  "Roasted Red Pepper Soup",
                                                    "categoryId":  "soups",
                                                    "category":  "Soups \u0026 Comfort Foods",
                                                    "status":  "untested",
                                                    "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                    "difficulty":  "TBD",
                                                    "prepTime":  0,
                                                    "cookTime":  0,
                                                    "servings":  0,
                                                    "tags":  [
                                                                 "Gluten Free",
                                                                 "Onion Free"
                                                             ],
                                                    "ingredients":  "Ingredients to be confirmed after testing.",
                                                    "instructions":  "Method to be added once this recipe has been tested.",
                                                    "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                    "foxNotes":  "Add Fox Notes after the first cook.",
                                                    "image":  "roasted-red-pepper-soup.jpg"
                                                },
                    "beef-stew":  {
                                      "id":  "soups-beef-stew",
                                      "slug":  "beef-stew",
                                      "name":  "Beef Stew",
                                      "categoryId":  "soups",
                                      "category":  "Soups \u0026 Comfort Foods",
                                      "status":  "untested",
                                      "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                      "difficulty":  "TBD",
                                      "prepTime":  0,
                                      "cookTime":  0,
                                      "servings":  0,
                                      "tags":  [
                                                   "Gluten Free",
                                                   "Onion Free"
                                               ],
                                      "ingredients":  "Ingredients to be confirmed after testing.",
                                      "instructions":  "Method to be added once this recipe has been tested.",
                                      "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                      "foxNotes":  "Add Fox Notes after the first cook.",
                                      "image":  "beef-stew.jpg"
                                  },
                    "potjie":  {
                                   "id":  "soups-potjie",
                                   "slug":  "potjie",
                                   "name":  "Potjie",
                                   "categoryId":  "soups",
                                   "category":  "Soups \u0026 Comfort Foods",
                                   "status":  "untested",
                                   "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                   "difficulty":  "TBD",
                                   "prepTime":  0,
                                   "cookTime":  0,
                                   "servings":  0,
                                   "tags":  [
                                                "Gluten Free",
                                                "Onion Free"
                                            ],
                                   "ingredients":  "Ingredients to be confirmed after testing.",
                                   "instructions":  "Method to be added once this recipe has been tested.",
                                   "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                   "foxNotes":  "Add Fox Notes after the first cook.",
                                   "image":  "potjie.jpg"
                               },
                    "simple-chicken-rice":  {
                                                "id":  "soups-simple-chicken-rice",
                                                "slug":  "simple-chicken-rice",
                                                "name":  "Simple Chicken \u0026 Rice",
                                                "categoryId":  "soups",
                                                "category":  "Soups \u0026 Comfort Foods",
                                                "status":  "untested",
                                                "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                "difficulty":  "TBD",
                                                "prepTime":  0,
                                                "cookTime":  0,
                                                "servings":  0,
                                                "tags":  [
                                                             "Gluten Free",
                                                             "Onion Free"
                                                         ],
                                                "ingredients":  "Ingredients to be confirmed after testing.",
                                                "instructions":  "Method to be added once this recipe has been tested.",
                                                "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                "foxNotes":  "Add Fox Notes after the first cook.",
                                                "image":  "simple-chicken-rice.jpg"
                                            },
                    "soft-scrambled-eggs":  {
                                                "id":  "soups-soft-scrambled-eggs",
                                                "slug":  "soft-scrambled-eggs",
                                                "name":  "Soft Scrambled Eggs",
                                                "categoryId":  "soups",
                                                "category":  "Soups \u0026 Comfort Foods",
                                                "status":  "untested",
                                                "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                "difficulty":  "TBD",
                                                "prepTime":  0,
                                                "cookTime":  0,
                                                "servings":  0,
                                                "tags":  [
                                                             "Gluten Free",
                                                             "Onion Free"
                                                         ],
                                                "ingredients":  "Ingredients to be confirmed after testing.",
                                                "instructions":  "Method to be added once this recipe has been tested.",
                                                "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                "foxNotes":  "Add Fox Notes after the first cook.",
                                                "image":  "soft-scrambled-eggs.jpg"
                                            },
                    "honey-yogurt-bowl":  {
                                              "id":  "soups-honey-yogurt-bowl",
                                              "slug":  "honey-yogurt-bowl",
                                              "name":  "Honey Yogurt Bowl",
                                              "categoryId":  "soups",
                                              "category":  "Soups \u0026 Comfort Foods",
                                              "status":  "untested",
                                              "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                              "difficulty":  "TBD",
                                              "prepTime":  0,
                                              "cookTime":  0,
                                              "servings":  0,
                                              "tags":  [
                                                           "Gluten Free",
                                                           "Onion Free"
                                                       ],
                                              "ingredients":  "Ingredients to be confirmed after testing.",
                                              "instructions":  "Method to be added once this recipe has been tested.",
                                              "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                              "foxNotes":  "Add Fox Notes after the first cook.",
                                              "image":  "honey-yogurt-bowl.jpg"
                                          },
                    "malva-pudding-gf":  {
                                             "id":  "dessert-malva-pudding",
                                             "slug":  "malva-pudding-gf",
                                             "name":  "Malva Pudding (GF)",
                                             "categoryId":  "desserts",
                                             "category":  "Desserts",
                                             "status":  "untested",
                                             "description":  "Classic South African dessert adapted for gluten-free cooking.",
                                             "difficulty":  "Medium",
                                             "prepTime":  20,
                                             "cookTime":  35,
                                             "servings":  8,
                                             "tags":  [
                                                          "Dessert",
                                                          "South African",
                                                          "Gluten Free"
                                                      ],
                                             "ingredients":  [
                                                                 "GF flour",
                                                                 "Eggs",
                                                                 "Milk",
                                                                 "Butter",
                                                                 "Sugar",
                                                                 "Apricot jam"
                                                             ],
                                             "instructions":  [
                                                                  "Prepare batter.",
                                                                  "Bake until cooked.",
                                                                  "Pour warm sauce over pudding.",
                                                                  "Serve warm."
                                                              ],
                                             "huntressNotes":  "GF Treat",
                                             "foxNotes":  "Add Fox Notes after the first cook.",
                                             "image":  "malva-pudding-gf.jpg"
                                         },
                    "peppermint-crisp-tart-gf":  {
                                                     "id":  "dessert-peppermint-crisp-tart",
                                                     "slug":  "peppermint-crisp-tart-gf",
                                                     "name":  "Peppermint Crisp Tart (GF)",
                                                     "categoryId":  "desserts",
                                                     "category":  "Desserts",
                                                     "status":  "untested",
                                                     "description":  "South African favourite using gluten-free biscuits.",
                                                     "difficulty":  "Easy",
                                                     "prepTime":  20,
                                                     "cookTime":  0,
                                                     "servings":  8,
                                                     "tags":  [
                                                                  "Dessert",
                                                                  "No Bake",
                                                                  "South African"
                                                              ],
                                                     "ingredients":  [
                                                                         "GF biscuits",
                                                                         "Peppermint Crisp chocolate",
                                                                         "Cream",
                                                                         "Caramel Treat"
                                                                     ],
                                                     "instructions":  [
                                                                          "Layer biscuits.",
                                                                          "Add caramel mixture.",
                                                                          "Add peppermint crisp.",
                                                                          "Chill before serving."
                                                                      ],
                                                     "huntressNotes":  "GF Adaptation",
                                                     "foxNotes":  "Add Fox Notes after the first cook.",
                                                     "image":  "peppermint-crisp-tart-gf.jpg"
                                                 },
                    "milk-tart":  {
                                      "id":  "desserts-milk-tart",
                                      "slug":  "milk-tart",
                                      "name":  "Milk Tart (GF)",
                                      "categoryId":  "desserts",
                                      "category":  "Desserts",
                                      "status":  "untested",
                                      "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                      "difficulty":  "TBD",
                                      "prepTime":  0,
                                      "cookTime":  0,
                                      "servings":  0,
                                      "tags":  [
                                                   "Gluten Free",
                                                   "Onion Free"
                                               ],
                                      "ingredients":  "Ingredients to be confirmed after testing.",
                                      "instructions":  "Method to be added once this recipe has been tested.",
                                      "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                      "foxNotes":  "Add Fox Notes after the first cook.",
                                      "image":  "milk-tart.jpg"
                                  },
                    "chocolate-mousse":  {
                                             "id":  "desserts-chocolate-mousse",
                                             "slug":  "chocolate-mousse",
                                             "name":  "Chocolate Mousse",
                                             "categoryId":  "desserts",
                                             "category":  "Desserts",
                                             "status":  "untested",
                                             "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                             "difficulty":  "TBD",
                                             "prepTime":  0,
                                             "cookTime":  0,
                                             "servings":  0,
                                             "tags":  [
                                                          "Gluten Free",
                                                          "Onion Free"
                                                      ],
                                             "ingredients":  "Ingredients to be confirmed after testing.",
                                             "instructions":  "Method to be added once this recipe has been tested.",
                                             "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                             "foxNotes":  "Add Fox Notes after the first cook.",
                                             "image":  "chocolate-mousse.jpg"
                                         },
                    "chocolate-covered-strawberries":  {
                                                           "id":  "desserts-chocolate-covered-strawberries",
                                                           "slug":  "chocolate-covered-strawberries",
                                                           "name":  "Chocolate Covered Strawberries",
                                                           "categoryId":  "desserts",
                                                           "category":  "Desserts",
                                                           "status":  "untested",
                                                           "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                           "difficulty":  "TBD",
                                                           "prepTime":  0,
                                                           "cookTime":  0,
                                                           "servings":  0,
                                                           "tags":  [
                                                                        "Gluten Free",
                                                                        "Onion Free"
                                                                    ],
                                                           "ingredients":  "Ingredients to be confirmed after testing.",
                                                           "instructions":  "Method to be added once this recipe has been tested.",
                                                           "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                           "foxNotes":  "Add Fox Notes after the first cook.",
                                                           "image":  "chocolate-covered-strawberries.jpg"
                                                       },
                    "hot-chocolate-mug":  {
                                              "id":  "desserts-hot-chocolate-mug",
                                              "slug":  "hot-chocolate-mug",
                                              "name":  "Hot Chocolate Mug",
                                              "categoryId":  "desserts",
                                              "category":  "Desserts",
                                              "status":  "untested",
                                              "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                              "difficulty":  "TBD",
                                              "prepTime":  0,
                                              "cookTime":  0,
                                              "servings":  0,
                                              "tags":  [
                                                           "Gluten Free",
                                                           "Onion Free"
                                                       ],
                                              "ingredients":  "Ingredients to be confirmed after testing.",
                                              "instructions":  "Method to be added once this recipe has been tested.",
                                              "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                              "foxNotes":  "Add Fox Notes after the first cook.",
                                              "image":  "hot-chocolate-mug.jpg"
                                          },
                    "honey-roasted-peaches":  {
                                                  "id":  "desserts-honey-roasted-peaches",
                                                  "slug":  "honey-roasted-peaches",
                                                  "name":  "Honey Roasted Peaches",
                                                  "categoryId":  "desserts",
                                                  "category":  "Desserts",
                                                  "status":  "untested",
                                                  "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                  "difficulty":  "TBD",
                                                  "prepTime":  0,
                                                  "cookTime":  0,
                                                  "servings":  0,
                                                  "tags":  [
                                                               "Gluten Free",
                                                               "Onion Free"
                                                           ],
                                                  "ingredients":  "Ingredients to be confirmed after testing.",
                                                  "instructions":  "Method to be added once this recipe has been tested.",
                                                  "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                  "foxNotes":  "Add Fox Notes after the first cook.",
                                                  "image":  "honey-roasted-peaches.jpg"
                                              },
                    "cinnamon-apples":  {
                                            "id":  "desserts-cinnamon-apples",
                                            "slug":  "cinnamon-apples",
                                            "name":  "Cinnamon Apples",
                                            "categoryId":  "desserts",
                                            "category":  "Desserts",
                                            "status":  "untested",
                                            "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                            "difficulty":  "TBD",
                                            "prepTime":  0,
                                            "cookTime":  0,
                                            "servings":  0,
                                            "tags":  [
                                                         "Gluten Free",
                                                         "Onion Free"
                                                     ],
                                            "ingredients":  "Ingredients to be confirmed after testing.",
                                            "instructions":  "Method to be added once this recipe has been tested.",
                                            "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                            "foxNotes":  "Add Fox Notes after the first cook.",
                                            "image":  "cinnamon-apples.jpg"
                                        },
                    "berry-cream-cups":  {
                                             "id":  "desserts-berry-cream-cups",
                                             "slug":  "berry-cream-cups",
                                             "name":  "Berry \u0026 Cream Cups",
                                             "categoryId":  "desserts",
                                             "category":  "Desserts",
                                             "status":  "untested",
                                             "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                             "difficulty":  "TBD",
                                             "prepTime":  0,
                                             "cookTime":  0,
                                             "servings":  0,
                                             "tags":  [
                                                          "Gluten Free",
                                                          "Onion Free"
                                                      ],
                                             "ingredients":  "Ingredients to be confirmed after testing.",
                                             "instructions":  "Method to be added once this recipe has been tested.",
                                             "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                             "foxNotes":  "Add Fox Notes after the first cook.",
                                             "image":  "berry-cream-cups.jpg"
                                         },
                    "strawberry-cheesecake-cups":  {
                                                       "id":  "desserts-strawberry-cheesecake-cups",
                                                       "slug":  "strawberry-cheesecake-cups",
                                                       "name":  "Strawberry Cheesecake Cups",
                                                       "categoryId":  "desserts",
                                                       "category":  "Desserts",
                                                       "status":  "untested",
                                                       "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                       "difficulty":  "TBD",
                                                       "prepTime":  0,
                                                       "cookTime":  0,
                                                       "servings":  0,
                                                       "tags":  [
                                                                    "Gluten Free",
                                                                    "Onion Free"
                                                                ],
                                                       "ingredients":  "Ingredients to be confirmed after testing.",
                                                       "instructions":  "Method to be added once this recipe has been tested.",
                                                       "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                       "foxNotes":  "Add Fox Notes after the first cook.",
                                                       "image":  "strawberry-cheesecake-cups.jpg"
                                                   },
                    "blueberry-cheesecake-cups":  {
                                                      "id":  "desserts-blueberry-cheesecake-cups",
                                                      "slug":  "blueberry-cheesecake-cups",
                                                      "name":  "Blueberry Cheesecake Cups",
                                                      "categoryId":  "desserts",
                                                      "category":  "Desserts",
                                                      "status":  "untested",
                                                      "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                      "difficulty":  "TBD",
                                                      "prepTime":  0,
                                                      "cookTime":  0,
                                                      "servings":  0,
                                                      "tags":  [
                                                                   "Gluten Free",
                                                                   "Onion Free"
                                                               ],
                                                      "ingredients":  "Ingredients to be confirmed after testing.",
                                                      "instructions":  "Method to be added once this recipe has been tested.",
                                                      "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                      "foxNotes":  "Add Fox Notes after the first cook.",
                                                      "image":  "blueberry-cheesecake-cups.jpg"
                                                  },
                    "berry-frozen-yogurt":  {
                                                "id":  "desserts-berry-frozen-yogurt",
                                                "slug":  "berry-frozen-yogurt",
                                                "name":  "Berry Frozen Yogurt",
                                                "categoryId":  "desserts",
                                                "category":  "Desserts",
                                                "status":  "untested",
                                                "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                "difficulty":  "TBD",
                                                "prepTime":  0,
                                                "cookTime":  0,
                                                "servings":  0,
                                                "tags":  [
                                                             "Gluten Free",
                                                             "Onion Free"
                                                         ],
                                                "ingredients":  "Ingredients to be confirmed after testing.",
                                                "instructions":  "Method to be added once this recipe has been tested.",
                                                "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                "foxNotes":  "Add Fox Notes after the first cook.",
                                                "image":  "berry-frozen-yogurt.jpg"
                                            },
                    "mango-sorbet":  {
                                         "id":  "desserts-mango-sorbet",
                                         "slug":  "mango-sorbet",
                                         "name":  "Mango Sorbet",
                                         "categoryId":  "desserts",
                                         "category":  "Desserts",
                                         "status":  "untested",
                                         "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                         "difficulty":  "TBD",
                                         "prepTime":  0,
                                         "cookTime":  0,
                                         "servings":  0,
                                         "tags":  [
                                                      "Gluten Free",
                                                      "Onion Free"
                                                  ],
                                         "ingredients":  "Ingredients to be confirmed after testing.",
                                         "instructions":  "Method to be added once this recipe has been tested.",
                                         "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                         "foxNotes":  "Add Fox Notes after the first cook.",
                                         "image":  "mango-sorbet.jpg"
                                     },
                    "rice-pudding":  {
                                         "id":  "desserts-rice-pudding",
                                         "slug":  "rice-pudding",
                                         "name":  "Rice Pudding",
                                         "categoryId":  "desserts",
                                         "category":  "Desserts",
                                         "status":  "untested",
                                         "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                         "difficulty":  "TBD",
                                         "prepTime":  0,
                                         "cookTime":  0,
                                         "servings":  0,
                                         "tags":  [
                                                      "Gluten Free",
                                                      "Onion Free"
                                                  ],
                                         "ingredients":  "Ingredients to be confirmed after testing.",
                                         "instructions":  "Method to be added once this recipe has been tested.",
                                         "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                         "foxNotes":  "Add Fox Notes after the first cook.",
                                         "image":  "rice-pudding.jpg"
                                     },
                    "vanilla-custard":  {
                                            "id":  "desserts-vanilla-custard",
                                            "slug":  "vanilla-custard",
                                            "name":  "Vanilla Custard",
                                            "categoryId":  "desserts",
                                            "category":  "Desserts",
                                            "status":  "untested",
                                            "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                            "difficulty":  "TBD",
                                            "prepTime":  0,
                                            "cookTime":  0,
                                            "servings":  0,
                                            "tags":  [
                                                         "Gluten Free",
                                                         "Onion Free"
                                                     ],
                                            "ingredients":  "Ingredients to be confirmed after testing.",
                                            "instructions":  "Method to be added once this recipe has been tested.",
                                            "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                            "foxNotes":  "Add Fox Notes after the first cook.",
                                            "image":  "vanilla-custard.jpg"
                                        },
                    "cheese-rice-crackers":  {
                                                 "id":  "snacks-cheese-rice-crackers",
                                                 "slug":  "cheese-rice-crackers",
                                                 "name":  "Cheese \u0026 Rice Crackers",
                                                 "categoryId":  "snacks",
                                                 "category":  "Snacks \u0026 Picnic Foods",
                                                 "status":  "untested",
                                                 "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                 "difficulty":  "TBD",
                                                 "prepTime":  0,
                                                 "cookTime":  0,
                                                 "servings":  0,
                                                 "tags":  [
                                                              "Gluten Free",
                                                              "Onion Free"
                                                          ],
                                                 "ingredients":  "Ingredients to be confirmed after testing.",
                                                 "instructions":  "Method to be added once this recipe has been tested.",
                                                 "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                 "foxNotes":  "Add Fox Notes after the first cook.",
                                                 "image":  "cheese-rice-crackers.jpg"
                                             },
                    "boiled-eggs-fruit":  {
                                              "id":  "snacks-boiled-eggs-fruit",
                                              "slug":  "boiled-eggs-fruit",
                                              "name":  "Boiled Eggs \u0026 Fruit",
                                              "categoryId":  "snacks",
                                              "category":  "Snacks \u0026 Picnic Foods",
                                              "status":  "untested",
                                              "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                              "difficulty":  "TBD",
                                              "prepTime":  0,
                                              "cookTime":  0,
                                              "servings":  0,
                                              "tags":  [
                                                           "Gluten Free",
                                                           "Onion Free"
                                                       ],
                                              "ingredients":  "Ingredients to be confirmed after testing.",
                                              "instructions":  "Method to be added once this recipe has been tested.",
                                              "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                              "foxNotes":  "Add Fox Notes after the first cook.",
                                              "image":  "boiled-eggs-fruit.jpg"
                                          },
                    "chicken-snack-box":  {
                                              "id":  "snacks-chicken-snack-box",
                                              "slug":  "chicken-snack-box",
                                              "name":  "Chicken Snack Box",
                                              "categoryId":  "snacks",
                                              "category":  "Snacks \u0026 Picnic Foods",
                                              "status":  "untested",
                                              "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                              "difficulty":  "TBD",
                                              "prepTime":  0,
                                              "cookTime":  0,
                                              "servings":  0,
                                              "tags":  [
                                                           "Gluten Free",
                                                           "Onion Free"
                                                       ],
                                              "ingredients":  "Ingredients to be confirmed after testing.",
                                              "instructions":  "Method to be added once this recipe has been tested.",
                                              "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                              "foxNotes":  "Add Fox Notes after the first cook.",
                                              "image":  "chicken-snack-box.jpg"
                                          },
                    "chia-berry-cups":  {
                                            "id":  "snacks-chia-berry-cups",
                                            "slug":  "chia-berry-cups",
                                            "name":  "Chia Berry Cups",
                                            "categoryId":  "snacks",
                                            "category":  "Snacks \u0026 Picnic Foods",
                                            "status":  "untested",
                                            "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                            "difficulty":  "TBD",
                                            "prepTime":  0,
                                            "cookTime":  0,
                                            "servings":  0,
                                            "tags":  [
                                                         "Gluten Free",
                                                         "Onion Free"
                                                     ],
                                            "ingredients":  "Ingredients to be confirmed after testing.",
                                            "instructions":  "Method to be added once this recipe has been tested.",
                                            "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                            "foxNotes":  "Add Fox Notes after the first cook.",
                                            "image":  "chia-berry-cups.jpg"
                                        },
                    "yogurt-honey-pot":  {
                                             "id":  "snacks-yogurt-honey-pot",
                                             "slug":  "yogurt-honey-pot",
                                             "name":  "Yogurt \u0026 Honey Pot",
                                             "categoryId":  "snacks",
                                             "category":  "Snacks \u0026 Picnic Foods",
                                             "status":  "untested",
                                             "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                             "difficulty":  "TBD",
                                             "prepTime":  0,
                                             "cookTime":  0,
                                             "servings":  0,
                                             "tags":  [
                                                          "Gluten Free",
                                                          "Onion Free"
                                                      ],
                                             "ingredients":  "Ingredients to be confirmed after testing.",
                                             "instructions":  "Method to be added once this recipe has been tested.",
                                             "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                             "foxNotes":  "Add Fox Notes after the first cook.",
                                             "image":  "yogurt-honey-pot.jpg"
                                         },
                    "trail-mix-huntress-safe":  {
                                                    "id":  "snacks-trail-mix-huntress-safe",
                                                    "slug":  "trail-mix-huntress-safe",
                                                    "name":  "Trail Mix (Huntress Safe)",
                                                    "categoryId":  "snacks",
                                                    "category":  "Snacks \u0026 Picnic Foods",
                                                    "status":  "untested",
                                                    "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                    "difficulty":  "TBD",
                                                    "prepTime":  0,
                                                    "cookTime":  0,
                                                    "servings":  0,
                                                    "tags":  [
                                                                 "Gluten Free",
                                                                 "Onion Free"
                                                             ],
                                                    "ingredients":  "Ingredients to be confirmed after testing.",
                                                    "instructions":  "Method to be added once this recipe has been tested.",
                                                    "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                    "foxNotes":  "Add Fox Notes after the first cook.",
                                                    "image":  "trail-mix-huntress-safe.jpg"
                                                },
                    "rice-cakes-peanut-butter":  {
                                                     "id":  "snacks-rice-cakes-peanut-butter",
                                                     "slug":  "rice-cakes-peanut-butter",
                                                     "name":  "Rice Cakes \u0026 Peanut Butter",
                                                     "categoryId":  "snacks",
                                                     "category":  "Snacks \u0026 Picnic Foods",
                                                     "status":  "untested",
                                                     "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                     "difficulty":  "TBD",
                                                     "prepTime":  0,
                                                     "cookTime":  0,
                                                     "servings":  0,
                                                     "tags":  [
                                                                  "Gluten Free",
                                                                  "Onion Free"
                                                              ],
                                                     "ingredients":  "Ingredients to be confirmed after testing.",
                                                     "instructions":  "Method to be added once this recipe has been tested.",
                                                     "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                     "foxNotes":  "Add Fox Notes after the first cook.",
                                                     "image":  "rice-cakes-peanut-butter.jpg"
                                                 },
                    "picnic-cheese-board":  {
                                                "id":  "snacks-picnic-cheese-board",
                                                "slug":  "picnic-cheese-board",
                                                "name":  "Picnic Cheese Board",
                                                "categoryId":  "snacks",
                                                "category":  "Snacks \u0026 Picnic Foods",
                                                "status":  "untested",
                                                "description":  "Gluten-free, onion-free, and IBS-conscious. Recipe details to be added after testing.",
                                                "difficulty":  "TBD",
                                                "prepTime":  0,
                                                "cookTime":  0,
                                                "servings":  0,
                                                "tags":  [
                                                             "Gluten Free",
                                                             "Onion Free"
                                                         ],
                                                "ingredients":  "Ingredients to be confirmed after testing.",
                                                "instructions":  "Method to be added once this recipe has been tested.",
                                                "huntressNotes":  "GF. Onion-Free. IBS-conscious.",
                                                "foxNotes":  "Add Fox Notes after the first cook.",
                                                "image":  "picnic-cheese-board.jpg"
                                            }
                }
};
