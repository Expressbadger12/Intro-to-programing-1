//this is a public class set up in C# code; we capitalize the first letter of our our classes
//this is not required, but it is helpful for other who are maintaining or using the code
public class Animal{
    //properties - things that describe our class/noun
    public string Species { get; set; }
    public string Type { get; set; }
    public string Habitat { get; set; }
    public string Name { get; set; }
    public int Age { get; set; }
    // in a zoo app, we would need to add a number of other properties

    //constructor
    public Animal(string species, string type, string habitat, string name, int age){
        //take the property and set it equal to the variable passed in through the constructor argument
        Species = species;
        Type = type; 
        Habitat = habitat;
        Name = name;
        Age = age;
    }

    //this method is public so it can be access anywhere in the code
    //this method does not return a value, so we indicate that with the keyword void
    public void Eat(){
        Console.WriteLine("the animal eats");
    }

    public void MakeSound(){
        Console.WriteLine($"sound made {Name}");
    }
}

//let's imagine we have the functions set up to run a C# program

Animal lion = new Animal("Feline", "Mammal", "Savanna", "Leo", 5);

lion.Eat();
lion.MakeSound();