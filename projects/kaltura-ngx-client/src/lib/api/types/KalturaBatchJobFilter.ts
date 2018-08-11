
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBatchJobBaseFilter, KalturaBatchJobBaseFilterArgs } from './KalturaBatchJobBaseFilter';

export interface KalturaBatchJobFilterArgs  extends KalturaBatchJobBaseFilterArgs {
    
}


export class KalturaBatchJobFilter extends KalturaBatchJobBaseFilter {

    

    constructor(data? : KalturaBatchJobFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBatchJobFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBatchJobFilter'] = KalturaBatchJobFilter;