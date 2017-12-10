
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLiveParamsBaseFilter, KalturaLiveParamsBaseFilterArgs } from './KalturaLiveParamsBaseFilter';

export interface KalturaLiveParamsFilterArgs  extends KalturaLiveParamsBaseFilterArgs {
    
}


export class KalturaLiveParamsFilter extends KalturaLiveParamsBaseFilter {

    

    constructor(data? : KalturaLiveParamsFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveParamsFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveParamsFilter',KalturaLiveParamsFilter);
