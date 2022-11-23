const sentence = "hello there from lighthouse labs";

// for (const char of sentence) {

//   setTimeout(() => {
//     process.stdout.write(char);
//   }, 1000); // <= 1s delay to make it noticeable. Can dial it down later.
// }

const typewriter = sentence => {
  for (let char = 0; char < sentence.length; char++) {
    
    setTimeout(() => {
      process.stdout.write(sentence[char]);
    }, char * 100);
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, sentence.length * 120);
};

typewriter(sentence);