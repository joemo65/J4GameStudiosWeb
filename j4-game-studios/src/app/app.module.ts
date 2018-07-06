import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeadlineFullComponent } from './home/headline-full/headline-full.component';
import { HeadlineHalfComponent } from './home/headline-half/headline-half.component';
import { GamesComponent } from './games/games.component';
import { MerchandiseComponent } from './merchandise/merchandise.component';
import { StreamsComponent } from './streams/streams.component';
import { TeamsComponent } from './teams/teams.component';
import { SupportComponent } from './support/support.component';
import { AboutComponent } from './about/about.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PlayersComponent } from './players/players.component';
import { EventsComponent } from './events/events.component';
import { HeadlineComponent } from './games/headline/headline.component';
import { CardComponent } from './games/card/card.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'games', component: GamesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'coming-soon', component: ComingSoonComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'merchandise', component: MerchandiseComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'streams', component: StreamsComponent },
  { path: 'support', component: SupportComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'events', component: EventsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    HeadlineFullComponent,
    HeadlineHalfComponent,
    GamesComponent,
    MerchandiseComponent,
    StreamsComponent,
    TeamsComponent,
    SupportComponent,
    AboutComponent,
    ComingSoonComponent,
    ContactUsComponent,
    PlayersComponent,
    EventsComponent,
    HeadlineComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }