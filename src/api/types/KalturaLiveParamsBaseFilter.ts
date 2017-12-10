
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFlavorParamsFilter, KalturaFlavorParamsFilterArgs } from './KalturaFlavorParamsFilter';

export interface KalturaLiveParamsBaseFilterArgs  extends KalturaFlavorParamsFilterArgs {
    
}


export class KalturaLiveParamsBaseFilter extends KalturaFlavorParamsFilter {

    

    constructor(data? : KalturaLiveParamsBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveParamsBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveParamsBaseFilter',KalturaLiveParamsBaseFilter);
