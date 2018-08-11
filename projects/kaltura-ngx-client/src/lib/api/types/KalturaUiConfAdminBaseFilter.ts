
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUiConfFilter, KalturaUiConfFilterArgs } from './KalturaUiConfFilter';

export interface KalturaUiConfAdminBaseFilterArgs  extends KalturaUiConfFilterArgs {
    
}


export class KalturaUiConfAdminBaseFilter extends KalturaUiConfFilter {

    

    constructor(data? : KalturaUiConfAdminBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUiConfAdminBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUiConfAdminBaseFilter'] = KalturaUiConfAdminBaseFilter;