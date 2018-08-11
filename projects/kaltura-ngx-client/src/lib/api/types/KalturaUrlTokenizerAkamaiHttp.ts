
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUrlTokenizer, KalturaUrlTokenizerArgs } from './KalturaUrlTokenizer';

export interface KalturaUrlTokenizerAkamaiHttpArgs  extends KalturaUrlTokenizerArgs {
    paramName? : string;
	rootDir? : string;
}


export class KalturaUrlTokenizerAkamaiHttp extends KalturaUrlTokenizer {

    paramName : string;
	rootDir : string;

    constructor(data? : KalturaUrlTokenizerAkamaiHttpArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUrlTokenizerAkamaiHttp' },
				paramName : { type : 's' },
				rootDir : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUrlTokenizerAkamaiHttp'] = KalturaUrlTokenizerAkamaiHttp;