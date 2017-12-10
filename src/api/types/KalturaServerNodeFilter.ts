
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaServerNodeBaseFilter, KalturaServerNodeBaseFilterArgs } from './KalturaServerNodeBaseFilter';

export interface KalturaServerNodeFilterArgs  extends KalturaServerNodeBaseFilterArgs {
    
}


export class KalturaServerNodeFilter extends KalturaServerNodeBaseFilter {

    

    constructor(data? : KalturaServerNodeFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaServerNodeFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaServerNodeFilter',KalturaServerNodeFilter);
