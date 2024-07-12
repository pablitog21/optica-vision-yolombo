export interface ImageData {
  id: number;
  src: string;
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
    src: "assets/gafas/1.jpg",
  },
  {
    id: 2,
    src: "assets/gafas/2.jpg",
  },
  {
    id: 3,
    src: "assets/gafas/3.jpg",
  },
  {
    id: 4,
    src: "assets/gafas/5.jpg",
  },
  {
    id: 5,
    src: "assets/gafas/1.jpg",
  },
  {
    id: 6,
    src: "assets/gafas/1.jpg",
  }
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


