class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const stringMap = new Map<string, string[]>();
  // Iterate through the array
  for (let x = 0; x < strs.length; x++) {
    const originalWord = strs[x] as string;
    const sortedWord = originalWord?.split("").sort().join("") as string;
    if (stringMap.has(sortedWord)) {
      const existingMapVal = stringMap.get(sortedWord) as string[];
      stringMap.set(sortedWord, [...existingMapVal, originalWord])
    } else {
      stringMap.set(sortedWord, [originalWord])
    }
  }

  const result = Array.from(stringMap.values());

  return result;

  // For each original word, create a sorted version of that word 
    // Check the Map to see if that sorted word exists in the Map
    // If the sorted word doesn't exist in the Map,
      // add it as a key into a Map and add the value of that to be the non-sorted original word inside of an array
    // If the sorted word already exists in the Map
      // Reassign the value to be the original non-sorted word/s, plus push the current non-sorted word onto the end of that array.
    // After the last loop is finished
    // Create an array from the Map
    // Return the array

    }
}
