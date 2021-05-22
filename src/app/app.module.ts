import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDividerModule } from "@angular/material/divider";
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from "@angular/material/core";

import { ScrollToBottomDirective } from "./scroll-to-bottom.directive";
import { AppComponent } from "./app.component";
import { DeviceService } from "./device.service";
import { MessageService } from "./message.service";
import { SettingsComponent } from "./settings/settings.component";
import { InputComponent } from "./input/input.component";
import { MessagesComponent } from "./messages/messages.component";
import { ChatComponent } from "./chat/chat.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./auth.guard";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatDividerModule,
    RouterModule.forRoot([
      { path: "login", component: LoginComponent },
      { path: "chat", component: ChatComponent, canActivate: [AuthGuard] },
      { path: "", redirectTo: "chat", pathMatch: "full" },
    ]),
  ],
  declarations: [
    AppComponent,
    SettingsComponent,
    InputComponent,
    ScrollToBottomDirective,
    MessagesComponent,
    ChatComponent,
    LoginComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    DeviceService,
    MessageService,
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ],
})
export class AppModule {}
