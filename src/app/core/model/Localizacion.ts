export class Localizacion {

    private _latitud: number;
    private _logitud: number;


	constructor(latitud: number, logitud: number) {
		this._latitud = latitud;
		this._logitud = logitud;
	}


    /**
     * Getter latitud
     * @return {number}
     */
	public get latitud(): number {
		return this._latitud;
	}

    /**
     * Getter logitud
     * @return {number}
     */
	public get logitud(): number {
		return this._logitud;
	}

    /**
     * Setter latitud
     * @param {number} value
     */
	public set latitud(value: number) {
		this._latitud = value;
	}

    /**
     * Setter logitud
     * @param {number} value
     */
	public set logitud(value: number) {
		this._logitud = value;
	}

}