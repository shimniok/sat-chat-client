import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDividerModule } from "@angular/material/divider";

import { ScrollToBottomDirective } from "./scroll-to-bottom.directive";
import { AppComponent } from "./app.component";
import { DeviceService } from "./device.service";
import { MessageService } from "./message.service";
import { SettingsComponent } from "./settings/settings.component";
import { InputComponent } from "./input/input.component";
import { MessagesComponent } from "./messages/messages.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule
  ],
  declarations: [
    AppComponent,
    SettingsComponent,
    InputComponent,
    ScrollToBottomDirective,
    MessagesComponent
  ],
  bootstrap: [AppComponent],
  providers: [DeviceService, MessageService]
})
export class AppModule {}
