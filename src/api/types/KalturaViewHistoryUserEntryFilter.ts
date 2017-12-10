
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserEntryFilter, KalturaUserEntryFilterArgs } from './KalturaUserEntryFilter';

export interface KalturaViewHistoryUserEntryFilterArgs  extends KalturaUserEntryFilterArgs {
    
}


export class KalturaViewHistoryUserEntryFilter extends KalturaUserEntryFilter {

    

    constructor(data? : KalturaViewHistoryUserEntryFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaViewHistoryUserEntryFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaViewHistoryUserEntryFilter',KalturaViewHistoryUserEntryFilter);
