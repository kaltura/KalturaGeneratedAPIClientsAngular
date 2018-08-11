
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAdminUserBaseFilter, KalturaAdminUserBaseFilterArgs } from './KalturaAdminUserBaseFilter';

export interface KalturaAdminUserFilterArgs  extends KalturaAdminUserBaseFilterArgs {
    
}


export class KalturaAdminUserFilter extends KalturaAdminUserBaseFilter {

    

    constructor(data? : KalturaAdminUserFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAdminUserFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaAdminUserFilter'] = KalturaAdminUserFilter;