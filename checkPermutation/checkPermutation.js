function checkPermutation(){

   var str1= 'akhila is jimm';
   var str2= 'iMjm is laihka';
document.getElementById("first").value = str1;
document.getElementById("second").value = str2;
   str1 = str1.split("");
   str2 = str2.split("");

   if(str1.sort().join('') === str2.sort().join('')){

       alert('permutations');
   }
   else{
       alert('Not permutations');
   }
}