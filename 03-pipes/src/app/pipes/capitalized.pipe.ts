import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'capitalized'
})

export class CapitalizedPipe implements PipeTransform {
    transform(value: string, all:boolean = true) : string {
        value = value.toLowerCase();
        let names = value.split(" ");
        let cap = "";

        for(let i =0; i < names.length; i++)
        {
            if(all || i == 0)
                cap += (names[i][0].toUpperCase() + names[i].slice(1));
            else
                cap += names[i];
            
            if(i < names.length - 1)
            {
                cap += " ";
            }
        }

        return cap;
    }
}