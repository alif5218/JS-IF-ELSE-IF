var sBangla=Number(prompt('Enter your Bangla Mark'));
var sEnglish=Number(prompt("Enter your English Mark"));
var sMath=Number(prompt("Enter your Math Mark"));
var sPhysics=Number(prompt("Enter your Physics Mark"));
var sChemistry=Number(prompt("Enter your Chemistry Mark"));
var sBiology=Number(prompt("Enter your Biology Mark"));
var sHighermath=Number(prompt("Enter your Highermath Mark"));
var sIct=Number(prompt("Enter your Ict Mark"));
var sIslam=Number(prompt("Enter your Islam Mark"));
var obtainMark=sBangla+sEnglish+sMath+sPhysics+sChemistry+sBiology+sHighermath+sIct+sIslam;

if(sBangla<33 || sEnglish<33 || sMath<33 || sPhysics<33 || sChemistry<33 || sBiology<33 || sHighermath<33 || sIct<33 || sIslam<33){
     document.write("Fail");
}

else if (obtainMark >=800){
    document.write("A+")
}
else if (obtainMark >=630){
    document.write("A")
}
else if(obtainMark >=540){
    document.write("A-")
}
else if(obtainMark >=450){
    document.write("B")
}
else if(obtainMark >=360){
    document.write("c")
}
else if(obtainMark >=297){
    document.write("D")
}
else if(obtainMark <=296){
    document.write("F")
}