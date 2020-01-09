import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, enabled: boolean): any {
    if(enabled)
    {
      var l = value.length
      value = ""
      for(let i = 0; i < l; i++)
      {
        value += '*'
      }
    }

    return value;
  }

}
