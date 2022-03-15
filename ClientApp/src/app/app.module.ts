import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { CounterComponent } from './pages/counter/counter.component';
import { FetchDataComponent } from './pages/fetch-data/fetch-data.component';
import { TestComponent } from './pages/test/test.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';

// Page routes. Add here for a new page.
const routes = [
  // Home page
  { path: '', component: HomeComponent, pathMatch: 'full' },

  // Counter page
  { path: 'counter', component: CounterComponent },

  // Fetch Data page
  { path: 'fetch-data', component: FetchDataComponent },

  // Test page
  { path: 'test', component: TestComponent },
  
  // Todo List page
  { path: 'todo-list', component: TodoListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    TestComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
