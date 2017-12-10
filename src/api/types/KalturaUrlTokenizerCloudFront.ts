
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUrlTokenizer, KalturaUrlTokenizerArgs } from './KalturaUrlTokenizer';

export interface KalturaUrlTokenizerCloudFrontArgs  extends KalturaUrlTokenizerArgs {
    keyPairId? : string;
	rootDir? : string;
}


export class KalturaUrlTokenizerCloudFront extends KalturaUrlTokenizer {

    keyPairId : string;
	rootDir : string;

    constructor(data? : KalturaUrlTokenizerCloudFrontArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUrlTokenizerCloudFront' },
				keyPairId : { type : 's' },
				rootDir : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUrlTokenizerCloudFront',KalturaUrlTokenizerCloudFront);
