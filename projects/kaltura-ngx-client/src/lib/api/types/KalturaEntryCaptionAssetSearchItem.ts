
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSearchItem, KalturaSearchItemArgs } from './KalturaSearchItem';

export interface KalturaEntryCaptionAssetSearchItemArgs  extends KalturaSearchItemArgs {
    contentLike? : string;
	contentMultiLikeOr? : string;
	contentMultiLikeAnd? : string;
}


export class KalturaEntryCaptionAssetSearchItem extends KalturaSearchItem {

    contentLike : string;
	contentMultiLikeOr : string;
	contentMultiLikeAnd : string;

    constructor(data? : KalturaEntryCaptionAssetSearchItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntryCaptionAssetSearchItem' },
				contentLike : { type : 's' },
				contentMultiLikeOr : { type : 's' },
				contentMultiLikeAnd : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEntryCaptionAssetSearchItem'] = KalturaEntryCaptionAssetSearchItem;