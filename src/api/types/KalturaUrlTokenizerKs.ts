
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUrlTokenizer, KalturaUrlTokenizerArgs } from './KalturaUrlTokenizer';

export interface KalturaUrlTokenizerKsArgs  extends KalturaUrlTokenizerArgs {
    usePath? : boolean;
	additionalUris? : string;
}


export class KalturaUrlTokenizerKs extends KalturaUrlTokenizer {

    usePath : boolean;
	additionalUris : string;

    constructor(data? : KalturaUrlTokenizerKsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUrlTokenizerKs' },
				usePath : { type : 'b' },
				additionalUris : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUrlTokenizerKs',KalturaUrlTokenizerKs);
