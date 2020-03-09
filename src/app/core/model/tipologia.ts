export class Tipologia {
    static readonly AGUAS_Y_VERTIDOS = new Tipologia('assets/img/tipologia/agua.png', 'Aguas y vertidos');
    static readonly BASURAS_CONTENEDORES_LIMPIEZA = new Tipologia('assets/img/tipologia/basura.png', 'Basuras/Contenedores/Limpieza');
    static readonly ANIMALES_VAGABUNDOS = new Tipologia('assets/img/tipologia/animales.png', 'Animales vagabundos');
    static readonly ALUMBRADO = new Tipologia('assets/img/tipologia/alumbrado.png', 'Alumbrado');
    static readonly PARQUES_YJARDINES = new Tipologia('assets/img/tipologia/parque.png', 'Parques y jardines');
    static readonly MOBILIARIO_URBANO_SEÑALES = new Tipologia('assets/img/tipologia/urbano.png', 'Mobiliario urbano/Señales');
   
    static readonly ACERAS_Y_CALZADAS = new Tipologia('assets/img/tipologia/peaton.png', 'Infraestructuras urbanas (Aceras/calzadas/alvantarillado)');

    static readonly PLAGA_DE_INSECTOS = new Tipologia('assets/img/tipologia/isecto.png', 'Plaga de isectos');
    static readonly RETIRADA_DE_VEHICULOS = new Tipologia('assets/img/tipologia/vehiculo.png', 'Retirada de vehiculos');
    static readonly TRANSPORTE = new Tipologia('assets/img/tipologia/transporte.png', 'Transporte');
    static readonly VANDALISMO = new Tipologia('assets/img/tipologia/vandalismo.png', 'Vandalismo');
    static readonly OTROS = new Tipologia('assets/img/tipologia/otros.png', 'Otros');

    private constructor(private readonly image: string, public readonly name: any) {
    }

    toString() {
      return this.name;
    }
  }




