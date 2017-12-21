
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaESearchCategoryBaseItem, KalturaESearchCategoryBaseItemArgs } from './KalturaESearchCategoryBaseItem';

export interface KalturaESearchCategoryQueryArgs  extends KalturaESearchCategoryBaseItemArgs {
    eSearchQuery? : string;
}


export class KalturaESearchCategoryQuery extends KalturaESearchCategoryBaseItem {

    eSearchQuery : string;

    constructor(data? : KalturaESearchCategoryQueryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchCategoryQuery' },
				eSearchQuery : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaESearchCategoryQuery',KalturaESearchCategoryQuery);
