import { NgModule } from '@angular/core';
import { SharedModule } from 'src/share/shared.module';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [HomeRoutingModule, SharedModule],
  declarations: [HomeComponent],
  exports: [HomeComponent, SharedModule],
})
export class HomeModule {}
