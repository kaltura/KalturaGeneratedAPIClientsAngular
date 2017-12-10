
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDrmPolicyFilter, KalturaDrmPolicyFilterArgs } from './KalturaDrmPolicyFilter';

export interface KalturaPlayReadyPolicyBaseFilterArgs  extends KalturaDrmPolicyFilterArgs {
    
}


export class KalturaPlayReadyPolicyBaseFilter extends KalturaDrmPolicyFilter {

    

    constructor(data? : KalturaPlayReadyPolicyBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlayReadyPolicyBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPlayReadyPolicyBaseFilter',KalturaPlayReadyPolicyBaseFilter);
