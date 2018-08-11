
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserRoleBaseFilter, KalturaUserRoleBaseFilterArgs } from './KalturaUserRoleBaseFilter';

export interface KalturaUserRoleFilterArgs  extends KalturaUserRoleBaseFilterArgs {
    
}


export class KalturaUserRoleFilter extends KalturaUserRoleBaseFilter {

    

    constructor(data? : KalturaUserRoleFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserRoleFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUserRoleFilter'] = KalturaUserRoleFilter;