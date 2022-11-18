// Solution
function isValidSudoku(rows) {
    const rowSet = new Set(); // this will remove duplications from the row
    const columnSet = new Set();
    const boxSet = new Set();

    for (let i = 0; i < rows.length; i++) {
        const rows = rows[i];

        for (let j = 0; j < rows.length; j++) {
            const rowNumber = rows[i];
            const columnNumber = rows[j][i];
            const boxCharacter =
                rows[3 * Math.floor(i / 3) + Math.floor(j / 3)][
                    ((i * 3) % 9) + (j % 3)
                ];

            if (rowNumber !== ".") {
                if (columnSet.has(rowNumber)) return false;
                columnSet.add(rowNumber);
            }

            if (columnNumber !== ".") {
                if (rowSet.has(columnNumber)) return false;
                rowSet.add(columnNumber);
            }

            if (boxCharacter !== ".") {
                if (boxSet.has(boxCharacter)) return false;
                boxSet.add(boxCharacter);
            }
        }

        rowSet.clear();
        columnSet.clear();
        boxSet.clear();
    }

    return true;
}
