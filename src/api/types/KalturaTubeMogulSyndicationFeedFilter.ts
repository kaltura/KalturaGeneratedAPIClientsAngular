
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTubeMogulSyndicationFeedBaseFilter, KalturaTubeMogulSyndicationFeedBaseFilterArgs } from './KalturaTubeMogulSyndicationFeedBaseFilter';

export interface KalturaTubeMogulSyndicationFeedFilterArgs  extends KalturaTubeMogulSyndicationFeedBaseFilterArgs {
    
}


export class KalturaTubeMogulSyndicationFeedFilter extends KalturaTubeMogulSyndicationFeedBaseFilter {

    

    constructor(data? : KalturaTubeMogulSyndicationFeedFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTubeMogulSyndicationFeedFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTubeMogulSyndicationFeedFilter',KalturaTubeMogulSyndicationFeedFilter);
