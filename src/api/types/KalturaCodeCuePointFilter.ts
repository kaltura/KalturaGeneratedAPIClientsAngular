
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCodeCuePointBaseFilter, KalturaCodeCuePointBaseFilterArgs } from './KalturaCodeCuePointBaseFilter';

export interface KalturaCodeCuePointFilterArgs  extends KalturaCodeCuePointBaseFilterArgs {
    
}


export class KalturaCodeCuePointFilter extends KalturaCodeCuePointBaseFilter {

    

    constructor(data? : KalturaCodeCuePointFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCodeCuePointFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCodeCuePointFilter',KalturaCodeCuePointFilter);
