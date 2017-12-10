
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchBaseItem, KalturaESearchBaseItemArgs } from './KalturaESearchBaseItem';

export interface KalturaESearchQueryArgs  extends KalturaESearchBaseItemArgs {
    eSearchQuery? : string;
}


export class KalturaESearchQuery extends KalturaESearchBaseItem {

    eSearchQuery : string;

    constructor(data? : KalturaESearchQueryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchQuery' },
				eSearchQuery : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchQuery',KalturaESearchQuery);
