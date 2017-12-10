

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaESearchLanguage extends KalturaObjectBase {
    private _value : string;
    constructor( value?:string | number){
        super();
        this._value = value + '';
    }

    equals(obj : this) : boolean
    {
        return obj && obj.toString() === this._value;
    }

    toString(){
        return this._value;
    }

    static arabic = new KalturaESearchLanguage('Arabic');
	static basque = new KalturaESearchLanguage('Basque');
	static brazilian = new KalturaESearchLanguage('Brazilian');
	static bulgarian = new KalturaESearchLanguage('Bulgarian');
	static catalan = new KalturaESearchLanguage('Catalan');
	static chinese = new KalturaESearchLanguage('Chinese');
	static czech = new KalturaESearchLanguage('Czech');
	static danish = new KalturaESearchLanguage('Danish');
	static dutch = new KalturaESearchLanguage('Dutch');
	static english = new KalturaESearchLanguage('English');
	static finnish = new KalturaESearchLanguage('Finnish');
	static french = new KalturaESearchLanguage('French');
	static galician = new KalturaESearchLanguage('Galician');
	static german = new KalturaESearchLanguage('German');
	static greek = new KalturaESearchLanguage('Greek');
	static hindi = new KalturaESearchLanguage('Hindi');
	static hungrian = new KalturaESearchLanguage('Hungarian');
	static indonesian = new KalturaESearchLanguage('Indonesian');
	static italian = new KalturaESearchLanguage('Italian');
	static japanese = new KalturaESearchLanguage('Japanese');
	static korean = new KalturaESearchLanguage('Korean');
	static latvian = new KalturaESearchLanguage('Latvian');
	static lithuanian = new KalturaESearchLanguage('Lithuanian');
	static norwegian = new KalturaESearchLanguage('Norwegian');
	static persian = new KalturaESearchLanguage('Persian');
	static portuguese = new KalturaESearchLanguage('Prtuguese');
	static romanian = new KalturaESearchLanguage('Romanian');
	static russian = new KalturaESearchLanguage('Russian');
	static sorani = new KalturaESearchLanguage('Sorani');
	static spanish = new KalturaESearchLanguage('Spanish');
	static swedish = new KalturaESearchLanguage('Swedish');
	static thai = new KalturaESearchLanguage('Thai');
	static turkish = new KalturaESearchLanguage('Turkish');
}
KalturaTypesFactory.registerType('KalturaESearchLanguage',KalturaESearchLanguage);