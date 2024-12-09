import { ValidatorFn } from "@angular/forms";

export function emailValidator(domains: string[]):ValidatorFn {
    const domainStr = domains.join('|');
    const regExp = new RegExp(`[0-9A-Za-z]{5,}@[a-z]{3,}.(${domainStr})`)
    

    return (control) => {
        const isInvalid = control.value === '' || regExp.test(control.value)
       
        return isInvalid ? null : {emailValidator: true}
    };
    
}