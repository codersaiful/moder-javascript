
let number = (a,b,c) => {
    console.log(a,b,c);
};

let employes = {
    name: "Saiful Islam",
    age: 35,
    designation: "CEO"
};
//number(12,3333,'sslkd');
//console.log(employes?.salam);

class Test{
    //Private Variable
    #name = "Saiful Islam";
    get(){
        console.log(this.#name);
    }
}

const tst = new Test();
tst.get();