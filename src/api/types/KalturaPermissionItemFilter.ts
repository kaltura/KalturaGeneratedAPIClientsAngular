
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPermissionItemBaseFilter, KalturaPermissionItemBaseFilterArgs } from './KalturaPermissionItemBaseFilter';

export interface KalturaPermissionItemFilterArgs  extends KalturaPermissionItemBaseFilterArgs {
    
}


export class KalturaPermissionItemFilter extends KalturaPermissionItemBaseFilter {

    

    constructor(data? : KalturaPermissionItemFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPermissionItemFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPermissionItemFilter',KalturaPermissionItemFilter);
