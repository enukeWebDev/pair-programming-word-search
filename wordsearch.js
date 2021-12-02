const wordSearch = (letters, word) => {
    if (letters.length === 0) {
        return false;
    }
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        };
    };
    let verticalJoin = transpose(letters);
    verticalJoin = verticalJoin.map(ls => ls.join(''));
    for (l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        };
    };
    return false;
};

const transpose = (matrix) => {
    let rows = [] // Build our columns
    for (let i = 0; i < matrix[0].length; i++) {
        let columns = []; // Build our rows
        for (let j = 0; j < matrix.length; j++) {
            columns.push(matrix[j][i]); // push matrix[j][i] into the rows
        }
        rows.push(columns); // push the rows into the columns
    }
    return rows
};


module.exports = wordSearch;
