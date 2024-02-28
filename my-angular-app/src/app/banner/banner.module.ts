import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';



@NgModule({
  declarations: [BannerComponent],
  imports: [CommonModule],
  exports: [BannerComponent] // Export BannerComponent to make it available outside
})
export class BannerModule { }

