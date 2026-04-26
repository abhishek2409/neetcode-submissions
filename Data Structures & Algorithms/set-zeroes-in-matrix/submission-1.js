class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        let rowsNum = matrix.length,
            colsNum = matrix[0].length;
        // const rows = Array(rowsNum).fill(false);
        // const cols = Array(colsNum).fill(false);

        // for(let r = 0; r< rowsNum; r++){
        //     for(let c = 0; c < colsNum; c++){
        //         if(matrix[r][c] === 0){
        //             rows[r] = true;
        //             cols[c] = true;
        //         }
        //     }
        // }

        // for(let r = 0; r< rowsNum; r++){
        //     for(let c = 0; c < colsNum; c++){
        //         if(rows[r] || cols[c]){
        //            matrix[r][c] = 0
        //         }
        //     }
        // }

        let rowZero = false;

        for (let r = 0; r < rowsNum; r++) {
            for (let c = 0; c < colsNum; c++) {
                if (matrix[r][c] === 0) {
                    matrix[0][c] = 0;
                    if (r > 0) {
                        matrix[r][0] = 0;
                    } else {
                        rowZero = true;
                    }
                }
            }
        }
        for (let r = 1; r < rowsNum; r++) {
            for (let c = 1; c < colsNum; c++) {
                if (matrix[0][c] == 0 || matrix[r][0] == 0) {
                    matrix[r][c] = 0;
                }
            }
        }

        if (matrix[0][0] == 0) {
            for (let r = 0; r < rowsNum; r++) {
                matrix[r][0] = 0;
            }
        }
        if (rowZero) {
            for (let c = 0; c < colsNum; c++) {
                matrix[0][c] = 0;
            }
        }
    }
}
