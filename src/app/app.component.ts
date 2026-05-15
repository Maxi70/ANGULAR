import { Component, Input } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { HeaderComponent} from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from "./components/child.component/child.component";

@Component({ 
    selector:  'app-root',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, FormsModule, ChildComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
 })
 export class AppComponent {
   userName: string = 'adrian';
    title = 'Prueba';
    number: number = 0;
    addOne(){
      this.number++;
    }
    condition: boolean = false;
    condition2: string = "asdasd";
    movies: string[] = ['Spiderman', 'Batman', 'Superman']; 
    animals: any = [
      { id: 1, name: 'Perro', type: 'Mamífero' },  
      { id: 2, name: 'Gato', type: 'Mamífero' },
      { id: 3, name: 'Pájaro', type: 'Ave' },
      { id: 4, name: 'Pez', type: 'Pez' }
    ];  
    @Input() msg: string = '';
    Text: string = 'variable desde el padre';
 }