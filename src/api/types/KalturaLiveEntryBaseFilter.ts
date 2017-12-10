
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMediaEntryFilter, KalturaMediaEntryFilterArgs } from './KalturaMediaEntryFilter';

export interface KalturaLiveEntryBaseFilterArgs  extends KalturaMediaEntryFilterArgs {
    
}


export class KalturaLiveEntryBaseFilter extends KalturaMediaEntryFilter {

    

    constructor(data? : KalturaLiveEntryBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveEntryBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveEntryBaseFilter',KalturaLiveEntryBaseFilter);
