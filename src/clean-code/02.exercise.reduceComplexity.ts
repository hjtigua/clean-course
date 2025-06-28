(() => {
  // Resolver sin la triple condicional dentro del if
  // includes? arrays?

  const fruits: string[] = ["manzana", "cereza", "ciruela"];

  function isRedFruit(fruit: string): boolean {
    return fruits.includes(fruit);
  }

  enum FruitsCategory {
    RED = "red",
    YELLOW = "yellow",
    PURPLE = "purple",
  }

  const fruitsStore = new Map<FruitsCategory, string[]>();
  fruitsStore.set(FruitsCategory.RED, ["manzana", "fresa"]);
  fruitsStore.set(FruitsCategory.YELLOW, ["piña", "banana"]);
  fruitsStore.set(FruitsCategory.PURPLE, ["moras", "uvas"]);

  function getFruitsByColor(color: FruitsCategory): string[] {
    if (!fruitsStore.has(color))
      throw Error("the color must be: red, yellow, purple");

    return fruitsStore.get(color)!;
  }

  // Simplificar esta función
  let isFirstStepWorking = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking = true;
  let isFourthStepWorking = true;

  function workingSteps() {
    if (!isFirstStepWorking) return "First step broken.";
    if (!isSecondStepWorking) return "Second step broken.";
    if (!isThirdStepWorking) return "Third step broken.";
    if (!isFourthStepWorking) return "Fourth step broken.";
    return "Working properly!";
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit("cereza"), fruit: "cereza" }); // true
  console.log({ isRedFruit: isRedFruit("piña"), fruit: "piña" }); // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor(FruitsCategory.RED) }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor(FruitsCategory.YELLOW) }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor(FruitsCategory.PURPLE) }); // ['moras', 'uvas']
  // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();
