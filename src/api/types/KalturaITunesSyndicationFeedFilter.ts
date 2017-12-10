
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaITunesSyndicationFeedBaseFilter, KalturaITunesSyndicationFeedBaseFilterArgs } from './KalturaITunesSyndicationFeedBaseFilter';

export interface KalturaITunesSyndicationFeedFilterArgs  extends KalturaITunesSyndicationFeedBaseFilterArgs {
    
}


export class KalturaITunesSyndicationFeedFilter extends KalturaITunesSyndicationFeedBaseFilter {

    

    constructor(data? : KalturaITunesSyndicationFeedFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaITunesSyndicationFeedFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaITunesSyndicationFeedFilter',KalturaITunesSyndicationFeedFilter);
