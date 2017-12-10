
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaApiActionPermissionItemBaseFilter, KalturaApiActionPermissionItemBaseFilterArgs } from './KalturaApiActionPermissionItemBaseFilter';

export interface KalturaApiActionPermissionItemFilterArgs  extends KalturaApiActionPermissionItemBaseFilterArgs {
    
}


export class KalturaApiActionPermissionItemFilter extends KalturaApiActionPermissionItemBaseFilter {

    

    constructor(data? : KalturaApiActionPermissionItemFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaApiActionPermissionItemFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaApiActionPermissionItemFilter',KalturaApiActionPermissionItemFilter);
