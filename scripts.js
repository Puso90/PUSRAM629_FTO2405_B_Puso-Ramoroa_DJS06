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

//  Assuming the names and provinces arrays are of the same length
const nameAndProvince = names.reduce((accumulator, name, index) => {
  accumulator[name] = provinces[index];
  return accumulator;
}, {});

console.log(nameAndProvince);


    console.log(" ") // FOR SPACE IN BETWEEN 



  //_________________________________________________________________________________________
  //_________________________________ADVANCED________________________________________________

  // 1.  Logging each product name
  products.forEach(index => {
    console.log(index.product);
  });


  console.log(" ") // FOR SPACE IN BETWEEN


  // 2.  Filter by name length
  products.filter(index => {
    if (index.product.length > 5)
    console.log(index);
  });


  console.log(" ") // FOR SPACE IN BETWEEN

  
  // 3.  Filter out products without prices
const validProducts = products.filter(product => product.price);

const totalPrice = validProducts.reduce((total, product) => {
  return total + Number(product.price);
}, 0);

console.log(totalPrice); 


console.log(" ") // FOR SPACE IN BETWEEN


// Concatenate all product names into a single string
const concatenatedNames = products.reduce((accumulator, product) => {
  return accumulator + product.name + ', ';
}, '');


// Removes the trailing comma and space
const result = concatenatedNames.slice(0, -2);

console.log(result);


console.log(" ") // FOR SPACE IN BETWEEN








/*
1. *DONE*Log Products**: Iterate over the products array, logging each product name.
2. *DONE*Filter by Name Length**: Filter out products with names longer than 5 characters.
3. *DONE*Price Manipulation**: Filter out products without prices, convert string prices to numbers, and calculate the total price using `reduce`.
4. **Concatenate Product Names**: Use `reduce` to concatenate all product names into a single string.
5. **Find Extremes in Prices**: Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."
6. **Object Transformation**: Using `Object.entries` and `reduce`, recreate the products object with keys 'name' and 'cost', maintaining their original values.



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