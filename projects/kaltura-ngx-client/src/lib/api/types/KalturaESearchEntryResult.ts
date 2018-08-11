
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';
import { KalturaESearchResult, KalturaESearchResultArgs } from './KalturaESearchResult';

export interface KalturaESearchEntryResultArgs  extends KalturaESearchResultArgs {
    object? : KalturaBaseEntry;
}


export class KalturaESearchEntryResult extends KalturaESearchResult {

    object : KalturaBaseEntry;

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
                objectType : { type : 'c', default : 'KalturaESearchEntryResult' },
				object : { type : 'o', subTypeConstructor : KalturaBaseEntry, subType : 'KalturaBaseEntry' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchEntryResult'] = KalturaESearchEntryResult;