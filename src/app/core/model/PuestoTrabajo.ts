export class Puestotrabajo {
    private _idUser: string;
    private _profesion: string;
    private _caracteristicas: string;
    private _salario: string;
    private _email: string;
    private _telefono: string;
    private _trabajadores: string;

    constructor(idUser: string, profesion: string, caracteristicas: string, salario: string, email: string, telefono: string, trabajadores: string) {
        this._idUser = idUser;
        this._profesion = profesion;
        this._caracteristicas = caracteristicas;
        this._salario = salario;
        this._email = email;
        this._telefono = telefono;
        this._trabajadores = trabajadores;
    }

    /**
     * Getter idUser
     * @return {string}
     */
    public get idUser(): string {
        return this._idUser;
    }

    /**
     * Getter profesion
     * @return {string}
     */
    public get profesion(): string {
        return this._profesion;
    }

    /**
     * Getter caracteristicas
     * @return {string}
     */
    public get caracteristicas(): string {
        return this._caracteristicas;
    }

    /**
     * Getter salario
     * @return {string}
     */
    public get salario(): string {
        return this._salario;
    }

    /**
     * Getter email
     * @return {string}
     */
    public get email(): string {
        return this._email;
    }

    /**
     * Getter telefono
     * @return {string}
     */
    public get telefono(): string {
        return this._telefono;
    }

    /**
     * Getter trabajadores
     * @return {string}
     */
    public get trabajadores(): string {
        return this._trabajadores;
    }

    /**
     * Setter idUser
     * @param {string} value
     */
    public set idUser(value: string) {
        this._idUser = value;
    }

    /**
     * Setter profesion
     * @param {string} value
     */
    public set profesion(value: string) {
        this._profesion = value;
    }

    /**
     * Setter caracteristicas
     * @param {string} value
     */
    public set caracteristicas(value: string) {
        this._caracteristicas = value;
    }

    /**
     * Setter salario
     * @param {string} value
     */
    public set salario(value: string) {
        this._salario = value;
    }

    /**
     * Setter email
     * @param {string} value
     */
    public set email(value: string) {
        this._email = value;
    }

    /**
     * Setter telefono
     * @param {string} value
     */
    public set telefono(value: string) {
        this._telefono = value;
    }

    /**
     * Setter trabajadores
     * @param {string} value
     */
    public set trabajadores(value: string) {
        this._trabajadores = value;
    }

}
