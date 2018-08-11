
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDrmPolicyBaseFilter, KalturaDrmPolicyBaseFilterArgs } from './KalturaDrmPolicyBaseFilter';

export interface KalturaDrmPolicyFilterArgs  extends KalturaDrmPolicyBaseFilterArgs {
    
}


export class KalturaDrmPolicyFilter extends KalturaDrmPolicyBaseFilter {

    

    constructor(data? : KalturaDrmPolicyFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDrmPolicyFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDrmPolicyFilter'] = KalturaDrmPolicyFilter;