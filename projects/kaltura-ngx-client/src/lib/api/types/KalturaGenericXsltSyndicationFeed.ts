
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaExtendingItemMrssParameter } from './KalturaExtendingItemMrssParameter';
import { KalturaGenericSyndicationFeed, KalturaGenericSyndicationFeedArgs } from './KalturaGenericSyndicationFeed';

export interface KalturaGenericXsltSyndicationFeedArgs  extends KalturaGenericSyndicationFeedArgs {
    xslt? : string;
	itemXpathsToExtend? : KalturaExtendingItemMrssParameter[];
}


export class KalturaGenericXsltSyndicationFeed extends KalturaGenericSyndicationFeed {

    xslt : string;
	itemXpathsToExtend : KalturaExtendingItemMrssParameter[];

    constructor(data? : KalturaGenericXsltSyndicationFeedArgs)
    {
        super(data);
        if (typeof this.itemXpathsToExtend === 'undefined') this.itemXpathsToExtend = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGenericXsltSyndicationFeed' },
				xslt : { type : 's' },
				itemXpathsToExtend : { type : 'a', subTypeConstructor : KalturaExtendingItemMrssParameter, subType : 'KalturaExtendingItemMrssParameter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaGenericXsltSyndicationFeed'] = KalturaGenericXsltSyndicationFeed;