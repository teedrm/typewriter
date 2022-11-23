const sentence = "hello there from lighthouse labs";

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