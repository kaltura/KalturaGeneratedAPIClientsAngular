
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUrlTokenizer, KalturaUrlTokenizerArgs } from './KalturaUrlTokenizer';

export interface KalturaUrlTokenizerVelocixArgs  extends KalturaUrlTokenizerArgs {
    hdsPaths? : string;
	paramName? : string;
	authPrefix? : string;
}


export class KalturaUrlTokenizerVelocix extends KalturaUrlTokenizer {

    hdsPaths : string;
	paramName : string;
	authPrefix : string;

    constructor(data? : KalturaUrlTokenizerVelocixArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUrlTokenizerVelocix' },
				hdsPaths : { type : 's' },
				paramName : { type : 's' },
				authPrefix : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUrlTokenizerVelocix',KalturaUrlTokenizerVelocix);
