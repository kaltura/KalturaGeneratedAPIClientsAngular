
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTubeMogulSyndicationFeedCategories } from './KalturaTubeMogulSyndicationFeedCategories';
import { KalturaBaseSyndicationFeed, KalturaBaseSyndicationFeedArgs } from './KalturaBaseSyndicationFeed';

export interface KalturaTubeMogulSyndicationFeedArgs  extends KalturaBaseSyndicationFeedArgs {
    
}


export class KalturaTubeMogulSyndicationFeed extends KalturaBaseSyndicationFeed {

    readonly category : KalturaTubeMogulSyndicationFeedCategories;

    constructor(data? : KalturaTubeMogulSyndicationFeedArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTubeMogulSyndicationFeed' },
				category : { type : 'es', readOnly : true, subTypeConstructor : KalturaTubeMogulSyndicationFeedCategories, subType : 'KalturaTubeMogulSyndicationFeedCategories' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTubeMogulSyndicationFeed',KalturaTubeMogulSyndicationFeed);
