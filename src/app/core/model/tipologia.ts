export class Tipologia {
    static readonly BASURAS = new Tipologia('assets/img/1.png', 'Basuras');
    static readonly RECOGIDA_DE_MUEBLES = new Tipologia('assets/img/2.png', 'Recogida de muebles');
    static readonly LIMPIEZA = new Tipologia('assets/img/3.png', 'Limpieza');
    static readonly MOBILIARIO_URBANO = new Tipologia('assets/img/3.png', 'Mobiliario urbano');
    static readonly ALCANTARILLADO = new Tipologia('assets/img/3.png', 'Alcantarillado');
    static readonly PUNTO_DE_AGUA = new Tipologia('assets/img/3.png', 'Punto de agua');
    static readonly ACERAS_Y_CALZADAS = new Tipologia('assets/img/3.png', 'Aceras y calzadas');
    static readonly ALUMBRADO = new Tipologia('assets/img/3.png', 'Alumbrado');
    static readonly SEÑALES = new Tipologia('assets/img/3.png', 'Señales');
    static readonly PARQUES_YJARDINES = new Tipologia('assets/img/3.png', 'Parques y jardines');
    static readonly PLAGA_DE_INSECTOS = new Tipologia('assets/img/3.png', 'Plaga de isectos');
    static readonly RETIRADA_DE_VEHICULOS = new Tipologia('assets/img/3.png', 'Retirado de vehiculos');
    static readonly TRANSPORTE = new Tipologia('assets/img/3.png', 'Transporte');
    static readonly VANDALISMO = new Tipologia('assets/img/3.png', 'Vandalismo');
    static readonly OTROS = new Tipologia('assets/img/3.png', 'Otros');

    private constructor(private readonly image: string, public readonly name: any) {
    }

    toString() {
      return this.name;
    }
  }




