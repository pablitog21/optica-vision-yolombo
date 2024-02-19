export interface ImageData {
  id: number;
  src: string;
  text: string;
  title: string;
}

export interface AdData {
  id: number;
  src: string;
}

export interface AdPromo {
  id: number;
  src: string;
}


export const imageData: ImageData[] = [
  {
    id: 1,
    src: "assets/images/gafa-1.jpeg",
    text: "Personalizonalizacion en monturas",
    title: "pruebas dev",
  },
  {
    id: 2,
    src: "assets/images/gafa-2.jpeg",
    text: "Monturas y accesorios, personaliza tu experiencia",
    title: "pruebas dev",
  },
  {
    id: 3,
    src: "assets/images/gafa-1.jpeg",
    text: "Personalizonalizacion en monturas",
    title: "pruebas dev",
  },
  {
    id: 4,
    src: "assets/images/gafa-2.jpeg",
    text: "Monturas y accesorios, personaliza tu experiencia",
    title: "pruebas dev",
  },

];

export const adData: AdData[] = [
  {
    id: 1,
    src: "assets/images/publicidad-2.jpeg",
  },
  {
    id: 2,
    src: "assets/images/publicidad.jpeg"
  },

];

export const adPromo: AdPromo[] = [
  {
    id: 1,
    src: "assets/images/new-publicidad.jpg",
  },
  

]


