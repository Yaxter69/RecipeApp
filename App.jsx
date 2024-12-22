import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  } from "react-native";
  
  const RecipeApp = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");
  const [defaultRecipes, setDefaultRecipes] = useState([]);
  const [searchResults, setSearchResults] = useState(defaultRecipes);
  
  const addRecipe = () => {
  const newRecipe = {
  name: recipeName,
  ingredients: ingredients
  .split(",")
  .map((ingredient) => ingredient.trim()),
  description: description,
  image: "url_to_image",
  };
  
  setDefaultRecipes([...defaultRecipes, newRecipe]);
  
  setRecipeName("");
  setIngredients("");
  setDescription("");
  };
  
  const fetchRecipesByName = () => {
  const ingredientList = ingredients
  .split(",")
  .map((ingredient) => ingredient.trim().toLowerCase());
  
  const defaultRecipes = [
    {
      name: "Борщ с говядиной",
      description:
        "Вкусный красный борщ с говядиной приготовить очень легко.",
      image:
        "https://img1.russianfood.com/dycontent/images_upl/64/big_63397.jpg",
      ingredients: [
        "Говядина",
        "свёкла",
        "картофель",
        "капуста белокочанная",
        "морковь",
        "лук репчатый",
        "томатная паста",
        "масло растительное",
        "уксус",
        "лавровый лист",
        "перец чёрный горошком",
        "соль",
        "вода",
        "зелень укропа и/или петрушки (для подачи)",
        "сметана (для подачи)",
      ],
    },
    {
      name: "Суп «Харчо»",
      description:
        "Суп харчо - вкусный, ароматный, острый. Традиционно харчо варят из говядины, но по этому рецепту готовится суп с курицей.",
      image:
        "https://img1.russianfood.com/dycontent/images_upl/31/big_30806.jpg",
      ingredients: [
        "Курица бройлерная",
        "рис",
        "чеснок",
        "масло сливочное",
        "лук репчатый",
        "морковь",
        "томат-паста",
        "зелень",
        "соль",
      ],
    },
    {
      name: "Шулюм из говядины с овощами",
      description:
        "Шулюм — это густой суп на насыщенном мясном бульоне, с крупно нарезанными овощами. Традиционно блюдо готовилось в казане на костре, но и в кастрюле на плите оно получается необычайно вкусным, наваристым, ярким и ароматным.",
      image:
        "https://img1.russianfood.com/dycontent/images_upl/628/big_627847.jpg",
      ingredients: [
        "Говядина на кости",
        "ребрышки свиные",
        "картофель",
        "перец болгарский",
        "помидоры",
        "лук репчатый",
        "морковь",
        "чеснок",
        "зелень свежая (зеленый лук, укроп, петрушка)",
        "масло растительное",
        "лавровый лист",
        "соль",
        "паприка молотая",
        "перец черный молотый",
        "вода",
      ],
    },
    {
      name: "Шурпа из говядины",
      description:
        "Как известно, обеденная трапеза должна начинаться из первого блюда. Я рекомендую приготовить шурпу из говядины. Суп по этому рецепту получается настолько сытным, что многие после того, как отведали его, отказываются переходить ко второму.",
      image:
        "https://img1.russianfood.com/dycontent/images_upl/173/big_172088.jpg",
      ingredients: [
        "Говядина с косточкой",
        "картофель",
        "морковь",
        "лук",
        "перец сладкий",
        "лист лавровый",
        "соль",
        "куркума",
        "перец",
        "карри",
        "зелень петрушки",
      ],
    },
    {
      name: "Лагман с говядиной",
      description:
        "Лагман готовится с домашней тянутой лапшой. Аппетитный лагман с говядиной и овощами получается очень вкусным, наваристым. А от аромата пряной зелени у вас непременно разыграется аппетит!",
      image:
        "https://img1.russianfood.com/dycontent/images_upl/516/big_515430.jpg",
      ingredients: [
        "Говядина (мякоть)",
        "картофель",
        "помидоры",
        "перец болгарский",
        "лук репчатый",
        "морковь",
        "чеснок",
        "томатная паста",
        "мука",
        "масло растительное",
        "соль",
        "перец чёрный молотый",
        "кинза свежая",
        "укроп свежий",
        "базилик свежий",
        "вода",
      ],
    },
    {
      name: "Бограч - венгерский суп",
      description:
        "Бограч (богораш, бограч-гуляш и т.п.) - это традиционное блюдо мадьярских скотоводов. По правилам венгерский суп бограч готовится на открытом огне в большом котле, отсюда и название блюда: bogrács по-венгерски - котел. Отличительная особенность бограча - это обилие паприки. Ведь какая венгерская кухня без паприки!",
      image:
        "https://img1.russianfood.com/dycontent/images_upl/110/big_109488.jpg",
      ingredients: [
        "Говядина",
        "помидоры",
        "перец сладкий",
        "картофель",
        "перец острый",
        "морковь",
        "лук репчатый",
        "фасоль в томате",
        "масло для жарки",
        "бульон или вода",
        "паприка",
        "соль",
        "перец черный молотый",
        "чеснок",
        "петрушка",
      ],
    },
    {
      name: "Щи «По-русски»",
      description:
        "Классическое национальное блюдо русской кухни, многокомпонентный заправочный суп, основу которого составляет рубленая белокочанная свежая или квашеная капуста, реже капустная рассада или савойская капуста, приготовляемый на костном или мясокостном или рыбном бульоне, грибном, овощном или крупяном отваре.",
      image:
        "https://img1.russianfood.com/dycontent/images_upl/94/big_93408.jpg",
      ingredients: [
        "Мясо (говядина или свинина)",
        "капуста белокочанная",
        "картофель",
        "морковь",
        "лук репчатый",
        "лук зеленый",
        "томат-паста",
        "лавровый лист",
        "перец чёрный молотый",
        "соль",
        "масло растительное или масло сливочное",
      ],
    },
    {
      name: "Рассольник",
      description:
        "Наваристый, на мясном бульоне, суп с солеными огурцами и перловкой был и остается популярным у всех, кто понимает толк в настоящих супах.",
      image:
        "https://img1.russianfood.com/dycontent/images_upl/256/big_255496.jpg",
      ingredients: [
        "Мясо на кости",
        "мясо (мякоть)",
        "морковь",
        "сельдерей черешковый",
        "лук репчатый",
        "вода",
        "огурцы соленые",
        "крупа перловая",
        "картофель",
        "лук зеленый",
        "укроп свежий",
        "лавровый лист",
        "чеснок",
        "масло растительное",
        "соль",
        "сахар",
        "перец черный молотый",
      ],
    },
    {
      name: "Бозартма из курицы",
      description:
        "Легкий, быстрый в приготовлении и очень вкусный куриный суп. Рецепт азербайджанской кухни",
      image:
        "https://img1.russianfood.com/dycontent/images_upl/62/big_61760.jpg",
      ingredients: [
        "Курица или ее части",
        "картофель",
        "лук репчатый",
        "масло сливочное",
        "лавровый лист",
        "соль",
        "перец черный молотый",
        "зелень петрушки и укропа",
        "вода",
      ],
    },
  ];
  
  const results = defaultRecipes.filter((recipe) => {
    const matchesName = recipe.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  
    const matchesIngredients = ingredientList.every((ingredient) =>
      recipe.ingredients.map((i) => i.toLowerCase()).includes(ingredient)
    );
  
    if (searchTerm && ingredients) {
      return matchesName && matchesIngredients;
    } else if (searchTerm) {
      return matchesName;
    } else if (ingredients) {
      return matchesIngredients;
    } else {
      return true;
    }
  });
  
  setSearchResults(results);
  };
  
  return (
  <View style={styles.container}>
  <Text style={styles.title}>Приложение для рецептов</Text>
  <TextInput style={styles.input} placeholder="Поиск рецептов" value={searchTerm} onChangeText={setSearchTerm} />
  <TextInput style={styles.input} placeholder="Ингредиенты (через запятую)" value={ingredients} onChangeText={setIngredients} />
  <Button title="Поиск рецептов" onPress={fetchRecipesByName} />
  
    <Text style={styles.title}>Добавить Рецепт</Text>
    <TextInput
      style={styles.input}
      placeholder="Название рецепта"
      value={recipeName}
      onChangeText={setRecipeName}
    />
    <TextInput
      style={styles.input}
      placeholder="Ингредиенты (через запятую)"
      value={ingredients}
      onChangeText={setIngredients}
    />
    <TextInput
      style={styles.input}
      placeholder="Описание рецепта"
      value={description}
      onChangeText={setDescription}
    />
    <Button title="Добавить рецепт" onPress={addRecipe} />
    <FlatList
      data={searchResults}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.recipeContainer}>
          <Image source={{ uri: item.image }} style={styles.recipeImage} />
          <Text style={styles.recipeName}>{item.name}</Text>
          <Text style={styles.recipeDescription}>{item.description}</Text>
  
          <Text style={styles.ingredientsTitle}>Ингредиенты:</Text>
          <Text style={styles.ingredientsList}>
            {item.ingredients.join(", ")}
          </Text>
        </TouchableOpacity>
      )}
    />
  </View>
  );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#f8f8f8",
      marginTop: 30,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
      textAlign: "center",
    },
    input: {
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
      marginBottom: 10,
      paddingLeft: 10,
      borderRadius: 5,
    },
    recipeContainer: {
      marginBottom: 20,
      backgroundColor: "white",
      borderRadius: 10,
      padding: 15,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 1,
    },
    recipeImage: {
      width: "100%",
      height: 200,
      borderRadius: 10,
    },
    recipeName: {
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 10,
    },
    recipeDescription: {
      marginTop: 5,
      color: "#555",
    },
    ingredientsTitle: {
      fontWeight: "bold",
      marginTop: 15,
    },
    ingredientsList: {
      marginTop: 5,
      color: "#333",
    },
  });
  
  export default RecipeApp;
  