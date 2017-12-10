
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaBaseSyndicationFeedBaseFilterArgs  extends KalturaFilterArgs {
    
}


export class KalturaBaseSyndicationFeedBaseFilter extends KalturaFilter {

    

    constructor(data? : KalturaBaseSyndicationFeedBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseSyndicationFeedBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBaseSyndicationFeedBaseFilter',KalturaBaseSyndicationFeedBaseFilter);
