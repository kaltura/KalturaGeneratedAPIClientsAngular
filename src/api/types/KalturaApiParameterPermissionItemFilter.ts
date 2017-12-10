
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaApiParameterPermissionItemFilter',KalturaApiParameterPermissionItemFilter);
