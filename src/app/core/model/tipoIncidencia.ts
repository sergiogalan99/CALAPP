import { Localizacion } from './Localizacion';
export class TipoIncidencia {

     private _idUser: string;
     private _nombreTipologia: string;
     private _fecha: string;
     private _localizacion: string;
     private _descripcion: string;



     constructor(idUser: string, nombreTipologia: string, fecha: string, localizacion: string, descripcion: string) {
          this._idUser = idUser;
          this._nombreTipologia = nombreTipologia;
          this._fecha = fecha;
          this._localizacion = localizacion;
          this._descripcion = descripcion;
     }

    /**
     * Getter idUser
     * @return {string}
     */
	public get idUser(): string {
		return this._idUser;
	}

    /**
     * Getter nombreTipologia
     * @return {string}
     */
	public get nombreTipologia(): string {
		return this._nombreTipologia;
	}

    /**
     * Getter fecha
     * @return {string}
     */
	public get fecha(): string {
		return this._fecha;
	}

    /**
     * Getter localizacion
     * @return {string}
     */
	public get localizacion(): string {
		return this._localizacion;
	}

    /**
     * Getter descripcion
     * @return {string}
     */
	public get descripcion(): string {
		return this._descripcion;
	}

    /**
     * Setter idUser
     * @param {string} value
     */
	public set idUser(value: string) {
		this._idUser = value;
	}

    /**
     * Setter nombreTipologia
     * @param {string} value
     */
	public set nombreTipologia(value: string) {
		this._nombreTipologia = value;
	}

    /**
     * Setter fecha
     * @param {string} value
     */
	public set fecha(value: string) {
		this._fecha = value;
	}

  

    /**
     * Setter localizacion
     * @param {string} value
     */
	public set localizacion(value: string) {
		this._localizacion = value;
	}

    /**
     * Setter descripcion
     * @param {string} value
     */
	public set descripcion(value: string) {
		this._descripcion = value;
	}
	

}