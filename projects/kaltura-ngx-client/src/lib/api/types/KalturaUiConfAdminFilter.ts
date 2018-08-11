
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUiConfAdminBaseFilter, KalturaUiConfAdminBaseFilterArgs } from './KalturaUiConfAdminBaseFilter';

export interface KalturaUiConfAdminFilterArgs  extends KalturaUiConfAdminBaseFilterArgs {
    
}


export class KalturaUiConfAdminFilter extends KalturaUiConfAdminBaseFilter {

    

    constructor(data? : KalturaUiConfAdminFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUiConfAdminFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUiConfAdminFilter'] = KalturaUiConfAdminFilter;