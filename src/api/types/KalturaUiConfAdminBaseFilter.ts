
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUiConfFilter, KalturaUiConfFilterArgs } from './KalturaUiConfFilter';

export interface KalturaUiConfAdminBaseFilterArgs  extends KalturaUiConfFilterArgs {
    
}


export class KalturaUiConfAdminBaseFilter extends KalturaUiConfFilter {

    

    constructor(data? : KalturaUiConfAdminBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUiConfAdminBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUiConfAdminBaseFilter',KalturaUiConfAdminBaseFilter);
