
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaITunesSyndicationFeedCategories } from './KalturaITunesSyndicationFeedCategories';
import { KalturaITunesSyndicationFeedAdultValues } from './KalturaITunesSyndicationFeedAdultValues';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaBaseSyndicationFeed, KalturaBaseSyndicationFeedArgs } from './KalturaBaseSyndicationFeed';

export interface KalturaITunesSyndicationFeedArgs  extends KalturaBaseSyndicationFeedArgs {
    feedDescription? : string;
	language? : string;
	feedLandingPage? : string;
	ownerName? : string;
	ownerEmail? : string;
	feedImageUrl? : string;
	adultContent? : KalturaITunesSyndicationFeedAdultValues;
	feedAuthor? : string;
	enforceOrder? : KalturaNullableBoolean;
}


export class KalturaITunesSyndicationFeed extends KalturaBaseSyndicationFeed {

    feedDescription : string;
	language : string;
	feedLandingPage : string;
	ownerName : string;
	ownerEmail : string;
	feedImageUrl : string;
	readonly category : KalturaITunesSyndicationFeedCategories;
	adultContent : KalturaITunesSyndicationFeedAdultValues;
	feedAuthor : string;
	enforceOrder : KalturaNullableBoolean;

    constructor(data? : KalturaITunesSyndicationFeedArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaITunesSyndicationFeed' },
				feedDescription : { type : 's' },
				language : { type : 's' },
				feedLandingPage : { type : 's' },
				ownerName : { type : 's' },
				ownerEmail : { type : 's' },
				feedImageUrl : { type : 's' },
				category : { type : 'es', readOnly : true, subTypeConstructor : KalturaITunesSyndicationFeedCategories, subType : 'KalturaITunesSyndicationFeedCategories' },
				adultContent : { type : 'es', subTypeConstructor : KalturaITunesSyndicationFeedAdultValues, subType : 'KalturaITunesSyndicationFeedAdultValues' },
				feedAuthor : { type : 's' },
				enforceOrder : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaITunesSyndicationFeed',KalturaITunesSyndicationFeed);
