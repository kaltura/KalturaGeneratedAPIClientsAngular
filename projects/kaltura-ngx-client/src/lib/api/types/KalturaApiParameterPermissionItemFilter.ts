
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaApiParameterPermissionItemBaseFilter, KalturaApiParameterPermissionItemBaseFilterArgs } from './KalturaApiParameterPermissionItemBaseFilter';

export interface KalturaApiParameterPermissionItemFilterArgs  extends KalturaApiParameterPermissionItemBaseFilterArgs {
    
}


export class KalturaApiParameterPermissionItemFilter extends KalturaApiParameterPermissionItemBaseFilter {

    

    constructor(data? : KalturaApiParameterPermissionItemFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaApiParameterPermissionItemFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaApiParameterPermissionItemFilter'] = KalturaApiParameterPermissionItemFilter;