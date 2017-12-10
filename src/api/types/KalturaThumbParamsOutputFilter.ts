
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaThumbParamsOutputBaseFilter, KalturaThumbParamsOutputBaseFilterArgs } from './KalturaThumbParamsOutputBaseFilter';

export interface KalturaThumbParamsOutputFilterArgs  extends KalturaThumbParamsOutputBaseFilterArgs {
    
}


export class KalturaThumbParamsOutputFilter extends KalturaThumbParamsOutputBaseFilter {

    

    constructor(data? : KalturaThumbParamsOutputFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaThumbParamsOutputFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaThumbParamsOutputFilter',KalturaThumbParamsOutputFilter);
