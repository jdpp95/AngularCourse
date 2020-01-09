import { Component } from '@angular/core'

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {

    show = true;

    phrase: any = {
        message: 'The winter is coming',
        author: 'Lord Eddard Stark'
    }

    characters: string[] = ['Arya Stark', 'Tyrion Lannister', 'Daenerys Targaryen']
}