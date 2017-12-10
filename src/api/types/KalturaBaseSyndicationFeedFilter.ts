
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseSyndicationFeedBaseFilter, KalturaBaseSyndicationFeedBaseFilterArgs } from './KalturaBaseSyndicationFeedBaseFilter';

export interface KalturaBaseSyndicationFeedFilterArgs  extends KalturaBaseSyndicationFeedBaseFilterArgs {
    
}


export class KalturaBaseSyndicationFeedFilter extends KalturaBaseSyndicationFeedBaseFilter {

    

    constructor(data? : KalturaBaseSyndicationFeedFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseSyndicationFeedFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBaseSyndicationFeedFilter',KalturaBaseSyndicationFeedFilter);
