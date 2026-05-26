import { Component } from '@angular/core';

interface Tech {
  name: string;
  icon: string;
  color: string;
  category: 'Frontend' | 'Backend';
}

@Component({
  selector: 'app-tecnologys',
  templateUrl: './tecnologys.component.html',
  styleUrl: './tecnologys.component.css'
})
export class TecnologysComponent {

  frontend: Tech[] = [
    { name: 'HTML5',      icon: 'assets/html.png',    color: '#E44D26', category: 'Frontend' },
    { name: 'CSS3',       icon: 'assets/css.png',     color: '#1572B6', category: 'Frontend' },
    { name: 'JavaScript', icon: 'assets/js.png',      color: '#F7DF1E', category: 'Frontend' },
    { name: 'Angular',    icon: 'assets/angular.png', color: '#DD0031', category: 'Frontend' },
    { name: 'ReactJS',    icon: 'assets/react.png',   color: '#61DAFB', category: 'Frontend' },
    { name: 'SASS',       icon: 'assets/sass.png',    color: '#CC6699', category: 'Frontend' },
  ];

  backend: Tech[] = [
    { name: 'NodeJS',  icon: 'assets/Node.png',  color: '#68A063', category: 'Backend' },
    { name: 'Python',  icon: 'assets/py.png',    color: '#3776AB', category: 'Backend' },
    { name: 'Flask',   icon: 'assets/Flask.png', color: '#94A3B8', category: 'Backend' },
  ];
}
