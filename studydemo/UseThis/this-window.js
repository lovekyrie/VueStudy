function foo(i) {

    console.log(this);
    console.log(i);
    this.count++;
}

foo.count = 0;

for (let i = 0; i < 10; i++) {

    if (i > 5) {
        foo(i);
        console.log(foo.count);
    }

}