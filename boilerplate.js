function runProgram(input){
	 var a = Number(input);
}
process.stdin.resume();
//read the input stream

process.stdin.setEncoding("ascii");
//set encoding scheme to ascii

let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
//when process.stdin receives some data, perform read+=input

process.stdin.on("end", function () {
	read = read.replace(/\n$/,"")
   runProgram(read);
});
//when process.stdin receives the signal that there’s no more input, perform read = read.replace(/\n$/,"") and runProgram(read);

process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});
//ctrl+c generates interrupt and after recieving the interrupt signal perform callback function.