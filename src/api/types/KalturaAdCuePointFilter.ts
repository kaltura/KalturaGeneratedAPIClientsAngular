
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAdCuePointBaseFilter, KalturaAdCuePointBaseFilterArgs } from './KalturaAdCuePointBaseFilter';

export interface KalturaAdCuePointFilterArgs  extends KalturaAdCuePointBaseFilterArgs {
    
}


export class KalturaAdCuePointFilter extends KalturaAdCuePointBaseFilter {

    

    constructor(data? : KalturaAdCuePointFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAdCuePointFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAdCuePointFilter',KalturaAdCuePointFilter);
