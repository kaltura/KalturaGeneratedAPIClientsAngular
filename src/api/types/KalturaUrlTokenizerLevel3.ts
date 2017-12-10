
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUrlTokenizer, KalturaUrlTokenizerArgs } from './KalturaUrlTokenizer';

export interface KalturaUrlTokenizerLevel3Args  extends KalturaUrlTokenizerArgs {
    paramName? : string;
	expiryName? : string;
	gen? : string;
}


export class KalturaUrlTokenizerLevel3 extends KalturaUrlTokenizer {

    paramName : string;
	expiryName : string;
	gen : string;

    constructor(data? : KalturaUrlTokenizerLevel3Args)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUrlTokenizerLevel3' },
				paramName : { type : 's' },
				expiryName : { type : 's' },
				gen : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUrlTokenizerLevel3',KalturaUrlTokenizerLevel3);
