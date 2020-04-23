
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaSsoBaseFilter, KalturaSsoBaseFilterArgs } from './KalturaSsoBaseFilter';

export interface KalturaSsoFilterArgs  extends KalturaSsoBaseFilterArgs {
    
}


export class KalturaSsoFilter extends KalturaSsoBaseFilter {

    

    constructor(data? : KalturaSsoFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSsoFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSsoFilter'] = KalturaSsoFilter;