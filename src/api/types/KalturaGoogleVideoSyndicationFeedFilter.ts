
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaGoogleVideoSyndicationFeedBaseFilter, KalturaGoogleVideoSyndicationFeedBaseFilterArgs } from './KalturaGoogleVideoSyndicationFeedBaseFilter';

export interface KalturaGoogleVideoSyndicationFeedFilterArgs  extends KalturaGoogleVideoSyndicationFeedBaseFilterArgs {
    
}


export class KalturaGoogleVideoSyndicationFeedFilter extends KalturaGoogleVideoSyndicationFeedBaseFilter {

    

    constructor(data? : KalturaGoogleVideoSyndicationFeedFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGoogleVideoSyndicationFeedFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaGoogleVideoSyndicationFeedFilter',KalturaGoogleVideoSyndicationFeedFilter);
