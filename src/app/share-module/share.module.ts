import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { LimitCharecterPipe } from './pipes/limit-charecter/limit-charecter.pipe';
import { ConfirmationDirective } from './confirmation/confirmation.directive';
import { ConfirmationComponent } from './confirmation/confirmation/confirmation.component';



@NgModule({
  declarations: [LoaderComponent, LimitCharecterPipe, ConfirmationDirective, ConfirmationComponent],
  imports: [
    CommonModule
  ],
  exports: [LoaderComponent, LimitCharecterPipe, ConfirmationDirective, ConfirmationComponent]
})
export class ShareModule { }
