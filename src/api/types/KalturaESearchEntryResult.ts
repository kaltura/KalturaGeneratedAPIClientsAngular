
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchResult, KalturaESearchResultArgs } from './KalturaESearchResult';

export interface KalturaESearchEntryResultArgs  extends KalturaESearchResultArgs {
    
}


export class KalturaESearchEntryResult extends KalturaESearchResult {

    

    constructor(data? : KalturaESearchEntryResultArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchEntryResult' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchEntryResult',KalturaESearchEntryResult);
