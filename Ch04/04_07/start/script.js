// let food = {
//     _list:[],
//     set addName(name){
//         this._list.push(name);
//     },
//     get list() {
//         return this._list.join("$#$     ");
//     }
// };

// food.addName= "jiaozi"

// food.addName= "ramen"

// food.addName= "steak"

// food.addName= "chips"

// food.addName= "potato"

// console.log(food.list)


let food = {
    _list:[],
    set addName(name){
        this._list.push(name);
    },
    get list() {
        return this._list.join("  #  ");
    }
};

food.addName= "jiaozi"

food.addName= "ramen"

food.addName= "steak"

food.addName= "chips"

food.addName= "potato"

console.log(food.list)


let school = {
    list:[],
    set jiashang(name) {
        this.list.push(name);
    },
    get liebiao() {
        return this.list.join(" , ");

    }
};

school.jiashang="xiu xiao xue"
school.jiashang="shida fuzhaong"
school.jiashang="No.1 Milldle school"
school.jiashang="Tsinghwa primary school"
school.jiashang="Hebei shida fuzhoang"

console.log(school.liebiao)



