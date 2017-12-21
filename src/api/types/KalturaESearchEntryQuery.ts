
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchEntryBaseItem, KalturaESearchEntryBaseItemArgs } from './KalturaESearchEntryBaseItem';

export interface KalturaESearchEntryQueryArgs  extends KalturaESearchEntryBaseItemArgs {
    eSearchQuery? : string;
}


export class KalturaESearchEntryQuery extends KalturaESearchEntryBaseItem {

    eSearchQuery : string;

    constructor(data? : KalturaESearchEntryQueryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchEntryQuery' },
				eSearchQuery : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchEntryQuery',KalturaESearchEntryQuery);
