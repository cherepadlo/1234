console.log ('Лекция 2')
a = +prompt();
b = +prompt();

if (a < b){
    for(i = a; i <=b; i++){
        if (i % 2 == 0){
            console.log ( i*i)
        }
    }
}