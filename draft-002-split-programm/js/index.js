function splitString() {
    var string = "Lucky Cat Club";
    var value = string.split(' ');
    console.log(value)
    document.getElementById("answer").innerHTML = value;

    ["L","u","c","k","y"," ","C","a","t"," ","C","l","u","b"]
};