
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaFeedItemInfoArgs  extends KalturaObjectBaseArgs {
    itemXPath? : string;
	itemPublishDateXPath? : string;
	itemUniqueIdentifierXPath? : string;
	itemContentFileSizeXPath? : string;
	itemContentUrlXPath? : string;
	itemContentBitrateXPath? : string;
	itemHashXPath? : string;
	itemContentXpath? : string;
	contentBitrateAttributeName? : string;
}


export class KalturaFeedItemInfo extends KalturaObjectBase {

    itemXPath : string;
	itemPublishDateXPath : string;
	itemUniqueIdentifierXPath : string;
	itemContentFileSizeXPath : string;
	itemContentUrlXPath : string;
	itemContentBitrateXPath : string;
	itemHashXPath : string;
	itemContentXpath : string;
	contentBitrateAttributeName : string;

    constructor(data? : KalturaFeedItemInfoArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFeedItemInfo' },
				itemXPath : { type : 's' },
				itemPublishDateXPath : { type : 's' },
				itemUniqueIdentifierXPath : { type : 's' },
				itemContentFileSizeXPath : { type : 's' },
				itemContentUrlXPath : { type : 's' },
				itemContentBitrateXPath : { type : 's' },
				itemHashXPath : { type : 's' },
				itemContentXpath : { type : 's' },
				contentBitrateAttributeName : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFeedItemInfo',KalturaFeedItemInfo);
