const number_gobelin = 10;
    let gobelins = {};

    const start = ["G", "B"],
        consonnes = ["g", "b", "l", "n"],
        voyelles = ["a", "e", "i", "o", "u"];
      

    for (let j = 0; j < number_gobelin; j++) {

      let gobelin = {
            male: (Math.floor(Math.random() * (100 - 1 + 1)) + 1 <= 42) ? false : true,
            age: Math.floor(Math.random() * (35 - 5 + 1)) + 5,
            dents: Math.floor(Math.random() * (28 - 17 + 1)) + 17
      };
    // Name

    let nb_syllabe = Math.floor(Math.random() * 3) + 1;
    }

    console.log(gobelins)