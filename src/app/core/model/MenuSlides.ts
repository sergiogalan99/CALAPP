export class MenuSlides {
    static readonly IMAGEN_10 = new MenuSlides('assets/img/slidesImagenes/10.png', 'Iglesia parroquial de Nuestra Señora de la Asunción.');
    static readonly IMAGEN_13 = new MenuSlides('assets/img/slidesImagenes/13.png', 'Plaza de España. Ayuntamientos antiguo y nuevo.');
    static readonly IMAGEN_1 = new MenuSlides('assets/img/slidesImagenes/1.png', 'Parque trece rosas');
    static readonly IMAGEN_2 = new MenuSlides('assets/img/slidesImagenes/2.png', 'Centro de Salud');
    static readonly IMAGEN_3 = new MenuSlides('assets/img/slidesImagenes/3.png', 'Carretera entrada al pueblo');
    static readonly IMAGEN_4 = new MenuSlides('assets/img/slidesImagenes/4.png', 'Centro de dia');
   
    static readonly IMAGEN_5 = new MenuSlides('assets/img/slidesImagenes/5.png', 'Colegia público San Jose');

    static readonly IMAGEN_6 = new MenuSlides('assets/img/slidesImagenes/6.png', 'Fuente la diversidad');
    static readonly IMAGEN_7 = new MenuSlides('assets/img/slidesImagenes/7.png', 'Casa de la Cultura');
    static readonly IMAGEN_8 = new MenuSlides('assets/img/slidesImagenes/8.png', 'Ayundtamiento nuevo');
    static readonly IMAGEN_9 = new MenuSlides('assets/img/slidesImagenes/9.png', 'Palmera');
    static readonly IMAGEN_11 = new MenuSlides('assets/img/slidesImagenes/11.png', 'Instituto Ruta de la Plata');
    static readonly IMAGEN_12 = new MenuSlides('assets/img/slidesImagenes/12.png', 'Parque avenida Espronceda');

    private constructor(private readonly image: string, public readonly name: any) {
    }

    toString() {
      return this.name;
    }
  }


