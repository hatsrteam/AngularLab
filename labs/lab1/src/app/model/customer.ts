import {NgForm,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder } from '@angular/forms'

export class Customer {
    CustomerName: string = "Chan Tai Ming";
    CustomerCode: string = "1234";
    CustomerAmount: number = 0;
    
    // create object of form group
    formGroup: FormGroup = null;

    constructor(){
        // use the builder to create the
        // the form object
        var _builder = new FormBuilder();
        this.formGroup = _builder.group({});

        // Adding a simple validation
        this.formGroup.addControl('CustomerNameControl', new FormControl('',Validators.required));

        // Adding a composite validation
        var validationcollection = [];
        validationcollection.push(Validators.required);
        validationcollection.push(Validators.pattern("^[A-Z]{1,1}[0-9]{4,4}$"));
        
        this.formGroup.addControl('CustomerCodeControl', new FormControl('', Validators.compose(validationcollection)));

         // Adding a simple validation
        this.formGroup.addControl('CustomerAmountControl', new FormControl('',Validators.required));
    }
}
