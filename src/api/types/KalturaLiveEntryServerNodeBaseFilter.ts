
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntryServerNodeFilter, KalturaEntryServerNodeFilterArgs } from './KalturaEntryServerNodeFilter';

export interface KalturaLiveEntryServerNodeBaseFilterArgs  extends KalturaEntryServerNodeFilterArgs {
    
}


export class KalturaLiveEntryServerNodeBaseFilter extends KalturaEntryServerNodeFilter {

    

    constructor(data? : KalturaLiveEntryServerNodeBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveEntryServerNodeBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveEntryServerNodeBaseFilter',KalturaLiveEntryServerNodeBaseFilter);
