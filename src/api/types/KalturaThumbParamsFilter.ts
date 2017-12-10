
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaThumbParamsBaseFilter, KalturaThumbParamsBaseFilterArgs } from './KalturaThumbParamsBaseFilter';

export interface KalturaThumbParamsFilterArgs  extends KalturaThumbParamsBaseFilterArgs {
    
}


export class KalturaThumbParamsFilter extends KalturaThumbParamsBaseFilter {

    

    constructor(data? : KalturaThumbParamsFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaThumbParamsFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaThumbParamsFilter',KalturaThumbParamsFilter);
