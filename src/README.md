function reverse(str){
let regex= new RegExp("[a-zA-Z]");
let arrSpecialAux = []
let result = []
str.split("").forEach((character, i) => {
if(regex.test(character)){
result.push(character)
} else {
arrSpecialAux.push({'char':character, "pos": i})
}
})
result.reverse()
arrSpecialAux.forEach(c =>{
result.splice(c.pos,0,c.char)
})

    return result.join("")

}

console.log(reverse("Ab,c,de!$"))
