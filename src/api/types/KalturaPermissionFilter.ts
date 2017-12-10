
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPermissionBaseFilter, KalturaPermissionBaseFilterArgs } from './KalturaPermissionBaseFilter';

export interface KalturaPermissionFilterArgs  extends KalturaPermissionBaseFilterArgs {
    
}


export class KalturaPermissionFilter extends KalturaPermissionBaseFilter {

    

    constructor(data? : KalturaPermissionFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPermissionFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPermissionFilter',KalturaPermissionFilter);
