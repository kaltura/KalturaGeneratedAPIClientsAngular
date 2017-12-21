
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchUserBaseItem, KalturaESearchUserBaseItemArgs } from './KalturaESearchUserBaseItem';

export interface KalturaESearchUserQueryArgs  extends KalturaESearchUserBaseItemArgs {
    eSearchQuery? : string;
}


export class KalturaESearchUserQuery extends KalturaESearchUserBaseItem {

    eSearchQuery : string;

    constructor(data? : KalturaESearchUserQueryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchUserQuery' },
				eSearchQuery : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchUserQuery',KalturaESearchUserQuery);
