
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseEntryFilter } from './KalturaBaseEntryFilter';
import { KalturaBaseSyndicationFeed, KalturaBaseSyndicationFeedArgs } from './KalturaBaseSyndicationFeed';

export interface KalturaGenericSyndicationFeedArgs  extends KalturaBaseSyndicationFeedArgs {
    feedDescription? : string;
	feedLandingPage? : string;
	entryFilter? : KalturaBaseEntryFilter;
	pageSize? : number;
}


export class KalturaGenericSyndicationFeed extends KalturaBaseSyndicationFeed {

    feedDescription : string;
	feedLandingPage : string;
	entryFilter : KalturaBaseEntryFilter;
	pageSize : number;

    constructor(data? : KalturaGenericSyndicationFeedArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGenericSyndicationFeed' },
				feedDescription : { type : 's' },
				feedLandingPage : { type : 's' },
				entryFilter : { type : 'o', subTypeConstructor : KalturaBaseEntryFilter, subType : 'KalturaBaseEntryFilter' },
				pageSize : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaGenericSyndicationFeed'] = KalturaGenericSyndicationFeed;