
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaExternalMediaEntryBaseFilter, KalturaExternalMediaEntryBaseFilterArgs } from './KalturaExternalMediaEntryBaseFilter';

export interface KalturaExternalMediaEntryFilterArgs  extends KalturaExternalMediaEntryBaseFilterArgs {
    
}


export class KalturaExternalMediaEntryFilter extends KalturaExternalMediaEntryBaseFilter {

    

    constructor(data? : KalturaExternalMediaEntryFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaExternalMediaEntryFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaExternalMediaEntryFilter',KalturaExternalMediaEntryFilter);
