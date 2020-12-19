// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from './data.json';

module.exports.Find = (mssv, code) => {
    let arr = data.sheet1.filter(
        (c) => c.id_student == mssv && c.id_code.substring(6) == code
    );
    if (arr.length === 0) return -1;
    else return arr[0].id;
};
module.exports.getById = (id) => {
    let arr = data.sheet1.filter((c) => c.id == id);
    if (arr.length === 0) return -1;
    else return arr[0]
};