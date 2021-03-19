var age = 16;
var isMember = true;
var result = null;
if(age <= 15) {
    result = 800;
}
if(age > 15 && isMember) {
    result = 1000;
}
if(age > 15 && !isMember) {
    result = 1800;
}
document.write(result);