
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaChinaCacheAlgorithmType } from './KalturaChinaCacheAlgorithmType';
import { KalturaUrlTokenizer, KalturaUrlTokenizerArgs } from './KalturaUrlTokenizer';

export interface KalturaUrlTokenizerChinaCacheArgs  extends KalturaUrlTokenizerArgs {
    algorithmId? : KalturaChinaCacheAlgorithmType;
	keyId? : number;
}


export class KalturaUrlTokenizerChinaCache extends KalturaUrlTokenizer {

    algorithmId : KalturaChinaCacheAlgorithmType;
	keyId : number;

    constructor(data? : KalturaUrlTokenizerChinaCacheArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUrlTokenizerChinaCache' },
				algorithmId : { type : 'en', subTypeConstructor : KalturaChinaCacheAlgorithmType, subType : 'KalturaChinaCacheAlgorithmType' },
				keyId : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUrlTokenizerChinaCache'] = KalturaUrlTokenizerChinaCache;