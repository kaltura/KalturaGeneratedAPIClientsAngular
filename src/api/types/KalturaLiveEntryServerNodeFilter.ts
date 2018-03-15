
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLiveEntryServerNodeBaseFilter, KalturaLiveEntryServerNodeBaseFilterArgs } from './KalturaLiveEntryServerNodeBaseFilter';

export interface KalturaLiveEntryServerNodeFilterArgs  extends KalturaLiveEntryServerNodeBaseFilterArgs {
    
}


export class KalturaLiveEntryServerNodeFilter extends KalturaLiveEntryServerNodeBaseFilter {

    

    constructor(data? : KalturaLiveEntryServerNodeFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveEntryServerNodeFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveEntryServerNodeFilter',KalturaLiveEntryServerNodeFilter);
