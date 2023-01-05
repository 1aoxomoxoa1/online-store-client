
const sortMap = new Map([
    ["1", "none"],
    ["2", "unit_price DESC"],
    ["3", "unit_price ASC"],
    ["4", "product_name ASC"],
])

const filterMap = new Map([
    ["1", "all"],
    ["2", "CASUAL"],
    ["3", "FORMAL"],
    ["4", "FOOTBALL"],
    ["5", "RUNNING"],
])

module.exports = {sortMap, filterMap};