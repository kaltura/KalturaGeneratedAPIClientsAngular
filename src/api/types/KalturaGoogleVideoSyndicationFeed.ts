
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaGoogleSyndicationFeedAdultValues } from './KalturaGoogleSyndicationFeedAdultValues';
import { KalturaBaseSyndicationFeed, KalturaBaseSyndicationFeedArgs } from './KalturaBaseSyndicationFeed';

export interface KalturaGoogleVideoSyndicationFeedArgs  extends KalturaBaseSyndicationFeedArgs {
    adultContent? : KalturaGoogleSyndicationFeedAdultValues;
}


export class KalturaGoogleVideoSyndicationFeed extends KalturaBaseSyndicationFeed {

    adultContent : KalturaGoogleSyndicationFeedAdultValues;

    constructor(data? : KalturaGoogleVideoSyndicationFeedArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGoogleVideoSyndicationFeed' },
				adultContent : { type : 'es', subTypeConstructor : KalturaGoogleSyndicationFeedAdultValues, subType : 'KalturaGoogleSyndicationFeedAdultValues' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaGoogleVideoSyndicationFeed',KalturaGoogleVideoSyndicationFeed);
