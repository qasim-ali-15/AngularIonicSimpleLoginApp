import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class ResetPageForm{
    private formBuilder: FormBuilder;
    constructor(formBuilder: FormBuilder){
        this.formBuilder = formBuilder;
    }

    createForm(): FormGroup{
        return this.formBuilder.group({
            password: ['',[Validators.required],],
            newPassword: ['',[Validators.required]],
            confirmPassword: ['',[Validators.required]]
        });
    }
}