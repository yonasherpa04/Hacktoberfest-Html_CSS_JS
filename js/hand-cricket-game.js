const opt = [0, 1, 2, 4, 6];

function playGame() {

    let overInput = prompt("Enter The Numbers of Over you want play:");
    let numOvers = parseInt(overInput);
    
    while (isNaN(numOvers) || numOvers <= 0) {
        alert("Invalid input. Please enter a valid number of overs.");
        overInput = prompt("Enter The Numbers of Over you want play:");
        numOvers = parseInt(overInput);
    }
    
    const balls = 6 * numOvers;
    
    console.log(`Starting a ${numOvers} over match (${balls} balls).`);
    console.log(`Choose valid option from the list {${opt.join(',')}}`);

    let ball = 0;
    let wicket = 0;
    let score = 0;
    const batsman = [];
    const bowler = [];

    while (ball < balls) {
   
        let batsInput = prompt(`Ball ${ball + 1} of ${balls}. Enter Your Choice:`);
        let bats = parseInt(batsInput);

        while (isNaN(bats) || !opt.includes(bats)) {
            alert("Enter valid Run from the list {0,1,2,4,6}");
            batsInput = prompt(`Ball ${ball + 1} of ${balls}. Enter Your Choice:`);
            bats = parseInt(batsInput);
        }

        const bowlIndex = Math.floor(Math.random() * opt.length);
        const bowl = opt[bowlIndex];
        
        console.log(`\nBall ${ball + 1} | Bowler: ${bowl} | Batsman chose: ${bats}`);

     
        if (bats === bowl) {
       
            wicket += 1;
            batsman.push("x");
            bowler.push(wicket);
            console.log("OUT!");
        } else {
       
            score += bats;
            batsman.push(bats);
            
            if (wicket === 0) {
                bowler.push("-");
            } else {
                bowler.push(wicket);
            }
            console.log(`Scored ${bats} runs. Current Score: ${score}/${wicket}`);
        }

        ball += 1;

    
        if (wicket === 2) {
            console.log("\n*** Game Over! Maximum wickets reached (2 wickets). ***");
            break;
        }
    }


    console.log("\n*************************");
    console.log("      FINAL SCORE CARD");
    console.log("*************************");
    console.log(" Ball\t\tBatsman\t\tBowler");
    
    for (let i = 0; i < ball; i++) {
        console.log(` ${i + 1}\t\t${batsman[i]}\t\t\t${bowler[i]}`);
    }

    console.log("*************************");
    console.log("Your Total Score: ");
    console.log(`You have Played ${ball} Balls`);
    console.log(`Runs=${score}   Wicket=${wicket}`);
    console.log("*************************");
}

playGame();
