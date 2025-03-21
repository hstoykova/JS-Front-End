function makeMap(jsonArr) {
  let myMap = new Map();

  for (let jsonString of jsonArr) {
    let currentObj = JSON.parse(jsonString);
    let key = Object.keys(currentObj);
    myMap.set(key[0], currentObj[key[0]]);
  }

  const sortedByKey = new Map(
    Array.from(myMap).sort((a, b) => a[0].localeCompare(b[0]))
  );

  for (let [term, definition] of sortedByKey) {
    console.log(`Term: ${term} => Definition: ${definition}`);
  }
}

makeMap([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
makeMap([
  '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
  '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."}',
  '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
  '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
  '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} ',
]);

/*
You will receive an array with strings in the form of JSON's.
You have to parse these strings and combine them into one object. 
Every string from the array will hold terms and a description. 
If you receive the same term twice, replace it with the new definition.
Print every term and definition in that dictionary on new line in format:

`Term: ${term} => Definition: ${definition}`

Don't forget to sort the dictionary alphabetically by the terms as in real dictionaries.
*/
