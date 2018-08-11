
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUiConfBaseFilter, KalturaUiConfBaseFilterArgs } from './KalturaUiConfBaseFilter';

export interface KalturaUiConfFilterArgs  extends KalturaUiConfBaseFilterArgs {
    
}


export class KalturaUiConfFilter extends KalturaUiConfBaseFilter {

    

    constructor(data? : KalturaUiConfFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUiConfFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUiConfFilter'] = KalturaUiConfFilter;