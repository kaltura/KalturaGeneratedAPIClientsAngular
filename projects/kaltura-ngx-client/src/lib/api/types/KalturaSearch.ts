
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSearchProviderType } from './KalturaSearchProviderType';
import { KalturaMediaType } from './KalturaMediaType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSearchArgs  extends KalturaObjectBaseArgs {
    keyWords? : string;
	searchSource? : KalturaSearchProviderType;
	mediaType? : KalturaMediaType;
	extraData? : string;
	authData? : string;
}


export class KalturaSearch extends KalturaObjectBase {

    keyWords : string;
	searchSource : KalturaSearchProviderType;
	mediaType : KalturaMediaType;
	extraData : string;
	authData : string;

    constructor(data? : KalturaSearchArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSearch' },
				keyWords : { type : 's' },
				searchSource : { type : 'en', subTypeConstructor : KalturaSearchProviderType, subType : 'KalturaSearchProviderType' },
				mediaType : { type : 'en', subTypeConstructor : KalturaMediaType, subType : 'KalturaMediaType' },
				extraData : { type : 's' },
				authData : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSearch'] = KalturaSearch;