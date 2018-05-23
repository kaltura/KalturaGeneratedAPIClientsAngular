
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCatalogItemLanguage } from './KalturaCatalogItemLanguage';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDictionaryArgs  extends KalturaObjectBaseArgs {
    language? : KalturaCatalogItemLanguage;
	data? : string;
}


export class KalturaDictionary extends KalturaObjectBase {

    language : KalturaCatalogItemLanguage;
	data : string;

    constructor(data? : KalturaDictionaryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDictionary' },
				language : { type : 'es', subTypeConstructor : KalturaCatalogItemLanguage, subType : 'KalturaCatalogItemLanguage' },
				data : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDictionary',KalturaDictionary);
