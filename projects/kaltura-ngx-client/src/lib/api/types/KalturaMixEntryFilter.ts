
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaMixEntryBaseFilter, KalturaMixEntryBaseFilterArgs } from './KalturaMixEntryBaseFilter';

export interface KalturaMixEntryFilterArgs  extends KalturaMixEntryBaseFilterArgs {
    
}


export class KalturaMixEntryFilter extends KalturaMixEntryBaseFilter {

    

    constructor(data? : KalturaMixEntryFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMixEntryFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaMixEntryFilter'] = KalturaMixEntryFilter;