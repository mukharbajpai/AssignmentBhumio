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
        const lineNumber = Number(line.split(".")[0]);

        if (isNaN(lineNumber) || !line.toLowerCase().includes("unkn")) continue;

        const ansLetters = line.split("Yes")[1];
        let lineResult = "Yes";

        if (ansLetters.toLowerCase().split("unkn")[0].includes("no")) {
            lineResult = "No";
        }
        solution.push({
            lineNumber,
            lineResult
        })
        // console.log(lineNumber, "=>", lineResult, "\n");
    }
    return solution;
}
module.exports = {getIndices};