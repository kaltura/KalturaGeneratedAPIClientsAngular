
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMediaServerNodeBaseFilter, KalturaMediaServerNodeBaseFilterArgs } from './KalturaMediaServerNodeBaseFilter';

export interface KalturaMediaServerNodeFilterArgs  extends KalturaMediaServerNodeBaseFilterArgs {
    
}


export class KalturaMediaServerNodeFilter extends KalturaMediaServerNodeBaseFilter {

    

    constructor(data? : KalturaMediaServerNodeFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMediaServerNodeFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMediaServerNodeFilter',KalturaMediaServerNodeFilter);
