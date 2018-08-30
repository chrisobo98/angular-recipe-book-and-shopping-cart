// Ingredient Model, describing how the ingredient should look like

// Instead of using the code below, typescript offers a shortcut
// export class Ingredient {
//     public name: string;
//     public amount: number;

//     constructor(name: string, amount: number) {
//         this.name = name;
//         this.amount = amount;
//     }
// }

export class Ingredient {
    constructor(public name: string, public amount: number) {}
}

// The code above does the same thing as the previous code, but it is shortened

