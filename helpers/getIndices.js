/**
 * Returns the indices of the lines containing the specified searchText and their corresponding result.
 *
 * @param {string} searchText - The text to search for in the lines
 * @return {Array} An array of objects containing the line number and the result of the search
 */
const getIndices = (searchText) => {
    const solution = [];
    const lines = searchText?.split("\n");
    for (const line of lines) {
        const key = Number(line.split(".")[0]);
        /*
        This code snippet checks if the variable key is not a number, 
        or if the string line does not include the substring "unkn" (case insensitive). If either condition is true, 
        the loop continues to the next iteration.
        */
        if (isNaN(key) || !line.toLowerCase().includes("unkn")) continue;

        const ansLetters = line.split("Yes")[1];
        let value = "Yes";

        if (ansLetters.toLowerCase().split("unkn")[0].includes("no")) {
            value = "No";
        }
        solution.push({
            key,
            value
        })
    }
    return solution;
}
module.exports = {getIndices};