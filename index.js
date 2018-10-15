// Code your solutions in this file

function printBadges(names) {
  for (let i=0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
  }
  return names;
}

	function tailsNeverFails() {
	  let count=0;
	  let tails= Math.random();
	  if (tails >= 0.5) {
       count+=1;
	  }
	}