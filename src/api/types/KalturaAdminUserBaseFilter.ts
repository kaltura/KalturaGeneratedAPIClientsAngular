
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserFilter, KalturaUserFilterArgs } from './KalturaUserFilter';

export interface KalturaAdminUserBaseFilterArgs  extends KalturaUserFilterArgs {
    
}


export class KalturaAdminUserBaseFilter extends KalturaUserFilter {

    

    constructor(data? : KalturaAdminUserBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAdminUserBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAdminUserBaseFilter',KalturaAdminUserBaseFilter);
