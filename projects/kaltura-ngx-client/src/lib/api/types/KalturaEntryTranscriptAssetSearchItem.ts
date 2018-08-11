
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSearchItem, KalturaSearchItemArgs } from './KalturaSearchItem';

export interface KalturaEntryTranscriptAssetSearchItemArgs  extends KalturaSearchItemArgs {
    contentLike? : string;
	contentMultiLikeOr? : string;
	contentMultiLikeAnd? : string;
}


export class KalturaEntryTranscriptAssetSearchItem extends KalturaSearchItem {

    contentLike : string;
	contentMultiLikeOr : string;
	contentMultiLikeAnd : string;

    constructor(data? : KalturaEntryTranscriptAssetSearchItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntryTranscriptAssetSearchItem' },
				contentLike : { type : 's' },
				contentMultiLikeOr : { type : 's' },
				contentMultiLikeAnd : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEntryTranscriptAssetSearchItem'] = KalturaEntryTranscriptAssetSearchItem;