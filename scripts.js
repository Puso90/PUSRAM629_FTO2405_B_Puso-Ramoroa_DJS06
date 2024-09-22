// A list of provinces:
const provinces = ['Tshwane', 'North West','Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


// 1. Old fashioned map() structure, could have used arrow => function
const firstMap = provinces.map(function(province) {
   console.log(`Name of province: ${province}`);
   return ;
});

    console.log(" ") // FOR SPACE IN BETWEEN


// 2. Uppercase Transformation
const secondMap = provinces.map(function(province) {
  console.log(`Name of province: ${province.toUpperCase()}`);
  return ;
});

    console.log(" ") // FOR SPACE IN BETWEEN    


// 3.  Counts number of letters in each name  
// Looks more like a Coder that knows what he's doing
const nameLengths = names.map(name => {
  const container = {};
  container[name] = name.length;
  return container;
});

console.log(nameLengths);

    console.log(" "); // FOR SPACE IN BETWEEN 


// 4.  Sorted array of province names, Alphabetically
const sortedProvinces = provinces.sort(
  (a, b) => a.localeCompare(b)
);
  console.log(provinces);

    console.log(" ") // FOR SPACE IN BETWEEN 


// 5.  Fltered out all provinces with "Cape"
let removeCape = sortedProvinces.filter(
  province => !province.includes("Cape"))

  console.log(removeCape);
  console.log(`Provinces left: ${removeCape.length}`);


  console.log(" ") // FOR SPACE IN BETWEEN 


// 6.  Looks for the "S" letter in the names array
const lookingForAss = names.map(name => 
  name.toUpperCase().includes('S')) 
  console.log(`Looking for letter "S": \n` + lookingForAss.join('   '));

  console.log(" ") // FOR SPACE IN BETWEEN 


// Assuming the names and provinces arrays are of the same length
const nameAndProvince = names.reduce((accumulator, name, index) => {
  accumulator[name] = provinces[index];
  return accumulator;
}, {});

console.log(nameAndProvince);


//6.  Finding "S"

/*
1. *DONE*ForEach Basics**: Use `forEach` to log each name and each province to the console. Then, log each name with a matching province in the format "Name (Province)".
2. *DONE*Uppercase Transformation**: Use `map` to create a new array of province names in all uppercase. Log the new array to the console.
3. *DONE*Name Lengths**: Create a new array using `map` that contains the length of each name.
4. *DONE*Sorting**: Use `sort` to alphabetically sort the provinces. 
5. *DONE*Filtering Cape**: Use `filter` to remove provinces containing "Cape". Log the count of remaining provinces.
6. *DONE*Finding 'S'**: Create a boolean array using `map` and `some` to determine if a name contains the letter 'S'.
7. *DONE*Creating Object Mapping**: Use `reduce` to transform the names array into an object mapping names to their respective provinces.

TRIED & TESTED:

    1.  ALSO WORKS - const nameLengths = names.map(name => name.length);

    2.  let removeCape = sortedProvinces.filter(
        value => value !== "Cape"
        ); console.log(removeCape);




REFERENCES:

map()
    1.  https://www.youtube.com/watch?v=49btOoxofyA&list=PLzL6Lxjbsg8801_0zXY-rKR5ra32wNqRY&index=14
    2.  https://www.youtube.com/watch?v=-6cYQNY6rok&list=PLzL6Lxjbsg8801_0zXY-rKR5ra32wNqRY&index=32


sort()
    1.  https://www.youtube.com/shorts/RmT2sYLUSSI *
    2.  https://www.youtube.com/shorts/niH-Rp4Yu3E
    3.  https://www.youtube.com/shorts/AGVPBhaxZbs




*/