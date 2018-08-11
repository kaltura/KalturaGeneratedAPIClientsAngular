
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaPlayReadyPolicyBaseFilter, KalturaPlayReadyPolicyBaseFilterArgs } from './KalturaPlayReadyPolicyBaseFilter';

export interface KalturaPlayReadyPolicyFilterArgs  extends KalturaPlayReadyPolicyBaseFilterArgs {
    
}


export class KalturaPlayReadyPolicyFilter extends KalturaPlayReadyPolicyBaseFilter {

    

    constructor(data? : KalturaPlayReadyPolicyFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlayReadyPolicyFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPlayReadyPolicyFilter'] = KalturaPlayReadyPolicyFilter;