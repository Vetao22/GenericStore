import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive(
{
  selector: '[UrlValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: UrlValidator, multi: true}]
})

export class UrlValidator implements Validator
{
  validate(controlSource: AbstractControl): {[key: string]: any} | null
  {
    const test = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?').test(controlSource.value);

    return test ? null : { urlError: controlSource.value };
  }
}
