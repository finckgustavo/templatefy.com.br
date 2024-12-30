interface Profile {
  name: string;
  gender: 'male' | 'female';
  image: string;
}

export const profiles: Profile[] = [
  {
    name: 'Maria',
    gender: 'female',
    image: 'https://i.ibb.co/Fn0c0Pm/mulher1.jpg'
  },
  {
    name: 'Ana',
    gender: 'female',
    image: 'https://i.ibb.co/n0HzJ8m/mulher2.jpg'
  },
  {
    name: 'Julia',
    gender: 'female',
    image: 'https://i.ibb.co/QdNrcPD/mulher3.jpg'
  },
  {
    name: 'Carla',
    gender: 'female',
    image: 'https://i.ibb.co/sVzd8R2/mulher4.jpg'
  },
  {
    name: 'João',
    gender: 'male',
    image: 'https://i.ibb.co/9VNrVcQ/homem1.webp'
  },
  {
    name: 'Pedro',
    gender: 'male',
    image: 'https://i.ibb.co/XJrNk27/homem2.jpg'
  },
  {
    name: 'Lucas',
    gender: 'male',
    image: 'https://i.ibb.co/4sDKm4k/homem3.jpg'
  },
  {
    name: 'Bruno',
    gender: 'male',
    image: 'https://i.ibb.co/XVV5nhs/homem4.jpg'
  }
];