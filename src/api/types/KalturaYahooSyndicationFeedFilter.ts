
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaYahooSyndicationFeedBaseFilter, KalturaYahooSyndicationFeedBaseFilterArgs } from './KalturaYahooSyndicationFeedBaseFilter';

export interface KalturaYahooSyndicationFeedFilterArgs  extends KalturaYahooSyndicationFeedBaseFilterArgs {
    
}


export class KalturaYahooSyndicationFeedFilter extends KalturaYahooSyndicationFeedBaseFilter {

    

    constructor(data? : KalturaYahooSyndicationFeedFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaYahooSyndicationFeedFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaYahooSyndicationFeedFilter',KalturaYahooSyndicationFeedFilter);
