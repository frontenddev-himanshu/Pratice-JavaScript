let obj = {

    name: "Golu",

    fun1: function () {
        console.log(this.name);
    },

    fun2: () => {
        console.log(this.name);
    }

}

// obj.fun1(); // Golu
// obj.fun2(); //Undefine

// The normalFunc() works as expected because it uses the this of the obj.

// The arrowFunc() outputs undefined because this is inherited from the surrounding scope and doesn’t have a name property.