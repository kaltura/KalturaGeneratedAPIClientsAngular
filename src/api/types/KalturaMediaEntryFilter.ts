
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMediaEntryBaseFilter, KalturaMediaEntryBaseFilterArgs } from './KalturaMediaEntryBaseFilter';

export interface KalturaMediaEntryFilterArgs  extends KalturaMediaEntryBaseFilterArgs {
    
}


export class KalturaMediaEntryFilter extends KalturaMediaEntryBaseFilter {

    

    constructor(data? : KalturaMediaEntryFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMediaEntryFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMediaEntryFilter',KalturaMediaEntryFilter);
