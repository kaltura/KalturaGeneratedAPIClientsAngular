
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPermissionItemFilter, KalturaPermissionItemFilterArgs } from './KalturaPermissionItemFilter';

export interface KalturaApiActionPermissionItemBaseFilterArgs  extends KalturaPermissionItemFilterArgs {
    
}


export class KalturaApiActionPermissionItemBaseFilter extends KalturaPermissionItemFilter {

    

    constructor(data? : KalturaApiActionPermissionItemBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaApiActionPermissionItemBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaApiActionPermissionItemBaseFilter',KalturaApiActionPermissionItemBaseFilter);
