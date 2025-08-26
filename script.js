function stringChop(str, size) {
  // your code here
	let chunks = [];
	 for (let i = 0; i < str.length; i += size) {
    // Slice the string to get a chunk and push it to the array
    chunks.push(str.slice(i, i + size));
  }
return chunks.join('\n');
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
