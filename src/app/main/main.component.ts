import { Component } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  movies: any[] = [
    {
      title: 'KGF: Chapter1',
      releaseYear: 2018,
      genre: 'Action/Thriller',
      director: 'Ritesh Sidhwani',
      imagePath: '../../assets/moviePosters/wp4019377.jpg'
    },
    {
      title: 'Kagar',
      releaseYear: 2021,
      genre: 'Documentary/Mystery',
      director: 'Makarand Mane',
      imagePath: '../../assets/moviePosters/367-3671712_kagar-marathi-movie-poster.jpg'
    },
    {
      title: 'Raanjhanaa',
      releaseYear: 2009,
      genre: 'Comedy/Romance',
      director: 'Aman Gupta',
      imagePath: '../../assets/moviePosters/2cf473e8f7c9b1199683256aa158f1e2.jpg'
    },
    {
      title: 'Tanhaji',
      releaseYear: 2020,
      genre: 'Action/Thriller',
      director: 'Atharva Marathe',
      imagePath: '../../assets/moviePosters/Tanhaji-The-Unsung-Warrior-New-Poster.jpg'
    },
  ];


  images: any[] = [
    {
      imagePath: '../../assets/moviePosters/240_F_249902793_LOAhEdUO7YVgV8EO0VZ6ytDenpWonVuz.jpg',
      description: 'This is a description of the image. You can place any text or content here.'
    },
    {
      imagePath: '../../assets/moviePosters/27f933dd4ff1667b4b0c4e55cc85bf8d.jpg',
      description: 'This is a description of the image. You can place any text or content here.'
    },
    {
      imagePath: '../../assets/moviePosters/2fc0578d1310a68cd9a7bf44b8237703.jpg',
      description: 'This is a description of the image. You can place any text or content here.'
    },
    {
      imagePath: '../../assets/moviePosters/684740_cg-wallpapers-igor-staritsin-ancient-temple-fantasy-ancient-temple_1920x1200_h.jpg',
      description: 'This is a description of the image. You can place any text or content here.'
    },
    {
      imagePath: '../../assets/moviePosters/yogyakarta-java-island-indonesia.jpg',
      description: 'This is a description of the image. You can place any text or content here.'
    },
    {
      imagePath: '../../assets/moviePosters/27f933dd4ff1667b4b0c4e55cc85bf8d.jpg',
      description: 'This is a description of the image. You can place any text or content here.'
    },
    {
      imagePath: '../../assets/moviePosters/2fc0578d1310a68cd9a7bf44b8237703.jpg',
      description: 'This is a description of the image. You can place any text or content here.'
    },
    {
      imagePath: '../../assets/moviePosters/beautiful-image-kandariya-mahadeva.jpg',
      description: 'This is a description of the image. You can place any text or content here.'
    },

  ];


  chores: any[] = [
    {
      title: 'Watch "The Matrix"',
      priority: 'High',
      assignedTo: 'John Doe',
      dueDate: '2023-12-15',
    },
    {
      title: 'Write a review for "Inception"',
      priority: 'Medium',
      assignedTo: 'Jane Smith',
      dueDate: '2023-12-31',
    },
    {
      title: "Watch 'Pulp Fiction'",
      priority: "Medium",
      assignedTo: "Yourself",
      dueDate: "2023-11-30"
    },
    {
      title: "Read 'To Kill a Mockingbird'",
      priority: "High",
      assignedTo: "Sarah Brown",
      dueDate: "2023-12-10"
    },
    {
      title: "Research and plan a vacation to Paris",
      priority: "High",
      assignedTo: "Mark Johnson",
      dueDate: "2024-01-15"
    },
    {
      title: "Organize a family dinner",
      priority: "Medium",
      assignedTo: "Lisa Anderson",
      dueDate: "2023-12-20"
    },
    {
      title: "Complete a 30-minute workout",
      priority: "Low",
      assignedTo: "Yourself",
      dueDate: "2023-11-15"
    },
    {
      title: "Prepare a presentation on climate change",
      priority: "High",
      assignedTo: "David Green",
      dueDate: "2023-12-25"
    },
    {
      title: "Buy groceries for the week",
      priority: "Medium",
      assignedTo: "Yourself",
      dueDate: "2023-11-14"
    },
    {
      title: "Write a short story",
      priority: "Low",
      assignedTo: "Jane Smith",
      dueDate: "2023-12-31"
    },
    {
      title: "Watch 'The Godfather'",
      priority: "Medium",
      assignedTo: "Yourself",
      dueDate: "2023-11-30"
    },
    {
      title: "Read 'The Great Gatsby'",
      priority: "High",
      assignedTo: "Sarah Brown",
      dueDate: "2023-12-10"
    },
    {
      title: "Research and plan a vacation to Tokyo",
      priority: "High",
      assignedTo: "Mark Johnson",
      dueDate: "2024-01-15"
    },
    {
      title: "Organize a family dinner",
      priority: "Medium",
      assignedTo: "Lisa Anderson",
      dueDate: "2023-12-20"
    },
    {
      title: "Complete a 30-minute workout",
      priority: "Low",
      assignedTo: "Yourself",
      dueDate: "2023-11-15"
    },
    {
      title: "Prepare a presentation on renewable energy",
      priority: "High",
      assignedTo: "David Green",
      dueDate: "2023-12-25"
    },
    {
      title: "Buy groceries for the week",
      priority: "Medium",
      assignedTo: "Yourself",
      dueDate: "2023-11-14"
    },
    {
      title: "Write a short story",
      priority: "Low",
      assignedTo: "Jane Smith",
      dueDate: "2023-12-31"
    }, 
  ];

  links: any[] = [
    {
      link: "The Shawshank Redemption (1994) - Directed by Frank Darabont, this film is a classic prison drama based on a Stephen King novella."
    },
    {
      link: "Inception (2010) - Directed by Christopher Nolan, this mind-bending science fiction thriller explores the world of dreams and reality."
    },
    {
      link: "The Godfather (1972) - Directed by Francis Ford Coppola, this iconic crime drama is based on the novel by Mario Puzo and tells the story of the Corleone crime family."
    },
    {
      link: "Pulp Fiction (1994) - Directed by Quentin Tarantino, this nonlinear crime film weaves together multiple interconnected stories."
    },
    {
      link: "The Dark Knight (2008) - Another Christopher Nolan film, this one is a superhero epic featuring Heath Ledger's iconic portrayal of the Joker."
    },

  ];

}


