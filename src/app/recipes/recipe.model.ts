// blueprint for object created (essentially vanilla javascript)
export class Recipe {
    // the recipe has to have a name
    public name: string;
    // I also want a description on the recipe
    public description: string;
    // since I wont store the image here, I want to store the path to the image, it will hold a url, which is a string in the end
    public imagePath: string;

    // passing the arguments right to the constructor
    // built in function every class has, which will be executed once you create a new instace of the class
    constructor (name: string, desc: string, imagePath: string) {
        // I assigned the items recieved to properties of objects 
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}