import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowAuthedDirective } from './show-authed/show-authed.directive';
import { SelectUserComponent } from './select-user/select-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectRoleComponent } from './select-role/select-role.component';
import { UserFormMangerService } from './select-role/service/user-form-manger.service';
import { FormValidatorService } from './validator/validator-form/form-validator.service';
import { LightFieldService } from './validator/service/light-field.service';

import { MessageWindowComponent } from './pop-up-window/message-window/message-window.component';
import { ValidatorMessageComponent } from './validator/validator-message/validator-message.component';
import { RouterModule } from '@angular/router';
import { AssignDisciplineComponent } from './assign-discipline/assign-discipline.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    ShowAuthedDirective,
    SelectUserComponent,
    ValidatorMessageComponent,
    SelectRoleComponent,
    MessageWindowComponent,
    AssignDisciplineComponent
  ],
  providers: [
    UserFormMangerService,
    FormValidatorService,
    LightFieldService
  ],
  exports: [
    ShowAuthedDirective,
    SelectUserComponent,
    ValidatorMessageComponent,
    SelectRoleComponent,
    MessageWindowComponent,
    AssignDisciplineComponent
  ]
})
export class SharedModule { }
