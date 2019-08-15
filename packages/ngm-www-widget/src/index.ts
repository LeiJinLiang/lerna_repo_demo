import { awesomeFn }from '@ngm/ngm-common';
export function cli() {
    console.log('new 00000000.2')
    awesomeFn();
}

class Foo{
    private name: string;
    constructor(name: string){
        this.name = name;
    }
    doSth() : void{
        console.log('run dosth')
    }
}