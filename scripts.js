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
const withoutPrice = products.filter(product => product.price);

const totalPrice = withoutPrice.reduce((total, product) => {
  return total + Number(product.price);
}, 0);

console.log(totalPrice); 


console.log(" ") // FOR SPACE IN BETWEEN


// 4.  Concatenate all product names into a single string
const concatenatedProducts = products.reduce((accumulator, current) => {
  return accumulator + current.product + ', ';
}, '').slice(0, -2); // Remove the last comma and space

console.log(concatenatedProducts);


console.log(" ") // FOR SPACE IN BETWEEN


// 5.  Finding Extremes
const validProducts = products
  .map(item => ({
    product: item.product,
    price: Number(item.price)
  }))
  .filter(item => !isNaN(item.price));

// Find highest and lowest priced items
const highest = validProducts.reduce((max, item) => item.price > max.price ? item : max);
const lowest = validProducts.reduce((min, item) => item.price < min.price ? item : min);

// Format the result
const result = `Highest: ${highest.product} (R${highest.price}). Lowest: ${lowest.product} (R${lowest.price}).`;

console.log(result);


console.log(" ") // FOR SPACE IN BETWEEN


// 6.  Transform Objects
const transformedProducts = products.reduce((acc, { product, price }) => {
  // Use parseFloat to convert price to a number, handling empty strings and spaces
  const cost = parseFloat(price) || null; // Assign null for invalid prices
  acc.push({ name: product, cost });
  return acc;
}, []);

console.log(transformedProducts);






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