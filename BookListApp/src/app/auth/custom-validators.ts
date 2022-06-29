// import { FormGroup,FormControl,AbstractControl,ValidatorFn } from "@angular/forms";

import { FormControl } from "@angular/forms";

// export class CustomValidators{
//     constructor(){}

//     static mustMatch(controlName:string,matchingControlName:string){
//         return (formGroup: FormGroup) => {
//             const control = formGroup.controls[controlName];
//             const matchingControl = formGroup.controls[matchingControlName];
      
//             if (matchingControl.errors && !matchingControl.errors.mustMatch) {
//               return;
//             }
      
//             // set error on matchingControl if validation fails
//             if (control.value !== matchingControl.value) {
//               matchingControl.setErrors({ mustMatch: true });
//             } else {
//               matchingControl.setErrors(null);
//             }
//             return null;
//           };
//     }
// }

export class CustomValidators{

    public static emailValidator (control:FormControl) {

        const regularExpression = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");
        return regularExpression.test(control.value)?null:{"invalid E-mail" : true};
    }
}