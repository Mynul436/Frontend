function hello(){
    document.write('Hekko ');
}

hello();
let a=6;
// do{

// document.write("Yahoo baba!!!");
// a++;

// }while(a<10)

// alert("asdf");

console.log('ghkj')

for(let a=1;a<100;a=a+8){
    document.write(a+"<br>")
}
var arr =new Array(4);

arr[0]="Mynul Islam ";
arr[1]="Akash";

a= ['asdf',3,32,'asdff','assdf'];

document.write(arr[1]+"<br>");

a.sort();
a.reverse();    
a.pop();
a.pop();
a.push("neq");
document.write(a);

var arr1=['kanon','saikoth','soad','sadnan','ahmed','mohammad'];

var f=[1,33,2,4,19,51];
document.write(f+"<br>");

var fil=f.filter(fun);

function fun(age){
    return age>=18;
}

document.write(fil);

arr1.forEach(function(value)
{
    document.write("<br>"+ value+" ");
})

var obj={
    fname:'Mynul',
    lname:'Islam',
    age:'24',
    salrary:function(){
      return 10000;
    }
}

document.write(obj.salrary());
console.log(obj);

